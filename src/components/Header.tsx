import React from 'react'

export const Header = () => {
  return (
    <React.Fragment>
      <div className='color-lane'></div>
      <div className='header-content d-flex align-center'>
        <div className='container d-flex flex-row  align-items-center'>
          <div className='d-flex flex-row  align-items-center text-nowrap'>
            {' '}
            <img src='/img/logo.png' className='logo' alt='' />
            <h1 className='title'>Team Members</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
