import './App.css'
import { MainPage } from './pages/MainPage'
import { Routes, Route } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage'
import { UserNameForm } from './components/UserNameForm'
import { FollowersPage } from './pages/FollowersPage'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import { ReposPage } from './pages/ReposPage'

function App () {
  return (
    <div className='App'>
      <ResponsiveAppBar />
      <div className='title-and-form-wrapper'>
        <h1 className='title'>
          Welcome to the Home Assignment for the React developer position in
          Konnektable
        </h1>
        <UserNameForm />
      </div>

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
