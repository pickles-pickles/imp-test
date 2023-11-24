import './App.css'
import { MainPage } from './pages/MainPage'
import { Routes, Route } from 'react-router-dom'
import { NotFoundPage } from './pages/NotFoundPage'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
