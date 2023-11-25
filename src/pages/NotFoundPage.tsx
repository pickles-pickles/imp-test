import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const StyledLink = styled(Link)(() => ({
  color: 'white',
  textDecoration: 'none',
  fontSize: '2rem',
  '&:hover': {
    color: 'white',
    textDecoration: 'underline white'
  }
}))

export const NotFoundPage = () => {
  return (
    <React.Fragment>
      <div className='page-404-container'>
        <h1>Page Not Found</h1>
        <StyledLink to='/'>Go to Home Page</StyledLink>
      </div>
    </React.Fragment>
  )
}
