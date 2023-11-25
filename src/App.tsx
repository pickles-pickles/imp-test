import './App.css'
import { MainPage } from './pages/MainPage'
import { Routes, Route } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage'
import { UserNameForm } from './components/UserNameForm'
import { FollowersPage } from './pages/FollowersPage'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import { ReposPage } from './pages/ReposPage'
import Grid from '@mui/material/Grid'

function App () {
  return (
    <div className='App'>
      <ResponsiveAppBar />
      <Grid container className='title-and-form-wrapper'>
        <Grid
          item
          xs={12}
          lg={6}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <h1 className='title'>
            Home Assignment for the React developer position in Konnektable
          </h1>
          <UserNameForm />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <img
            src='/github-objects.webp'
            alt='github objects'
            style={{ maxHeight: '20%', maxWidth: '70%', borderRadius: 6 }}
          />
        </Grid>
      </Grid>

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/repos' element={<ReposPage />} />
        <Route path='/followers' element={<FollowersPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
