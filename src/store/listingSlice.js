/* eslint-disable import/no-cycle */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchFile } from '../api/fetchFile'
import { fetchApi } from '../api/fetchApi'
import { getParams } from '../utils/helpers/general'
import { LISTING_STATUSES } from '../utils/constants/general'

export const uploadImageListing = createAsyncThunk(
   async (
      { dataListing, imagesListing, navigateAfterSuccessUpload },
      { rejectWithValue, dispatch }
   ) => {
      const formData = new FormData()
      try {
         const promise = await Promise.all(
            imagesListing.map((image) => {
               formData.set('image', image)
               const images = fetchFile({
                  path: 'api/listings/upload/image',
                  body: formData,
                  method: 'POST',
               })
               return images
            })
         )
         const images = promise.map((image) => image.imageId)
         dispatch(
            addListing({
               listingData: {
                  ...dataListing,
                  images,
               },
               navigateAfterSuccessUpload,
            })
         )
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
         return result
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
export const getListings = createAsyncThunk(
   'listing/getListings',
   async ({ filterBy = {}, sortBy = {}, pagination }, { rejectWithValue }) => {
      const params = {
         page: Number(pagination) || 1,
         limit: 16,
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
         fetchApi({
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
   async (id, { rejectWithValue, dispatch }) => {
      try {
         fetchApi({
            path: `api/listings/${id}/reject`,
            method: 'PATCH',
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
   async (id, { rejectWithValue }) => {
      try {
         const listing = fetchApi({
            path: `api/listings/${id}/block`,
            method: 'PATCH',
         })
         return listing
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)
export const unBlockListing = createAsyncThunk(
   'listing/unBlockListing',
   async (id, { rejectWithValue }) => {
      try {
         const listing = fetchApi({
            path: `api/listings/${id}/unblock`,
            method: 'PATCH',
         })
         return listing
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)
export const deleteListing = createAsyncThunk(
   'listing/deleteListing',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         fetchApi({
            path: `api/listings/${id}`,
            method: 'DELETE',
         })
         const filterBy = { status: LISTING_STATUSES.PENDING }
         dispatch(getListings({ filterBy }))
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)
const initialState = {
   listings: { data: [] },
   imagesId: [],
   listing: {},
   isLoading: false,
   error: null,
   status: null,
   searchValue: getParams('search') || '',
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
   },
   extraReducers: {
      [uploadImageListing.fulfilled]: setFulfilled,
      [uploadImageListing.rejected]: setRejected,
      [addListing.pending]: setPending,
      [addListing.fulfilled]: setFulfilled,
      [addListing.rejected]: setRejected,
      [getListings.pending]: setPending,
      [uploadImageListing.pending]: (state) => {
         state.status = 'pending'
      },
      [uploadImageListing.fulfilled]: (state) => {
         state.isLoading = false
         state.status = 'success'
      },
      [addListing.pending]: (state) => {
         state.isLoading = true
         state.status = 'pending'
      },
      [addListing.fulfilled]: (state) => {
         state.isLoading = false
         state.status = 'success'
      },
      [addListing.rejected]: (state, { error }) => {
         state.status = 'rejected'
         state.isLoading = false
         state.error = error.message
      },
      [getListings.pending]: (state) => {
         state.isLoading = true
         state.status = 'pending'
      },
      [getListings.fulfilled]: (state) => {
         state.isLoading = false
         state.status = 'success'
      },
      [getListings.rejected]: setRejected,
      [deleteListing.pending]: setPending,
      [deleteListing.fulfilled]: (state, { payload }) => {
         state.status = 'success'
         state.isLoading = false
         state.listings.data = state.listings.data.filter(
            (listing) => listing.id !== payload
         )
      },
      [deleteListing.rejected]: setRejected,
      [getOneListing.pending]: (state) => {
         state.isLoading = true
         state.status = 'pending'
      },
      [getOneListing.fulfilled]: (state, { payload }) => {
         state.listing = payload.data
         state.status = 'success'
         state.isLoading = false
      },
      [getOneListing.rejected]: (state, { error }) => {
         state.status = 'rejected'
         state.isLoading = false
         state.error = error.message
      },
   },
})
export const listingActions = listingSlice.actions
export default listingSlice
