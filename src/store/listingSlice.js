/* eslint-disable import/no-cycle */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchFile } from '../api/fetchFile'
import { fetchApi } from '../api/fetchApi'
import store from './index'

export const uploadImageListing = createAsyncThunk(
   'listing/uploadImageListing',
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
      const { imagesId } = store.getState().listing
      try {
         const result = fetchApi({
            path: 'api/listings',
            method: 'POST',
            body: { ...listingData, images: imagesId },
         })
         navigateAfterSuccessUpload()
         return result
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

const initialState = {
   listins: [],
   imagesId: [],
   isLoading: false,
   error: null,
   status: null,
}

const listingSlice = createSlice({
   name: 'listing',
   initialState,
   reducers: {},
   extraReducers: {
      [uploadImageListing.pending]: (state) => {
         state.isLoading = true
         state.status = 'pending'
      },
      [uploadImageListing.fulfilled]: (state) => {
         state.isLoading = false
         state.statues = 'success'
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
   },
})
export const listingActions = listingSlice.actions
export default listingSlice
