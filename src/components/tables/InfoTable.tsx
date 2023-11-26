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
import { StyledTableCell, tableStyle } from '../../styles/styles'
import { ProgressBar } from './ProgressBar'
import { ErrorMessageTableRow } from './ErrorMessageTableRow'

export default function InfoTable (props: any) {
  const error = useSelector(errorSelector),
    success = useSelector(successSelector),
    isLoading = useSelector(isLoadingSelector)
  return (
    <TableContainer component={Paper}>
      <Table sx={tableStyle} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='left'>Username</StyledTableCell>
            <StyledTableCell align='left'>Name</StyledTableCell>
            <StyledTableCell align='left'>Public Repos</StyledTableCell>
            <StyledTableCell align='left'>Followers</StyledTableCell>
            <StyledTableCell align='left'>Following</StyledTableCell>
            <StyledTableCell align='left'>Location</StyledTableCell>
            <StyledTableCell align='left'>Type</StyledTableCell>
            <StyledTableCell align='left'>Bio</StyledTableCell>
            <StyledTableCell align='left'>Avatar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading && (
            <>
              <ProgressBar />
            </>
          )}
          {success && (
            <TableRow>
              <TableCell align='left'>{props.user.login}</TableCell>
              <TableCell align='left'>{props.user.name || '-'}</TableCell>
              <TableCell align='left'>{props.user.public_repos}</TableCell>
              <TableCell align='left'>{props.user.followers}</TableCell>
              <TableCell align='left'>{props.user.following}</TableCell>
              <TableCell align='left'>{props.user.location || '-'}</TableCell>
              <TableCell align='left'>{props.user.type || '-'}</TableCell>
              <TableCell align='left'>{props.user.bio || '-'}</TableCell>
              <TableCell align='left'>
                <img
                  width={30}
                  height={30}
                  src={props.user.avatar_url}
                  alt='follower avatar'
                />
              </TableCell>
            </TableRow>
          )}
          {/* 
      // * handle req rejection. The logic is the same on the other tables */}
          {error && <ErrorMessageTableRow colSpan={9} error={error} />}
          {/* 
      // *  UI on initial page load or handle empty res. The logic is the same on the other tables */}
          {!props.user.id && !error && (
            <ErrorMessageTableRow
              colSpan={9}
              error={{ message: 'Type a valid github user name' }}
            />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
