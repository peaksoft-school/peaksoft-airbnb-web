/* eslint-disable import/no-cycle */
import { fetchApi } from '../api/fetchApi'
import { listingActions } from './listingSlice'

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

export const bookTheListing = createAsyncThunk(
   'booking/bookTheListing',
   async ({ checkInDate, checkoutDate, amount, id }, { rejectWithValue }) => {
      try {
         return await fetchApi({
            path: `api/listings/${id}/book`,
            method: 'POST',
            body: {
               checkInDate,
               checkoutDate,
               amount,
            },
         })
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)
export const changeTheDatesOfTheBooking = createAsyncThunk(
   'booking/changeTheDatesOfTheBooking',
   async (
      { checkInDate, checkoutDate, amount, id },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const result = await fetchApi({
            path: `api/profile/bookings/${id}/changeDates`,
            method: 'PATCH',
            body: {
               checkInDate,
               checkoutDate,
               amount,
            },
         })
         dispatch(listingActions.changeTheDatesOfTheBooking(result))
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
      [bookTheListing.rejected]: (state) => {
         state.isLoading = false
      },
      [changeTheDatesOfTheBooking.pending]: (state) => {
         state.isLoading = true
      },
      [changeTheDatesOfTheBooking.fulfilled]: (state) => {
         state.isLoading = false
      },
      [changeTheDatesOfTheBooking.rejected]: (state) => {
         state.isLoading = false
      },
   },
})
export const bookingActions = bookingSlice.actions
export default bookingSlice
