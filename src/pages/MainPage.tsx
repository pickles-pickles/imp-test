import { Grid } from '@mui/material'
import React from 'react'
import { UserNameForm } from '../components/UserNameForm'
import BasicTable from '../components/tables/BasicTable'
import { userSelector } from '../state-management/slices/appSlice'
import { useSelector } from 'react-redux'

export const MainPage = () => {
  const user = useSelector(userSelector)
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
        <Grid item xs={12} sx={{ minHeight: 50 }}>
          <BasicTable user={user} />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
