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
  followersSelector,
  successSelector
} from '../../state-management/slices/followersSlice'

export default function FollowersTable (props: any) {
  const error = useSelector(errorSelector),
    success = useSelector(successSelector),
    isLoading = useSelector(isLoadingSelector),
    followers = useSelector(followersSelector)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Username</TableCell>
            <TableCell align='left'>Url</TableCell>
            <TableCell align='left'>Type</TableCell>
            <TableCell align='left'>Avatar</TableCell>
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
          {success &&
            followers.map(follower => (
              <TableRow key={follower.id}>
                <TableCell align='left'>{follower.login}</TableCell>
                <TableCell align='left'>
                  {' '}
                  <a href={follower.html_url} target='_blank' rel='noreferrer'>
                    {follower.html_url}
                  </a>
                </TableCell>
                <TableCell align='left'>{follower.type}</TableCell>
                <TableCell align='left'>
                  <img
                    width={30}
                    height={30}
                    src={follower.avatar_url}
                    alt='follower avatar'
                  />
                </TableCell>
              </TableRow>
            ))}
          {error && 'Something went wrong'}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
