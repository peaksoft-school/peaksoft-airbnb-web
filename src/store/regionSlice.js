import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchApi } from '../api/fetchApi'

export const getRegions = createAsyncThunk(
   'region/getRegions',
   async (_, { rejectWithValue }) => {
      try {
         return fetchApi({
            path: 'api/regions',
            method: 'GET',
         })
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)

const initialState = {
   regions: [],
   isLoading: false,
   error: null,
}

const regionSlice = createSlice({
   name: 'regions',
   initialState,
   reducers: {},
   extraReducers: {
      [getRegions.pending]: (state) => {
         state.isLoading = true
      },
      [getRegions.fulfilled]: (state, action) => {
         state.regions = action.payload.data
         state.isLoading = false
         state.error = null
      },
      [getRegions.rejected]: (state, { error }) => {
         state.error = error.message
         state.isLoading = false
      },
   },
})
export const regionActions = regionSlice.actions
export default regionSlice
