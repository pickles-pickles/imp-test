import LinearProgress from '@mui/material/LinearProgress'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useSelector } from 'react-redux'
import {
  errorSelector,
  isLoadingSelector,
  successSelector
} from '../../state-management/slices/appSlice'

export default function BasicTable (props: any) {
  const error = useSelector(errorSelector),
    success = useSelector(successSelector),
    isLoading = useSelector(isLoadingSelector)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Username</TableCell>
            <TableCell align='left'>Public Repos</TableCell>
            <TableCell align='left'>Followers</TableCell>
            <TableCell align='left'>Following</TableCell>
            <TableCell align='left'>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading && (
            <>
              <LinearProgress color='secondary' sx={{ minHeight: 20 }} />
              <LinearProgress color='success' sx={{ minHeight: 20 }} />
              <LinearProgress color='inherit' sx={{ minHeight: 20 }} />
            </>
          )}
          {success && (
            <TableRow>
              <TableCell align='left'>{props.user.login}</TableCell>
              <TableCell align='left'>{props.user.public_repos}</TableCell>
              <TableCell align='left'>{props.user.followers}</TableCell>
              <TableCell align='left'>{props.user.following}</TableCell>
              <TableCell align='left'>{props.user.location || '-'}</TableCell>
            </TableRow>
          )}
          {error && 'Something went wrong'}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
