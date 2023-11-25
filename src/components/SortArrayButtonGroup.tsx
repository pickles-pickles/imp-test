import React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

import { AppDispatch } from '../store'
import { useDispatch } from 'react-redux'
import { setSortOrder } from '../state-management/slices/reposSlice'

export const SortArrayButtonGroup = () => {
  const dispatch = useDispatch<AppDispatch>()

  const handleSetAscendingOrder = () => {
      dispatch(setSortOrder('asc'))
    },
    handleSetDescendingOrder = () => {
      dispatch(setSortOrder('des'))
    },
    handleResetOrder = () => {
      dispatch(setSortOrder(''))
    }
  return (
    <ButtonGroup variant='contained' aria-label='outlined primary button group'>
      <Button onClick={handleSetAscendingOrder}>ASCENDING</Button>
      <Button onClick={handleSetDescendingOrder}>DESCENDING</Button>
      <Button onClick={handleResetOrder}>NO SORT</Button>
    </ButtonGroup>
  )
}
