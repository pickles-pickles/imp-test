import React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

import { AppDispatch } from '../store'
import { useDispatch, useSelector } from 'react-redux'
import {
  isLoadingSelector,
  setSortOrder
} from '../state-management/slices/reposSlice'

export const SortArrayButtonGroup = () => {
  const dispatch = useDispatch<AppDispatch>()
  const isLoading = useSelector(isLoadingSelector)

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
    <ButtonGroup
      variant='contained'
      aria-label='outlined button group'
      disabled={isLoading}
    >
      <Button onClick={handleSetAscendingOrder} sx={{ background: '#0E12F7' }}>
        ASCENDING
      </Button>
      <Button
        onClick={handleSetDescendingOrder}
        sx={{ background: '#05EE53 ' }}
      >
        DESCENDING
      </Button>
      <Button onClick={handleResetOrder} sx={{ background: '#9400FF' }}>
        DEFAULT
      </Button>
    </ButtonGroup>
  )
}
