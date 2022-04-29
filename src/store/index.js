import { configureStore } from '@reduxjs/toolkit'
import bookingSlice from './booking-slice'

const store = configureStore({
   reducer: {
      booking: bookingSlice.reducer,
   },
})

export default store
