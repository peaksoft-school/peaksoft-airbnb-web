import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import bookingSlice from './bookingSlice'
import modalSlice from './modalSlice'

const store = configureStore({
   reducer: {
      booking: bookingSlice.reducer,
      auth: authSlice.reducer,
      modal: modalSlice.reducer,
   },
})

export default store
