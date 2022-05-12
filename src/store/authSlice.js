import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import initializeAuthenication from '../Firebase/firebase.init'
import { fetchApi } from '../api/fetchApi'

initializeAuthenication()
const provider = new GoogleAuthProvider()
const auth = getAuth()

const initialState = {
   auth: false,
   token: null,
   user: null,
   status: null,
   error: null,
}
export const signInAsAdmin = createAsyncThunk(
   'auth/admin',
   async (dataAdmin, { rejectWithValue }) => {
      try {
         const response = fetchApi({
            method: 'POST',
            path: 'api/auth/admin/login',
            body: { dataAdmin },
         })
         return await response.json()
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
export const googleAccountIntegration = createAsyncThunk(
   'auth/google',
   async function (_, { rejectWithValue, dispatch }) {
      try {
         const response = await signInWithPopup(auth, provider)
         const { idToken } = GoogleAuthProvider.credentialFromResult(response)
         dispatch(
            signInWithGoogle({
               idToken,
            })
         )
      } catch (error) {
         rejectWithValue(error.message)
      }
      return null
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
         rejectWithValue(error)
      }
   }
)

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      saveUser(state, action) {
         state.token = action.payload.accessToken
      },
   },
   extraReducers: {
      [signInWithGoogle.pending]: (state) => {
         state.status = 'loading'
      },
      [signInWithGoogle.fulfilled]: (state, { payload }) => {
         state.status = 'succes'
         state.token = payload.idToken
         state.user = payload.user
         state.error = null
      },
      [signInWithGoogle.rejected]: (state, action) => {
         state.status = 'rejected'
         state.error = action.error.message
      },

      [signInAsAdmin.pending]: (state) => {
         state.status = 'loading'
      },
      [signInAsAdmin.fulfilled]: (state, { payload }) => {
         state.status = 'succes'
         console.log(payload)
         // state.token = payload.idToken
         // state.user = payload.user
         // state.error = null
      },
      [signInAsAdmin.rejected]: (state, action) => {
         console.log(action.error.message)
         state.status = 'rejected'
         state.error = action.error.message
      },
   },
})
export const authAction = authSlice.actions
export default authSlice
