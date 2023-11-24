import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <React.Fragment>
      <div>NotFoundPage</div>
      <Link to='/'>Go to Home Page</Link>
    </React.Fragment>
  )
}
