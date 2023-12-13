import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <React.Fragment>
      <div className='color-lane'></div>
      <div className='header-content d-flex align-center'>
        <div className='container d-flex flex-row  align-items-center'>
          <div className='d-flex flex-row  align-items-center text-nowrap'>
            {' '}
            <Link to='/'>
              <img src='/img/logo.png' className='logo' alt='' />
            </Link>
            <h1 className='title'>Team Members</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
