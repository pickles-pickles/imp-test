import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

// Define a type for the slice state
interface AppState {
  name: string
  user: object
}

// Define the initial state using that type
const initialState: AppState = { name: '', user: {} }

export const logInSlice = createSlice({
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
  }
})

export const { setName, setUser } = logInSlice.actions

export const nameSelector = (state: RootState) => state.app.name

export default logInSlice.reducer
