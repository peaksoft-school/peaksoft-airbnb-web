/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit'
import bookingSlice from './bookingSlice'
import authSlice from './authSlice'
import modalSlice from './modalSlice'
import regionSlice from './regionSlice'
import listingSlice from './listingSlice'
import feedbackSlice from './feedbackSlice'
<<<<<<< HEAD
=======
import userProfileSlice from './userProfileSlice'
import adminUsersSlice from './adminUsersSlice'
>>>>>>> 28b2a63bcc46506732cfa4b362527a8735bc11fd

const store = configureStore({
   reducer: {
      booking: bookingSlice.reducer,
      auth: authSlice.reducer,
      modal: modalSlice.reducer,
      region: regionSlice.reducer,
      listing: listingSlice.reducer,
      feedback: feedbackSlice.reducer,
<<<<<<< HEAD
=======
      userProfile: userProfileSlice.reducer,
      users: adminUsersSlice.reducer,
>>>>>>> 28b2a63bcc46506732cfa4b362527a8735bc11fd
   },
})

export default store
