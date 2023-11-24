import './App.css'
import { MainPage } from './pages/MainPage'
import { Routes, Route } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage'
import { UserNameForm } from './components/UserNameForm'
import { FollowersPage } from './pages/FollowersPage'

function App () {
  return (
    <div className='App'>
      <h1>
        Welcome to the Home Assignment for React developer position in
        Konnektable
      </h1>
      <UserNameForm />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/repos' element={<FollowersPage />} />
        <Route path='/followers' element={<FollowersPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
