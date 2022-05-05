import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import initializeAuthenication from '../Firebase/firebase.init'

initializeAuthenication()
const provider = new GoogleAuthProvider()
const auth = getAuth()

const initialState = {
   token: null,
   user: null,
   status: null,
   error: null,
}
export const signInWithGoogle = createAsyncThunk(
   'auth/google',
   async function (_, { rejectWithValue }) {
      try {
         const response = await signInWithPopup(auth, provider)
         const { user } = response
         return {
            token: user.accessToken,
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
            phoneNumber: user.phoneNumber,
         }
      } catch (error) {
         rejectWithValue(error.message)
      }
      return null
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
         state.status = 'succes'
      },
      [signInWithGoogle.fulfilled]: (state, { payload }) => {
         state.status = 'succes'
         state.token = payload.accessToken
         state.user = payload
         state.error = null
      },
      [signInWithGoogle.rejected]: (state, action) => {
         state.status = 'rejected'
         state.error = action.payload
      },
   },
})
export const authAction = authSlice.actions
export default authSlice
