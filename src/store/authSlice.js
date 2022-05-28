/* eslint-disable import/no-cycle */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { authentication } from '../Firebase/firebase-config'
import { fetchApi } from '../api/fetchApi'
import { getDataFromLocalStorage } from '../utils/helpers/general'
import { KEY_AUTH, ROLES } from '../utils/constants/general'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../components/UI/notification/Notification'

const provider = new GoogleAuthProvider()

const localData = getDataFromLocalStorage(KEY_AUTH) || {}

const initialState = {
   isAuthorized: localData.isAuthorized || false,
   token: localData.token || null,
   user: localData.user || null,
   status: '',
   isLoading: false,
   error: null,
   role: localData.role || null,
}
export const signInAsAdmin = createAsyncThunk(
   'auth/admin',
   async (dataAdmin, { rejectWithValue }) => {
      try {
         return fetchApi({
            method: 'POST',
            path: 'api/auth/admin/login',
            body: dataAdmin,
         })
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
export const googleAccountIntegration = createAsyncThunk(
   'auth/google',
   async function (_, { rejectWithValue, dispatch }) {
      try {
         const response = await signInWithPopup(authentication, provider)
         const { idToken } = GoogleAuthProvider.credentialFromResult(response)
         dispatch(signInWithGoogle({ idToken }))
            .unwrap()
            .then(() => {
               showSuccessMessage({
                  title: 'Success)',
                  message: 'Successfulli logged in',
               })
            })
            .catch((error) =>
               showErrorMessage({
                  title: 'Uh oh! Something went wrong :(',
                  message: error.message,
               })
            )
      } catch (error) {
         rejectWithValue(error.message)
      }
   }
)
export const signInWithGoogle = createAsyncThunk(
   'auth/signInWithGoogle',
   async function ({ idToken }, { rejectWithValue }) {
      try {
         return fetchApi({
            path: 'api/auth/user/login',
            method: 'POST',
            body: { idToken },
         })
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
const setPending = (state) => {
   state.status = 'loading'
   state.isLoading = true
   state.error = null
}
const setRejected = (state, { error }) => {
   state.status = 'rejected'
   state.error = error.message
   state.isLoading = false
}
const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      signOut(state) {
         state.isAuthorized = false
         state.token = null
         state.user = null
         state.role = null
      },
   },
   extraReducers: {
      [signInWithGoogle.pending]: setPending,
      [signInWithGoogle.fulfilled]: (state, { payload }) => {
         state.status = 'success'
         state.isAuthorized = true
         state.role = ROLES.VENDOR
         state.token = payload.data.idToken
         state.user = payload.data.user
         state.error = null
         state.isLoading = false
      },
      [signInWithGoogle.rejected]: setRejected,

      [signInAsAdmin.pending]: setPending,
      [signInAsAdmin.fulfilled]: (state, { payload }) => {
         state.status = 'succes'
         state.role = ROLES.ADMIN
         state.isAuthorized = true
         state.token = payload.data.token
         state.user = payload.data.user
         state.error = null
         state.isLoading = false
      },
      [signInAsAdmin.rejected]: setRejected,
   },
})
export const authAction = authSlice.actions
export default authSlice
