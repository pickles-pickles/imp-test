import { Box, Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import React from 'react'
import { AppDispatch } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import {
  setName,
  nameSelector,
  fetchUserInfo
} from '../state-management/slices/appSlice'
import { fetchUserFollowers } from '../state-management/slices/followersSlice'
import { fetchUserRepos } from '../state-management/slices/reposSlice'

export const UserNameForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const name = useSelector(nameSelector)

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setName(e.target.value))
      console.log(name)
    },
    handleSubmit = (e: any) => {
      e.preventDefault()
      dispatch(fetchUserInfo(name))
      dispatch(fetchUserFollowers(name))
      dispatch(fetchUserRepos(name))
    }
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        alignItems: 'baseline'
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='name-input'
        label='name'
        variant='outlined'
        value={name}
        onChange={handleNameChange}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleSubmit(e) //when press Enter, submit the form, don't reload the page
          }
        }}
      />
      <Button onClick={handleSubmit} disabled={!name}>
        Submit
      </Button>
    </Box>
  )
}
