import React from 'react'

import LinearProgress from '@mui/material/LinearProgress'
import { TableCell, TableRow } from '@mui/material'

export const ProgressBar = () => {
  return (
    <TableRow>
      <TableCell colSpan={9}>
        <LinearProgress
          color='secondary'
          sx={{ minHeight: 25, background: '#05EE53 ' }}
        />
        <LinearProgress
          color='success'
          sx={{ minHeight: 25, background: '#0E12F7' }}
        />
        <LinearProgress sx={{ minHeight: 25, background: '#9400FF' }} />
      </TableCell>
    </TableRow>
  )
}
