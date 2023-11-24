import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { getUserRepos } from '../../services/appService'
import { repoType } from '../../types/types'

// Define a type for the slice state
interface reposState {
  repos: repoType[]
  isLoading: boolean
  error: any
  success: boolean
}

// Define the initial state using that type
const initialState: reposState = {
  repos: [],
  isLoading: false,
  error: null,
  success: false
}

export const fetchUserRepos = createAsyncThunk(
  'news/fetchUserRepos',
  async (name: string) => {
    const response = await getUserRepos(name)
    const data = response.data
    console.log(data)
    return data
  }
)

export const reposSlice = createSlice({
  name: 'repos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setRepos: (state, action: PayloadAction<Array<repoType>>) => {
      state.repos = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserRepos.pending, state => {
        state.isLoading = true
        state.success = false
      })
      .addCase(fetchUserRepos.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error
      })

      .addCase(fetchUserRepos.fulfilled, (state, action) => {
        console.log('action payload is', action.payload)
        state.repos = action.payload

        state.isLoading = false
        state.success = true
      })
  }
})

export const { setRepos } = reposSlice.actions

export const reposSelector = (state: RootState) => state.repos.repos
export const isLoadingSelector = (state: RootState) => state.repos.isLoading
export const errorSelector = (state: RootState) => state.repos.error
export const successSelector = (state: RootState) => state.repos.success

export default reposSlice.reducer
