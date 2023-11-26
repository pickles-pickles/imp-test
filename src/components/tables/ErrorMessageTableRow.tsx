import React from 'react'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

export const ErrorMessageTableRow = (props: any) => {
  return (
    <TableRow>
      <TableCell colSpan={props.colSpan}>
        {' '}
        <h3 style={{ fontWeight: 'bold', textAlign: 'center' }}>
          {props.error.message}
        </h3>
      </TableCell>
    </TableRow>
  )
}
