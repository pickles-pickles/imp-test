import './App.css'
import { MainPage } from './pages/MainPage'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage'

function App () {
  return (
    <div className='App'>
      {/* header */}

      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/404' element={<NotFoundPage />} />
        <Route path='*' element={<Navigate to='/404' replace />} />
      </Routes>
    </div>
  )
}

export default App
