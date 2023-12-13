import React from 'react'
import {
  errorSelector,
  isLoadingSelector,
  successSelector,
  userNameSelector,
  usersSelector
} from '../../state-management/slices/appSlice'
import { useSelector } from 'react-redux'
import { compareSanitizedStrings } from '../../helpers/appHelpers'
import { Spinner } from '../Spinner'
import { ErrorMessage } from '../ErrorMessage'
import { AccordionCard } from './AccordionCard'

export const Accordion = () => {
  const users = useSelector(usersSelector)
  const userName = useSelector(userNameSelector),
    success = useSelector(successSelector),
    error = useSelector(errorSelector),
    isLoading = useSelector(isLoadingSelector)

  return (
    <React.Fragment>
      {success && !error && (
        <div className='accordion' id='userAccordion'>
          {/* 
      //* in case of successful API call, map from users
      */}
          {users
            .filter(user => compareSanitizedStrings(user.name || '', userName))
            .map(user => (
              <AccordionCard user={user} />
            ))}
        </div>
      )}
      {/* 
  // ! handle errors and loading
  */}
      {isLoading && (
        <div className='text-center'>
          <Spinner />
        </div>
      )}
      {error && (
        <div className='text-center'>
          <ErrorMessage error={error} />
        </div>
      )}
    </React.Fragment>
  )
}
