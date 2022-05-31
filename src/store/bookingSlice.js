/* eslint-disable import/no-cycle */
import { fetchApi } from '../api/fetchApi'

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

export const bookTheListing = createAsyncThunk(
   'booking/bookTheListing',
   async ({ date, id }, { rejectWithValue }) => {
      try {
         return fetchApi({
            path: `api/listings/${id}/book`,
            method: 'POST',
            body: {
               checkIn: date.startDate,
               checkOut: date.endDate,
            },
         })
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)
const initState = {
   isLoading: false,
   status: null,
}

const bookingSlice = createSlice({
   name: 'booking',
   initialState: initState,
   reducers: {},
   extraReducers: {
      [bookTheListing.pending]: (state) => {
         state.isLoading = true
      },
      [bookTheListing.fulfilled]: (state) => {
         state.isLoading = false
      },
   },
})
export const bookingActions = bookingSlice.actions
export default bookingSlice
