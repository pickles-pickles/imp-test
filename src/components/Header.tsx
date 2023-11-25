import React from 'react'
import Grid from '@mui/material/Grid'
import { UserNameForm } from './UserNameForm'

export const Header = () => {
  return (
    <Grid container className='title-and-form-wrapper'>
      <Grid
        item
        xs={12}
        lg={6}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <h1 className='title'>
          Home Assignment for the React developer position in Konnektable
        </h1>
        <UserNameForm />
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <img
          src='/github-objects.webp'
          alt='github objects'
          style={{ maxHeight: '20%', maxWidth: '70%', borderRadius: 6 }}
        />
      </Grid>
    </Grid>
  )
}
