import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import bookingSlice from './bookingSlice'

const store = configureStore({
   reducer: {
      booking: bookingSlice.reducer,
      auth: authSlice.reducer,
   },
})

export default store
