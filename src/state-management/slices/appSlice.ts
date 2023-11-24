import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface AppState {
  user: object
}

// Define the initial state using that type
const initialState: AppState = { user: {} }

export const logInSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<object>) => {
      state.user = action.payload
    }
  }
})

export const { setUser } = logInSlice.actions

export default logInSlice.reducer
