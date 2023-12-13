import React, { useState } from 'react'
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

export const Accordion = () => {
  const users = useSelector(usersSelector)
  const userName = useSelector(userNameSelector),
    success = useSelector(successSelector),
    error = useSelector(errorSelector),
    isLoading = useSelector(isLoadingSelector)
  const [activeAccordion, setActiveAccordion] = useState(null)

  const toggleAccordion = (id: any) => {
    setActiveAccordion(activeAccordion === id ? null : id)
  }
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
              <div className='accordion-item mb-2 ' key={user.id}>
                <h2
                  className='accordion-header'
                  id={`heading${user.id}`}
                  onClick={() => toggleAccordion(user.id)}
                >
                  <button
                    className={`accordion-button ${
                      activeAccordion === user.id ? '' : 'collapsed'
                    }`}
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target={`#collapse${user.id}`}
                    aria-expanded='true'
                    aria-controls={`collapse${user.id}`}
                  >
                    {user.name || 'Anonymous User'}
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  className={`accordion-collapse collapse ${
                    activeAccordion === user.id ? 'show' : ''
                  }`}
                  aria-labelledby={`heading${user.id}`}
                  data-bs-parent='#userAccordion'
                >
                  <div className='accordion-body '>
                    <div className='accordion-body-content d-flex flex-row p-3 mb-2'>
                      <img
                        src='/img/user.jpg'
                        width='90rem'
                        height='90rem'
                        style={{ borderRadius: '50%', marginRight: '20px' }}
                        alt=''
                      />
                      <div className='card-text-container pt-2 '>
                        <a href={`mailto:${user.email}`} className='card-link'>
                          {user.email}
                        </a>
                        <p className='my-card-text'>
                          {user.address && user.address.street
                            ? user.address.street
                            : 'street unknown'}
                          ,{' '}
                          {user.address && user.address.suite
                            ? user.address.suite
                            : 'suite unknown'}
                        </p>
                        <p className='my-card-text'>
                          {user.address && user.address.zipcode
                            ? user.address.zipcode
                            : 'zipcode unknown'}
                          ,{' '}
                          {user.address && user.address.city
                            ? user.address.city
                            : 'city unknown'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
