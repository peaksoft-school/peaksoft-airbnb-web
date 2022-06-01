/* eslint-disable import/no-cycle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchApi } from '../api/fetchApi'

export const getUserProfileListingsAnnouncement = createAsyncThunk(
   'userProfile/getUserProfileListingsAnnouncement',
   async ({ sortBy = {} }, { rejectWithValue }) => {
      const params = {
         page: 1,
         limit: 10,
      }

      if (Object.values(sortBy).length > 0) {
         params.sortBy = JSON.stringify(sortBy)
      }

      try {
         const userlistings = fetchApi({
            path: 'api/profile/announcements',
            method: 'GET',
            params,
         })
         return userlistings
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)

export const getUserProfileListingBookings = createAsyncThunk(
   'userProfile/getUserProfileListingBookings',
   async ({ sortBy = {} }, { rejectWithValue }) => {
      const params = {
         page: 1,
         limit: 10,
      }

      if (Object.values(sortBy).length > 0) {
         params.sortBy = JSON.stringify(sortBy)
      }

      try {
         const userBookingListings = fetchApi({
            path: 'api/profile/bookings',
            method: 'GET',
            params,
         })
         return userBookingListings
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)

const initialState = {
   userlistings: {},
   myAnnouncementListing: {},
   isLoading: false,
   error: null,
}

const userProfileSlice = createSlice({
   name: 'userProfile',
   initialState,
   reducers: {},
   extraReducers: {
      [getUserProfileListingsAnnouncement.pending]: (state) => {
         state.isLoading = true
         state.error = null
      },
      [getUserProfileListingsAnnouncement.fulfilled]: (state, action) => {
         state.userlistings = action.payload
         state.isLoading = false
      },
      [getUserProfileListingsAnnouncement.rejected]: (state, { error }) => {
         state.isLoading = false
         state.error = error.message
      },
      [getUserProfileListingBookings.pending]: (state) => {
         state.isLoading = true
         state.error = null
      },
      [getUserProfileListingBookings.fulfilled]: (state, action) => {
         state.userlistings = action.payload
         state.isLoading = false
      },
      [getUserProfileListingBookings.rejected]: (state, { error }) => {
         state.isLoading = false
         state.error = error.message
      },
   },
})

export const userProfileActions = userProfileSlice.actions
export default userProfileSlice
