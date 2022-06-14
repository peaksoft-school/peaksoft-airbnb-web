/* eslint-disable import/no-cycle */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchApi } from '../api/fetchApi'

export const getAdminUsersPanel = createAsyncThunk(
   'adminUsers/getAdminUsersPanel',
   async (_, { rejectWithValue }) => {
      try {
         const users = await fetchApi({
            path: 'api/users',
            method: 'GET',
         })
         return users
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)

export const getOneBookings = createAsyncThunk(
   'adminUsers/getOneBookings',
   async (_, { rejectWithValue }) => {
      try {
         const bookingListing = await fetchApi({
            path: 'api/users/bookings/500a373c-3aaf-400b-b70c-6f9804859451',
            method: 'GET',
         })
         return bookingListing
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)

export const getOneAnnouncements = createAsyncThunk(
   'adminUsers/getOneAnnouncements',
   async (announcementsId, { rejectWithValue }) => {
      try {
         const announcementListing = await fetchApi({
            path: `api/users/announcements/${announcementsId}`,
            method: 'GET',
         })
         return announcementListing
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)

const initialState = {
   users: [],
   isLoading: false,
   error: null,
   listing: {},
}

const adminUsersSlice = createSlice({
   name: 'adminUsers',
   initialState,
   reducers: {},
   extraReducers: {
      [getAdminUsersPanel.pending]: (state) => {
         state.isLoading = true
      },
      [getAdminUsersPanel.fulfilled]: (state, actions) => {
         state.users = actions.payload.data
         state.isLoading = false
         state.error = null
      },
      [getAdminUsersPanel.rejected]: (state, error) => {
         state.error = error.message
         state.isLoading = false
      },
      [getOneBookings.pending]: (state) => {
         state.status = 'pending'
         state.error = null
         state.isLoading = true
      },
      [getOneBookings.fulfilled]: (state, action) => {
         state.listing = action.payload.data
         state.status = 'success'
         state.isLoading = false
      },
      [getOneBookings.rejected]: (state, error) => {
         state.status = 'rejected'
         state.error = error.message
         state.isLoading = false
      },
      [getOneAnnouncements.pending]: (state) => {
         state.status = 'pending'
         state.error = null
         state.isLoading = true
      },
      [getOneAnnouncements.fulfilled]: (state, action) => {
         state.listing = action.payload.data
         state.status = 'success'
         state.isLoading = false
      },
      [getOneAnnouncements.rejected]: (state, error) => {
         state.status = 'rejected'
         state.error = error.message
         state.isLoading = false
      },
   },
})

export const adminUsersActions = adminUsersSlice.actions
export default adminUsersSlice
