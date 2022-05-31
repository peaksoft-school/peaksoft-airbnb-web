/* eslint-disable import/no-cycle */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchApi } from '../api/fetchApi'
import { fetchFile } from '../api/fetchFile'

export const uploadImageFeedback = createAsyncThunk(
   'feedback/uploadImageFeedback',
   async (
      { dataFeedback, imagesFeedback, id },
      { rejectWithValue, dispatch }
   ) => {
      console.log(imagesFeedback)
      const formData = new FormData()
      try {
         const promise = await Promise.all(
            imagesFeedback.map((image) => {
               formData.set('image', image)
               const images = fetchFile({
                  path: 'api/listings/upload/feedback/image',
                  body: formData,
                  method: 'POST',
               })
               return images
            })
         )
         const images = promise.map((image) => image.imageId)
         dispatch(
            addFeedback({
               feedbackData: {
                  ...dataFeedback,
                  images,
               },
               id,
            })
         )
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)
export const addFeedback = createAsyncThunk(
   'feedback/addFeedback',
   async ({ id, feedbackData }, { rejectWithValue }) => {
      try {
         const result = await fetchApi({
            path: `api/listings/${id}/leaveFeedback`,
            method: 'POST',
            body: feedbackData,
         })
         return result
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

const initialState = {
   isLoading: false,
   error: null,
}

const feedbackSlice = createSlice({
   name: 'feedback',
   initialState,
   reducers: {},
   extraReducers: {},
})
export const feedbackActions = feedbackSlice.actions
export default feedbackSlice
