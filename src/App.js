// import { useState } from 'react'
import Checkout from './components/checkout-form/Checkout'
// import DateRangePicker from './components/UI/date-picker/DatePicker'
import AdminRoutes from './routes/AdminRoutes'
import UserRoutes from './routes/UserRoutes'

function App() {
   return (
      <div className="App">
         <UserRoutes />
         <AdminRoutes />

         <Checkout />
      </div>
   )
}

export default App
