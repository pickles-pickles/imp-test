import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { getUsers } from '../../services/appService'
import { UserType } from '../../types/types'

// Define a type for the slice state
interface AppState {
  userName: string
  users: UserType[]
  isLoading: boolean
  error: any
  success: boolean
}

// Define the initial state using that type
const initialState: AppState = {
  userName: '',
  users: [],
  isLoading: false,
  error: null,
  success: false
}

export const fetchUsers = createAsyncThunk('app/fetchUsers', async () => {
  const response = await getUsers()
  const data = response.data
  return data
})

export const appSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<Array<any>>) => {
      state.users = action.payload
    },
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true
        state.success = false
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error
      })

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload

        state.isLoading = false
        state.success = true
        state.error = false
      })
  }
})

export const { setUsers, setUserName } = appSlice.actions

export const userNameSelector = (state: RootState) => state.app.userName
export const usersSelector = (state: RootState) => state.app.users
export const isLoadingSelector = (state: RootState) => state.app.isLoading
export const errorSelector = (state: RootState) => state.app.error
export const successSelector = (state: RootState) => state.app.success

export default appSlice.reducer
