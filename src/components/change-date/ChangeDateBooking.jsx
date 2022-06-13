import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import BookingForm from '../checkout-form/BookingForm'
import ChangeDateForm from './ChangeDateForm'
import Modal from '../UI/modal/Modal'

const ChangeDateBooking = ({ booking }) => {
   const [params, setParams] = useSearchParams()
   const changeDate = params.get('changeDate')
   const bookingChangedDate = params.get('booking')

   const [dates, setDates] = useState('')
   const bookingChangedDateHandler = (dates) => {
      setParams({ booking: true })
      setDates(dates)
   }
   return (
      <>
         <Modal
            width="490px"
            isVisible={!!changeDate}
            onClose={() => setParams('')}
         >
            <ChangeDateForm
               price={booking?.listing?.price}
               bookings={[]}
               checkInDate={booking?.checkInDate}
               checkOutDate={booking?.checkOutDate}
               getDates={bookingChangedDateHandler}
            />
         </Modal>
         <BookingForm dates={dates} isVisible={bookingChangedDate} />
      </>
   )
}

export default ChangeDateBooking
