import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ChangeDateForm from './ChangeDateForm'
import Modal from '../UI/modal/Modal'
import ChangeDatePayment from './ChangeDatePayment'
import { paramsSet } from '../../utils/helpers/general'

const ChangeDateBooking = ({ booking }) => {
   const [params, setParams] = useSearchParams()
   const changeDate = params.get('changeDate')
   const bookingChangedDate = params.get('booking')
   const [dates, setDates] = useState({})

   const bookingChangedDateHandler = (dates) => {
      paramsSet(booking.id, 'booking', setParams, params)
      setDates(dates)
   }
   return (
      <>
         <Modal
            width="490px"
            isVisible={!!changeDate && !bookingChangedDate}
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
         <ChangeDatePayment
            previousCheckInDate={booking?.checkInDate}
            previousCheckOutDate={booking?.checkOutDate}
            checkInDate={dates.startDate}
            checkOutDate={dates.endDate}
            isVisible={bookingChangedDate}
            onClose={() => setParams('')}
            price={booking?.listing?.price}
            id={booking?.id}
            amount={booking?.amount}
         />
      </>
   )
}

export default ChangeDateBooking
