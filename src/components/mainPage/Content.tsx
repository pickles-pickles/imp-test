import React from 'react'
import { SearchBar } from './SearchBar'
import { Accordion } from './Accordion'
import { useSelector } from 'react-redux'
import { usersSelector } from '../../state-management/slices/appSlice'

export const Content = () => {
  const users = useSelector(usersSelector)
  return (
    <div className='container'>
      <section className='row bg-info'>
        <div className='col-12 col-md-8 '>
          <SearchBar />
        </div>
        <div className='col-12 col-md-4 text-end'>
          {' '}
          {/* users.length > 0 && */ <p>{users.length} People</p>}
        </div>
      </section>

      <Accordion />
    </div>
  )
}
