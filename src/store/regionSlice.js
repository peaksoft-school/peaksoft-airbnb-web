/* eslint-disable import/no-cycle */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchApi } from '../api/fetchApi'

export const getRegions = createAsyncThunk(
   'region/getRegions',
   async (_, { rejectWithValue }) => {
      try {
         return fetchApi({
            path: 'api/regions',
            method: 'GET',
         })
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)
export const getRegionByСoordinates = createAsyncThunk(
   'region/getRegionByСoordinates',
   async ({ latitude, longitude }, { rejectWithValue }) => {
      try {
         if (latitude && longitude) {
            const result = await fetchApi({
               path: 'https://search-maps.yandex.ru/v1/',
               method: 'GET',
               params: {
                  apikey: '68d9cc18-ecb1-44f5-9055-d282dd0b5446',
                  lang: 'en_US',
                  text: `${latitude},${longitude}`,
               },
               noBaseUrl: true,
            })
            return result.features[0].properties.description
         }
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

const initialState = {
   regions: [],
   isLoading: false,
   error: null,
   status: null,
}

const regionSlice = createSlice({
   name: 'regions',
   initialState,
   reducers: {},
   extraReducers: {
      [getRegions.pending]: (state) => {
         state.isLoading = true
         state.status = 'loading'
      },
      [getRegions.fulfilled]: (state, action) => {
         state.regions = action.payload.data
         state.isLoading = false
         state.error = null
         state.status = 'success'
      },
      [getRegions.rejected]: (state, { error }) => {
         state.error = error.message
         state.isLoading = false
      },
   },
})
export const regionActions = regionSlice.actions
export default regionSlice
