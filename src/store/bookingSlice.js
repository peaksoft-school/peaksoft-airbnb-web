const { createSlice } = require('@reduxjs/toolkit')

const initState = {
   booking: [],
}

const bookingSlice = createSlice({
   name: 'booking',
   initialState: initState,
   reducers: {},
})

export const bookingActions = bookingSlice.actions
export default bookingSlice
