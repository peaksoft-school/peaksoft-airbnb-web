/* eslint-disable import/no-cycle */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchApi } from '../api/fetchApi'

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

const initialState = {
   users: [],
   isLoading: false,
   error: null,
}

const adminUsersSlice = createSlice({
   name: 'adminUsers',
   initialState,
   reducers: {},
   extraReducers: {
      [getAdminUsersPanel.pending]: (state) => {
         state.isLoading = true
      },
      [getAdminUsersPanel.fulfilled]: (state, actions) => {
         state.users = actions.payload.data
         state.isLoading = false
         state.error = null
      },
      [getAdminUsersPanel.rejected]: (state, { error }) => {
         state.error = error.message
         state.isLoading = false
      },
   },
})

export const adminUsersActions = adminUsersSlice.actions
export default adminUsersSlice
