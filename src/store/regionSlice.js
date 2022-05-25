/* eslint-disable import/no-cycle */
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
   status: null,
}

const regionSlice = createSlice({
   name: 'regions',
   initialState,
   reducers: {},
   extraReducers: {
      [getRegions.pending]: (state) => {
         state.isLoading = true
         state.status = 'loading'
      },
      [getRegions.fulfilled]: (state, action) => {
         state.regions = action.payload.data
         state.isLoading = false
         state.error = null
         state.status = 'success'
      },
      [getRegions.rejected]: (state, { error }) => {
         state.error = error.message
         state.isLoading = false
      },
   },
})
export const regionActions = regionSlice.actions
export default regionSlice
