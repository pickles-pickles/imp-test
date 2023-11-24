import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { getUser } from '../../services/appService'
import { userType } from '../../types/types'

// Define a type for the slice state
interface AppState {
  name: string
  user: userType
  isLoading: boolean
  error: any
  success: boolean
}

// Define the initial state using that type
const initialState: AppState = {
  name: '',
  user: {},
  isLoading: false,
  error: null,
  success: false
}

export const fetchUserInfo = createAsyncThunk(
  'news/fetchUserInfo',
  async (name: string) => {
    const response = await getUser(name)
    const data = response.data
    console.log(data)
    return data
  }
)

export const appSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setUser: (state, action: PayloadAction<object>) => {
      state.user = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserInfo.pending, state => {
        state.isLoading = true
        state.success = false
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error
      })

      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        console.log('action payload is', action.payload)
        state.user = action.payload

        state.isLoading = false
        state.success = true
      })
  }
})

export const { setName, setUser } = appSlice.actions

export const nameSelector = (state: RootState) => state.app.name
export const userSelector = (state: RootState) => state.app.user
export const isLoadingSelector = (state: RootState) => state.app.isLoading
export const errorSelector = (state: RootState) => state.app.error
export const successSelector = (state: RootState) => state.app.success

export default appSlice.reducer
