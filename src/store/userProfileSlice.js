/* eslint-disable import/no-cycle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchApi } from '../api/fetchApi'

export const getUserProfileListingsAnnouncement = createAsyncThunk(
   'userProfile/getUserProfileListingsAnnouncement',
   async ({ sortBy = {}, pagination }, { rejectWithValue }) => {
      const params = {
         page: Number(pagination) || 1,
         limit: 6,
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
   async ({ sortBy = {}, pagination }, { rejectWithValue }) => {
      const params = {
         page: Number(pagination) || 1,
         limit: 6,
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

export const getOneAnnouncements = createAsyncThunk(
   'userProfile/getOneAnnouncements',
   async (announcementsId, { rejectWithValue }) => {
      try {
         const announcementIdListing = await fetchApi({
            path: `api/profile/${announcementsId}`,
            method: 'GET',
         })
         return announcementIdListing
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)

const initialState = {
   userlistings: {},
   userBookingListings: {},
   announcementIdListing: {},
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
         state.userBookingListings = action.payload
         state.isLoading = false
      },
      [getUserProfileListingBookings.rejected]: (state, { error }) => {
         state.isLoading = false
         state.error = error.message
      },
      [getOneAnnouncements.pending]: (state) => {
         state.isLoading = true
         state.error = null
      },
      [getOneAnnouncements.rejected]: (state, { error }) => {
         state.isLoading = false
         state.error = error.message
      },
      [getOneAnnouncements.fulfilled]: (state, { payload }) => {
         state.announcementIdListing = payload?.data
         state.status = 'success'
         state.isLoading = false
      },
   },
})

export const userProfileActions = userProfileSlice.actions
export default userProfileSlice
