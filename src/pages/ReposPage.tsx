import React from 'react'
import ReposTable from '../components/tables/ReposTable'
import { SortArrayButtonGroup } from '../components/SortArrButtonGroup'
import Grid from '@mui/material/Grid'

export const ReposPage = () => {
  return (
    <React.Fragment>
      <Grid container justifyContent='flex-end'>
        {' '}
        <Grid item>
          <SortArrayButtonGroup />
        </Grid>
      </Grid>
      <ReposTable />
    </React.Fragment>
  )
}
