/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit'
import bookingSlice from './bookingSlice'
import authSlice from './authSlice'
import modalSlice from './modalSlice'
import regionSlice from './regionSlice'
import listingSlice from './listingSlice'
import feedbackSlice from './feedbackSlice'
import userProfileSlice from './userProfileSlice'
import adminUsersSlice from './adminUsersSlice'
import popularsSlice from './popularsSlice'

const store = configureStore({
   reducer: {
      booking: bookingSlice.reducer,
      auth: authSlice.reducer,
      modal: modalSlice.reducer,
      region: regionSlice.reducer,
      listing: listingSlice.reducer,
      feedback: feedbackSlice.reducer,
      userProfile: userProfileSlice.reducer,
      users: adminUsersSlice.reducer,
      populars: popularsSlice.reducer,
   },
})

export default store
