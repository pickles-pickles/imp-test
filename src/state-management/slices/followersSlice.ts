import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { getUserFollowers } from '../../services/appService'
import { followerType } from '../../types/types'

// Define a type for the slice state
interface followersState {
  followers: followerType[]
  isLoading: boolean
  error: any
  success: boolean
}

// Define the initial state using that type
const initialState: followersState = {
  followers: [],
  isLoading: false,
  error: null,
  success: false
}

export const fetchUserFollowers = createAsyncThunk(
  'news/fetchUserFollowers',
  async (name: string) => {
    const response = await getUserFollowers(name)
    const data = response.data
    console.log(data)
    return data
  }
)

export const followersSlice = createSlice({
  name: 'repos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setFollowers: (state, action: PayloadAction<Array<followerType>>) => {
      state.followers = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserFollowers.pending, state => {
        state.isLoading = true
        state.success = false
      })
      .addCase(fetchUserFollowers.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error
      })

      .addCase(fetchUserFollowers.fulfilled, (state, action) => {
        console.log('action payload is', action.payload)
        state.followers = action.payload

        state.isLoading = false
        state.success = true
        state.error = false
      })
  }
})

export const { setFollowers } = followersSlice.actions

export const followersSelector = (state: RootState) => state.followers.followers
export const isLoadingSelector = (state: RootState) => state.followers.isLoading
export const errorSelector = (state: RootState) => state.followers.error
export const successSelector = (state: RootState) => state.followers.success

export default followersSlice.reducer
