import { Grid } from '@mui/material'
import React from 'react'
import { UserNameForm } from '../components/UserNameForm'

export const MainPage = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <h1>
            Welcome to the Home Assignment for React developer position in
            Konnektable
          </h1>
        </Grid>
        <Grid item xs={12}>
          <UserNameForm />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
