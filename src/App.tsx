import './App.css'
import { MainPage } from './pages/MainPage'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage'
import { Header } from './components/Header'

function App () {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/404' element={<NotFoundPage />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
      </Routes>
    </div>
  )
}

export default App
