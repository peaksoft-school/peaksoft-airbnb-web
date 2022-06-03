/* eslint-disable import/no-cycle */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchApi } from '../api/fetchApi'
import { fetchFile } from '../api/fetchFile'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../components/UI/notification/Notification'
import { listingActions } from './listingSlice'

export const uploadImageFeedback = createAsyncThunk(
   'feedback/uploadImageFeedback',
   async (
      { dataFeedback, imagesFeedback, id, feedbackSuccess },
      { rejectWithValue, dispatch }
   ) => {
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
               feedbackSuccess,
            })
         ).unwrap()
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)
export const addFeedback = createAsyncThunk(
   'feedback/addFeedback',
   async (
      { id, feedbackData, feedbackSuccess },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const feedback = await fetchApi({
            path: `api/listings/${id}/leaveFeedback`,
            method: 'POST',
            body: feedbackData,
         })
         showSuccessMessage({
            title: 'Success:)',
            message: 'Your feedback successfully created',
         })
         feedbackSuccess()
         dispatch(listingActions.updateFeedback(feedback.data))
      } catch (error) {
         showErrorMessage({
            title: 'Uh! Oh! :(',
            message: `Something went wrong! ${error.message}`,
         })
         rejectWithValue(error)
      }
   }
)

export const likeFeedback = createAsyncThunk(
   'feedback/likeFeedback',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         const feedback = await fetchApi({
            path: `api/feedbacks/${id}/like`,
            method: 'PATCH',
         })
         dispatch(listingActions.updateFeedback(feedback.data))
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
export const disLikeFeedback = createAsyncThunk(
   'feedback/likeFeedback',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         const feedback = await fetchApi({
            path: `api/feedbacks/${id}/dislike`,
            method: 'PATCH',
         })
         dispatch(listingActions.updateFeedback(feedback.data))
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
   extraReducers: {
      [uploadImageFeedback.pending]: (state) => {
         state.isLoading = true
         state.error = null
      },
      [uploadImageFeedback.fulfilled]: (state) => {
         state.isLoading = false
         state.error = null
      },
      [uploadImageFeedback.rejected]: (state, { error }) => {
         state.isLoading = false
         state.error = error.message
      },
      [addFeedback.pending]: (state) => {
         state.isLoading = true
         state.error = null
      },
      [addFeedback.fulfilled]: (state) => {
         state.isLoading = false
         state.error = null
      },
      [addFeedback.rejected]: (state, { error }) => {
         state.isLoading = false
         state.error = error.message
      },
   },
})
export const feedbackActions = feedbackSlice.actions
export default feedbackSlice
