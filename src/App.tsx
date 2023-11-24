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
      <h1>
        Welcome to the Home Assignment for React developer position in
        Konnektable
      </h1>
      <UserNameForm />
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
