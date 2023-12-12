import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  setUserName,
  userNameSelector
} from '../../state-management/slices/appSlice'
import { AppDispatch } from '../../store'

export const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>()
  const userName = useSelector(userNameSelector)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserName(e.target.value))
    console.log(userName)
  }
  return (
    <div>
      <div className='input-group mb-3'>
        <input
          type='search'
          className='form-control'
          placeholder='Search By Name'
          aria-label='Search By Name'
          aria-describedby='basic-addon2'
          value={userName}
          onChange={handleChange}
        />
        <span className='input-group-text' id='basic-addon2'>
          <img src='/img/search.png' alt='search-icon' />
        </span>
      </div>
    </div>
  )
}
