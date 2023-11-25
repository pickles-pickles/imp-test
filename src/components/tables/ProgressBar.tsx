import React from 'react'

import LinearProgress from '@mui/material/LinearProgress'

export const ProgressBar = () => {
  return (
    <React.Fragment>
      <LinearProgress
        color='secondary'
        sx={{ minHeight: 25, background: '#05EE53 ' }}
      />
      <LinearProgress
        color='success'
        sx={{ minHeight: 25, background: '#0E12F7' }}
      />
      <LinearProgress sx={{ minHeight: 25, background: '#9400FF' }} />
    </React.Fragment>
  )
}
