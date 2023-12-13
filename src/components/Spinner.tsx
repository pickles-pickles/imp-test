import React from 'react'

export const Spinner = () => {
  return (
    <div
      className='spinner-border'
      style={{ width: '20rem', height: '20rem' }}
      role='status'
    >
      <span className='visually-hidden'>Loading...</span>
    </div>
  )
}
