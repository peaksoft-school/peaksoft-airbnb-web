/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchFile } from '../api/fetchFile'
import { fetchApi } from '../api/fetchApi'
import { getParams } from '../utils/helpers/general'
import { LISTING_STATUSES } from '../utils/constants/general'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../components/UI/notification/Notification'

export const uploadImageListing = createAsyncThunk(
   'listing/uploadImageListing',
   async (
      { dataListing, imagesListing, navigateAfterSuccessUpload, isUpdate, id },
      { rejectWithValue, dispatch }
   ) => {
      const formData = new FormData()
      try {
         const promise = await Promise.all(
            imagesListing.map((image) => {
               formData.set('image', image.file)
               const images = fetchFile({
                  path: 'api/listings/upload/image',
                  body: formData,
                  method: 'POST',
               })
               return images
            })
         )
         const imagesId = promise.map((image) => image.imageId)
         const data = {
            listingData: {
               ...dataListing,
               images: [...(dataListing?.images || []), ...imagesId],
            },
         }
         if (isUpdate)
            dispatch(updateListing({ id, ...data, navigateAfterSuccessUpload }))
         else dispatch(addListing({ ...data, navigateAfterSuccessUpload }))
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)
export const addListing = createAsyncThunk(
   'listing/addListing',
   async ({ listingData, navigateAfterSuccessUpload }, { rejectWithValue }) => {
      try {
         const result = await fetchApi({
            path: 'api/listings',
            method: 'POST',
            body: { ...listingData },
         })
         navigateAfterSuccessUpload()
         showSuccessMessage({ title: 'Success', message: result.message })
         return result
      } catch (error) {
         showErrorMessage({ title: 'Uh! Oh!', message: error.message })
         rejectWithValue(error)
      }
   }
)
export const getListings = createAsyncThunk(
   'listing/getListings',
   async (
      { filterBy = {}, sortBy = {}, pagination, limit },
      { rejectWithValue }
   ) => {
      const params = {
         page: Number(pagination) || 1,
         limit: limit || 16,
      }
      if (Object.values(filterBy).length > 0) {
         params.filterBy = JSON.stringify(filterBy)
      }
      if (Object.values(sortBy).length > 0) {
         params.sortBy = JSON.stringify(sortBy)
      }

      try {
         const listings = fetchApi({
            path: 'api/listings',
            method: 'GET',
            params,
         })
         return listings
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)
export const getOneListing = createAsyncThunk(
   'lsiting/getOneListing',
   async (listingId, { rejectWithValue }) => {
      try {
         const listing = await fetchApi({
            path: `api/listings/${listingId}`,
            method: 'GET',
         })
         return listing
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)
export const acceptListing = createAsyncThunk(
   'listing/acceptListing',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         await fetchApi({
            path: `api/listings/${id}/accept`,
            method: 'PATCH',
         })
         const filterBy = { status: LISTING_STATUSES.PENDING }
         dispatch(getListings({ filterBy }))
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)
export const rejectListing = createAsyncThunk(
   'listing/rejectListing',
   async ({ id, data }, { rejectWithValue, dispatch }) => {
      try {
         await fetchApi({
            path: `api/listings/${id}/reject`,
            method: 'PATCH',
            body: data,
         })
         const filterBy = { status: LISTING_STATUSES.PENDING }
         dispatch(getListings({ filterBy }))
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
         dispatch(listingActions.blockListing(id))
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
         dispatch(listingActions.unblockListing(id))
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
   'listing/deleteListing',
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

export const getOneAnnouncements = createAsyncThunk(
   'userProfile/getOneAnnouncements',
   async (announcementsId, { rejectWithValue }) => {
      try {
         const announcementListing = await fetchApi({
            path: `api/profile/announcements/${announcementsId}`,
            method: 'GET',
         })
         return announcementListing
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)
export const getOneBookings = createAsyncThunk(
   'userProfile/getOneAnnouncements',
   async (announcementsId, { rejectWithValue }) => {
      try {
         const bookingListing = await fetchApi({
            path: `api/profile/bookings/${announcementsId}`,
            method: 'GET',
         })
         return bookingListing
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)
export const updateListing = createAsyncThunk(
   'userProfile/updateListing',
   async (
      { id, listingData, navigateAfterSuccessUpload },
      { rejectWithValue }
   ) => {
      try {
         const bookingListing = await fetchApi({
            path: `api/listings/${id}`,
            method: 'PUT',
            body: listingData,
         })
         showSuccessMessage({
            title: 'Success',
            message: bookingListing.message,
         })
         navigateAfterSuccessUpload()
         return bookingListing
      } catch (error) {
         showErrorMessage({ title: 'Uh! Oh!', message: error.message })
         rejectWithValue(error.message)
      }
   }
)
const initialState = {
   listings: { data: [] },
   listing: {},
   isLoading: false,
   isLoadingDelete: false,
   error: null,
   searchValue: getParams('search') || '',
   location: getParams('location') || '',
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
const setFulfilled = (state) => {
   state.isLoading = false
   state.statues = 'success'
}

const listingSlice = createSlice({
   name: 'listing',
   initialState,
   reducers: {
      saveSearchValue(state, action) {
         state.searchValue = action.payload.search
      },
      updateFeedback(state, { payload }) {
         const feedback = payload
         const isFeedback = state.listing.feedbacks.some(
            (el) => el.id === feedback.id
         )
         if (isFeedback) {
            state.listing.feedbacks = state.listing.feedbacks.map(
               (itemFeedback) => {
                  if (itemFeedback.id === feedback.id) {
                     itemFeedback = feedback
                  }
                  return itemFeedback
               }
            )
         } else {
            state.listing.feedbacks.push(feedback)
         }
      },
      blockListing(state, { payload }) {
         state.listings.data = state.listings?.data.map((listing) => {
            if (listing.id === payload) {
               listing.isBlocked = true
            }
            return listing
         })
      },
      unblockListing(state, { payload }) {
         state.listings.data = state.listings?.data.map((listing) => {
            if (listing.id === payload) {
               listing.isBlocked = false
            }
            return listing
         })
      },
      clearListing(state) {
         state.listing = {}
      },
      deleteImageListing(state, { payload: id }) {
         state.listing.images = state.listing.images.filter(
            (image) => image.id !== id
         )
      },
      locationValue(state, action) {
         state.location = action.payload
      },
   },
   extraReducers: {
      [uploadImageListing.pending]: setPending,
      [uploadImageListing.fulfilled]: setFulfilled,
      [uploadImageListing.rejected]: setRejected,
      [addListing.pending]: setPending,
      [addListing.fulfilled]: setFulfilled,
      [addListing.rejected]: setRejected,
      [getListings.pending]: setPending,
      [getListings.fulfilled]: (state, { payload }) => {
         state.isLoading = false
         state.listings = payload
      },
      [getListings.rejected]: setRejected,
      [deleteListing.pending]: (state) => {
         state.isLoadingDelete = true
         state.error = null
      },
      [deleteListing.fulfilled]: (state, { payload }) => {
         state.isLoadingDelete = false
         state.listings.data = state.listings.data.filter(
            (listing) => listing.id !== payload
         )
      },
      [deleteListing.rejected]: (state, { error }) => {
         state.isLoadingDelete = false
         state.error = error.message
      },
      [getOneListing.pending]: setPending,
      [getOneListing.fulfilled]: (state, { payload }) => {
         state.listing = payload.data
         state.isLoading = false
      },
      [getOneListing.rejected]: setRejected,
      [blockListing.pending]: setPending,
      [blockListing.fulfilled]: setFulfilled,
      [blockListing.rejected]: setRejected,
      [unBlockListing.pending]: setPending,
      [unBlockListing.fulfilled]: setFulfilled,
      [unBlockListing.rejected]: setRejected,
      [acceptListing.pending]: setPending,
      [acceptListing.fulfilled]: setFulfilled,
      [acceptListing.rejected]: setRejected,
      [rejectListing.pending]: setPending,
      [rejectListing.fulfilled]: setFulfilled,
      [rejectListing.rejected]: setRejected,
      [getUserProfileListingsAnnouncement.pending]: setPending,
      [getUserProfileListingsAnnouncement.fulfilled]: (state, action) => {
         state.listings = action.payload
         state.isLoading = false
      },
      [getUserProfileListingsAnnouncement.rejected]: setRejected,
      [getUserProfileListingBookings.pending]: setPending,
      [getUserProfileListingBookings.fulfilled]: (state, action) => {
         state.listings = action.payload
         state.isLoading = false
      },
      [getUserProfileListingBookings.rejected]: setRejected,
      [getOneAnnouncements.pending]: setPending,
      [getOneAnnouncements.rejected]: setRejected,
      [getOneAnnouncements.fulfilled]: (state, { payload }) => {
         state.listing = payload?.data
         state.status = 'success'
         state.isLoading = false
      },
      [getOneBookings.pending]: setPending,
      [getOneBookings.rejected]: setRejected,
      [getOneBookings.fulfilled]: (state, { payload }) => {
         state.listing = payload?.data
         state.status = 'success'
         state.isLoading = false
      },
   },
})
export const listingActions = listingSlice.actions
export default listingSlice
