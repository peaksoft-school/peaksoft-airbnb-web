/* eslint-disable import/no-cycle */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchFile } from '../api/fetchFile'
import { fetchApi } from '../api/fetchApi'

export const addListing = createAsyncThunk(
   'listing/addListing',
   async (data, { rejectWithValue }) => {
      try {
         return fetchApi({
            path: 'api/listings',
            method: 'POST',
            body: { ...data },
         })
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
export const uploadImageListing = createAsyncThunk(
   'listing/uploadImageListing',
   async (image, { rejectWithValue }) => {
      const formData = new FormData()
      formData.append('image', image)
      try {
         const images = fetchFile({
            path: 'api/listings/upload/image',
            body: formData,
            method: 'POST',
         })
         return images
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
}

const listingSlice = createSlice({
   name: 'listing',
   initialState,
   reducers: {},
   extraReducers: {
      [uploadImageListing.pending]: (state) => {
         state.isLoading = true
      },
      [uploadImageListing.fulfilled]: (state, { payload }) => {
         state.isLoading = false
         state.imagesId = [...state.imagesId, payload.imageId]
      },
   },
})
export const listingActions = listingSlice.actions
export default listingSlice
