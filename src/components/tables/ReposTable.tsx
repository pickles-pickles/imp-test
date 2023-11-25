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
  reposSelector,
  successSelector,
  sortOrderSelector
} from '../../state-management/slices/reposSlice'
import { repoType } from '../../types/types'
import { sortArray } from '../../helpers/sortArray'
import { StyledTableCell, tableStyle } from '../../styles/styles'
import { ProgressBar } from './ProgressBar'

export default function ReposTable (props: any) {
  const error = useSelector(errorSelector),
    success = useSelector(successSelector),
    isLoading = useSelector(isLoadingSelector),
    sortOrder = useSelector(sortOrderSelector),
    repos = useSelector(reposSelector)
  return (
    <TableContainer component={Paper}>
      <Table sx={tableStyle} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='left'>Name</StyledTableCell>
            <StyledTableCell align='left'>Description</StyledTableCell>
            <StyledTableCell align='left'>Url</StyledTableCell>
            <StyledTableCell align='left'>Stars</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading && (
            <>
              <ProgressBar />
            </>
          )}
          {success &&
            sortArray(repos, 'stargazers_count', sortOrder).map(
              (repo: repoType) => (
                <TableRow key={repo.id}>
                  <TableCell align='left'>{repo.name}</TableCell>
                  <TableCell align='left'>{repo.description}</TableCell>
                  <TableCell align='left'>
                    <a href={repo.html_url} target='_blank' rel='noreferrer'>
                      {repo.html_url}
                    </a>
                  </TableCell>
                  <TableCell align='left'>{repo.stargazers_count}</TableCell>
                </TableRow>
              )
            )}
          {error && 'Something went wrong'}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
