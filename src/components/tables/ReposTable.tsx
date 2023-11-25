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
  reposSelector,
  successSelector,
  sortOrderSelector
} from '../../state-management/slices/reposSlice'
import { repoType } from '../../types/types'
import { sortArray } from '../../helpers/sortArray'

export default function ReposTable (props: any) {
  const error = useSelector(errorSelector),
    success = useSelector(successSelector),
    isLoading = useSelector(isLoadingSelector),
    sortOrder = useSelector(sortOrderSelector),
    repos = useSelector(reposSelector)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Name</TableCell>
            <TableCell align='left'>Description</TableCell>
            <TableCell align='left'>Url</TableCell>
            <TableCell align='left'>Stars</TableCell>
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
