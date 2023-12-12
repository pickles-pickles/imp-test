import React from 'react'
import { usersSelector } from '../../state-management/slices/appSlice'
import { useSelector } from 'react-redux'

export const Accordion = () => {
  const users = useSelector(usersSelector)
  return (
    <div className='accordion' id='userAccordion'>
      {/* 
        //* map from users
        */}
      {users.map(user => (
        <div className='accordion-item'>
          <h2 className='accordion-header' id={`heading${user.id}`}>
            <button
              className='accordion-button'
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
            className='accordion-collapse collapse show'
            aria-labelledby={`heading${user.id}`}
            data-bs-parent='#userAccordion'
          >
            <div className='accordion-body'>User Info Boby</div>
          </div>
        </div>
      ))}
    </div>
  )
}
