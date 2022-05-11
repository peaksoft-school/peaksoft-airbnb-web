/* eslint-disable no-unused-vars */
import 'gestalt/dist/gestalt.css'
import 'gestalt-datepicker/dist/gestalt-datepicker.css'
import { useRef } from 'react'
import DatePicker from 'gestalt-datepicker'
import { Flex } from 'gestalt'
import { getExcludedDates } from '../../../utils/helpers/general'

const DateRangePicker = ({
   onChangeStartDate,
   onChangeEndDate,
   valueStartDate,
   valueEndDate,
}) => {
   const endDateInput = useRef(null)
   const startDateInput = useRef(null)

   return (
      <Flex gap={2}>
         <DatePicker
            excludeDates={getExcludedDates()}
            minDate={new Date()}
            rangeStartDate={valueStartDate}
            rangeEndDate={valueEndDate}
            id="example-start-date"
            label="Check In"
            nextRef={endDateInput}
            onChange={({ event, value }) => onChangeStartDate(value)}
            rangeSelector="start"
            value={valueStartDate}
            ref={startDateInput}
         />
         <DatePicker
            minDate={new Date()}
            excludeDates={getExcludedDates()}
            rangeStartDate={valueStartDate}
            rangeEndDate={valueEndDate}
            id="example-end-date"
            label="Check Out"
            nextRef={startDateInput}
            onChange={({ event, value }) => onChangeEndDate(value)}
            rangeSelector="end"
            value={valueEndDate}
            ref={endDateInput}
         />
      </Flex>
   )
}

export default DateRangePicker
