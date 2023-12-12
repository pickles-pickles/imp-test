import { Grid } from '@mui/material'
import React from 'react'
import { Content } from '../components/mainPage/Content'

export const MainPage = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} sx={{ minHeight: 50 }}>
          <Content />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
