import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { Content } from '../components/mainPage/Content'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { fetchUsers } from '../state-management/slices/appSlice'

export const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
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
