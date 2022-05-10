/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import 'gestalt/dist/gestalt.css'
import 'gestalt-datepicker/dist/gestalt-datepicker.css'
import { useState, useRef } from 'react'
import DatePicker from 'gestalt-datepicker'
import { Flex } from 'gestalt'

const DateRangePicker = () => {
   const [startDate, setStartDate] = useState(undefined)
   const [endDate, setEndDate] = useState(undefined)
   const endDateInput = useRef(null)
   const startDateInput = useRef(null)

   const bookings = [
      {
         startDate: '2022.6.1',
         endDate: '2022.6.7',
      },
      {
         startDate: '2022.6.6',
         endDate: '2022.6.13',
      },
      {
         startDate: '2022.7.11',
         endDate: '2022.7.19',
      },
   ]
   function getDatesRange(startDate, stopDate) {
      const ONE_DAY = 24 * 3600 * 1000
      const days = []
      let currentDate = new Date(startDate)
      while (currentDate <= stopDate) {
         days.push(new Date(currentDate))
         currentDate = currentDate - 1 + 1 + ONE_DAY
      }
      return days
   }
   const newDate = bookings.map((el) => {
      return getDatesRange(new Date(el.startDate), new Date(el.endDate))
   })
   const selectedDays = []
   for (let i = 0; i < newDate.length; i++) {
      newDate[i].map((el) => selectedDays.push(el))
   }
   console.log(selectedDays)
   return (
      <Flex gap={2}>
         <DatePicker
            excludeDates={selectedDays}
            minDate={new Date()}
            rangeStartDate={startDate}
            rangeEndDate={endDate}
            id="example-start-date"
            label="Check In"
            nextRef={endDateInput}
            onChange={({ event, value }) => {
               setStartDate(value)
            }}
            rangeSelector="start"
            value={startDate}
            ref={startDateInput}
         />
         <DatePicker
            minDate={new Date()}
            excludeDates={selectedDays}
            rangeStartDate={startDate}
            rangeEndDate={endDate}
            id="example-end-date"
            label="Check Out"
            nextRef={startDateInput}
            onChange={({ event, value }) => setEndDate(value)}
            rangeSelector="end"
            value={endDate}
            ref={endDateInput}
         />
      </Flex>
   )
}

export default DateRangePicker
