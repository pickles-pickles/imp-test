import React from 'react'

export const ErrorMessage = ({ error }: any) => {
  return (
    <div className='text-center text-danger fs-5'>
      {error.message || 'Something went wrong. Unidentified error'}
    </div>
  )
}
