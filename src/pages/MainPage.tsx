import React, { useEffect } from 'react'
import { Content } from '../components/mainPage/Content'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { fetchUsers } from '../state-management/slices/appSlice'

export const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <React.Fragment>
      <div className='container'>
        <Content />
      </div>
    </React.Fragment>
  )
}
