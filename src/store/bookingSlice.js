/* eslint-disable import/no-cycle */
import { fetchApi } from '../api/fetchApi'

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

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

const initState = {
   booking: [],
   regions: [],
}

const bookingSlice = createSlice({
   name: 'booking',
   initialState: initState,
   reducers: {},
   extraReducers: {
      [getRegions.fulfilled]: (state, { payload }) => {
         state.regions = payload.data
      },
   },
})

export const bookingActions = bookingSlice.actions
export default bookingSlice
