import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   modalLogOut: false,
}

const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      showLogoutModal(state) {
         state.modalLogOut = true
      },
      hideLogOutModal(state) {
         state.modalLogOut = false
      },
   },
})
export const modalActions = modalSlice.actions
export default modalSlice
