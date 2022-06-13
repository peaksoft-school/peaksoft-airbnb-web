/* eslint-disable import/no-cycle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchApi } from '../api/fetchApi'

export const getPopularApartmemts = createAsyncThunk(
   'apartments, getAllApartments',
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

export const getTheLastestListings = createAsyncThunk(
   'lastest, getAllLastest',
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

const initialState = {
   popularApartments: { data: [] },
   theLastestListings: { data: [] },
   isLoading: false,
   error: null,
}

const popularsSlice = createSlice({
   name: 'populars',
   initialState,
   reducers: {},
   extraReducers: {
      [getPopularApartmemts.pending]: (state) => {
         state.isLoading = true
      },
      [getPopularApartmemts.fulfilled]: (state, { payload }) => {
         state.popularApartments = payload
         state.isLoading = false
         state.error = null
      },
      [getPopularApartmemts.rejected]: (state, { error }) => {
         state.error = error.message
         state.isLoading = false
      },
      [getTheLastestListings.pending]: (state) => {
         state.isLoading = true
      },
      [getTheLastestListings.fulfilled]: (state, { payload }) => {
         state.theLastestListings = payload
         state.isLoading = false
         state.error = null
      },
      [getTheLastestListings.rejected]: (state, { error }) => {
         state.error = error.message
         state.isLoading = false
      },
   },
})

export const popularsActions = popularsSlice.actions
export default popularsSlice
