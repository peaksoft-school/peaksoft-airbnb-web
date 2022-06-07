/* eslint-disable import/no-cycle */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchApi } from '../api/fetchApi'
// import { REGIONS } from '../utils/constants/general'

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
            // console.log(result)
            // const location = Object.values(result.features[0].properties)
            // const a = REGIONS.find((el) =>
            //    el.includes(location.find((d) => d === el))
            // )
            // console.log(a)
            const location = result.features[0].properties.description
               .split(' ')[0]
               .split('')
               .filter((el) => el !== ',')
               .join('')
            return location
         }
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

const initialState = {
   regions: [],
   location: '',
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
      [getRegionByСoordinates.pending]: (state) => {
         state.isLoading = true
         state.status = 'loading'
      },
      [getRegionByСoordinates.fulfilled]: (state, action) => {
         state.location = action.payload
         state.isLoading = false
         state.error = null
         state.status = 'success'
      },
      [getRegionByСoordinates.rejected]: (state, { error }) => {
         state.error = error.message
         state.isLoading = false
      },
   },
})
export const regionActions = regionSlice.actions
export default regionSlice
