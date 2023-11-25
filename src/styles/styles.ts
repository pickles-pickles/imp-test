import styled from '@emotion/styled'
import TableCell from '@mui/material/TableCell'

export const tableStyle = { minWidth: 650, background: '#adcdb8' }

export const StyledTableCell = styled(TableCell)(() => ({
  fontWeight: 'bold',
  fontSize: '1.25rem'
}))

export const errorMessageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  minWidth: '100%'
}
export const errorMessageStyle = {
  fontWeight: 'bold'
}
