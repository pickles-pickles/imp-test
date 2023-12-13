import React from 'react'
import { SearchBar } from './SearchBar'
import { Accordion } from './Accordion'
import { useSelector } from 'react-redux'
import {
  errorSelector,
  successSelector,
  usersSelector
} from '../../state-management/slices/appSlice'

export const Content = () => {
  const users = useSelector(usersSelector),
    success = useSelector(successSelector),
    error = useSelector(errorSelector)

  return (
    <div className='container'>
      <section className='row py-3'>
        <div className='col-12 col-md-8 '>
          <SearchBar />
        </div>
        <div className='col-12 col-md-4 text-start text-md-end  mt-3 mt-md-0'>
          {' '}
          {success &&
            !error &&
            users.length > 0 && ( // if data have fetched successfully and there are users
              <p className='fs-4'>{users.length} People</p>
            )}
        </div>
      </section>

      <Accordion />
    </div>
  )
}
