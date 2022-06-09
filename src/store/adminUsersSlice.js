/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchApi } from '../api/fetchApi'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../components/UI/notification/Notification'

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
export const getSingleUser = createAsyncThunk(
   'adminUsers/getSingleUser',
   async (id, { rejectWithValue }) => {
      try {
         const user = await fetchApi({
            path: `api/users/${id}/profile`,
            method: 'GET',
         })
         return user
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)
export const getAdminUserListingBookings = createAsyncThunk(
   'adminUsers/getAdminUserListingBookings',
   async ({ sortBy = {}, id, pagination }, { rejectWithValue }) => {
      const params = {
         page: Number(pagination) || 1,
         limit: 8,
      }

      if (Object.values(sortBy).length > 0) {
         params.sortBy = JSON.stringify(sortBy)
      }

      try {
         const userListings = fetchApi({
            path: `api/users/${id}/bookings`,
            method: 'GET',
            params,
         })
         return userListings
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)

export const getAdminUserListingAnnouncement = createAsyncThunk(
   'adminUsers/getAdminUserListingAnnouncement',
   async ({ pagination, sortBy = {}, id }, { rejectWithValue }) => {
      const params = {
         page: Number(pagination) || 1,
         limit: 8,
      }

      if (Object.values(sortBy).length > 0) {
         params.sortBy = JSON.stringify(sortBy)
      }

      try {
         const userListings = fetchApi({
            path: `api/users/${id}/announcements`,
            method: 'GET',
            params,
         })
         return userListings
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)

export const blockListing = createAsyncThunk(
   'listing/blockListing',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         await fetchApi({
            path: `api/listings/${id}/block`,
            method: 'PATCH',
         })
         dispatch(adminUsersActions.blockListing(id))
         showSuccessMessage({
            title: 'Blocked :)',
            message: 'Successfully blocked',
         })
      } catch (error) {
         showErrorMessage({ title: 'Error', message: 'Something went wrong' })
         rejectWithValue(error.message)
      }
   }
)
export const unBlockListing = createAsyncThunk(
   'listing/unBlockListing',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         await fetchApi({
            path: `api/listings/${id}/unblock`,
            method: 'PATCH',
         })
         dispatch(adminUsersActions.unblockListing(id))
         showSuccessMessage({
            title: 'unBlocked :)',
            message: 'Successfully unblocked',
         })
      } catch (error) {
         showErrorMessage({ title: 'Error', message: 'Something went wrong' })
         rejectWithValue(error.message)
      }
   }
)
export const deleteListing = createAsyncThunk(
   'adminUsers/deleteListing',
   async (id, { rejectWithValue }) => {
      try {
         await fetchApi({
            path: `api/listings/${id}`,
            method: 'DELETE',
         })
         showSuccessMessage({
            title: 'Deleted :)',
            message: 'Successfully deleted',
         })
         return id
      } catch (error) {
         showErrorMessage({ title: 'Error', message: 'Something went wrong' })
         rejectWithValue(error)
      }
   }
)

const initialState = {
   users: [],
   user: {},
   userListings: {},
   isLoading: false,
   error: null,
}
const setPending = (state) => {
   state.status = 'pending'
   state.error = null
   state.isLoading = true
}
const setRejected = (state, { error }) => {
   state.status = 'rejected'
   state.error = error.message
   state.isLoading = false
}

const adminUsersSlice = createSlice({
   name: 'adminUsers',
   initialState,
   reducers: {
      blockListing(state, { payload }) {
         state.userListings.data = state.userListings?.data.map((listing) => {
            if (listing.id === payload) {
               listing.isBlocked = true
            }
            return listing
         })
      },
      unblockListing(state, { payload }) {
         state.userListings.data = state.userListings?.data.map((listing) => {
            if (listing.id === payload) {
               listing.isBlocked = false
            }
            return listing
         })
      },
   },
   extraReducers: {
      [getAdminUsersPanel.pending]: setPending,
      [getAdminUsersPanel.fulfilled]: (state, actions) => {
         state.users = actions.payload.data
         state.isLoading = false
         state.error = null
      },
      [getAdminUsersPanel.rejected]: setRejected,
      [getAdminUserListingBookings.pending]: setPending,
      [getAdminUserListingBookings.fulfilled]: (state, action) => {
         state.userListings = action.payload
         state.isLoading = false
      },
      [getAdminUserListingBookings.rejected]: setRejected,
      [getAdminUserListingAnnouncement.pending]: setPending,
      [getAdminUserListingAnnouncement.fulfilled]: (state, action) => {
         state.userListings = action.payload
         state.isLoading = false
      },
      [getAdminUserListingAnnouncement.rejected]: setRejected,
      [getSingleUser.pending]: setPending,
      [getSingleUser.fulfilled]: (state, action) => {
         state.user = action.payload
         state.isLoading = false
      },
      [getSingleUser.rejected]: setRejected,
      [deleteListing.fulfilled]: (state, { payload }) => {
         state.isLoading = false
         state.userListings.data = state.userListings.data.filter(
            (el) => el.listing.id !== payload
         )
      },
   },
})

export const adminUsersActions = adminUsersSlice.actions
export default adminUsersSlice
