import './App.css'
import { MainPage } from './pages/MainPage'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage'
import { FollowersPage } from './pages/FollowersPage'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import { ReposPage } from './pages/ReposPage'
import { Header } from './components/Header'

function App () {
  const location = useLocation()

  return (
    <div className='App'>
      <ResponsiveAppBar />
      {/* 
      // * show header only if the url is valid */}
      {location && location.pathname !== '/404' && <Header />}

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/repos' element={<ReposPage />} />
        <Route path='/followers' element={<FollowersPage />} />
        <Route path='/404' element={<NotFoundPage />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
      </Routes>
    </div>
  )
}

export default App
