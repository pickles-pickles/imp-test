import React from 'react'
import { Link } from 'react-router-dom'

const styledLink = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '2rem'
}

export const NotFoundPage = () => {
  return (
    <React.Fragment>
      <div className='page-404-container'>
        <h1>Page Not Found</h1>
        <Link to='/' style={styledLink}>
          Go to Home Page
        </Link>
      </div>
    </React.Fragment>
  )
}
