/* eslint-disable no-unused-vars */
import 'gestalt/dist/gestalt.css'
import 'gestalt-datepicker/dist/gestalt-datepicker.css'
import { useRef } from 'react'
import DatePicker from 'gestalt-datepicker'
import { Flex } from 'gestalt'
import { getExcludedDates } from '../../../utils/helpers/general'
import styled, { createGlobalStyle } from 'styled-components'
import dateIcon from '../../../assets/icons/date.svg'

const DateRangePicker = ({
   onChangeStartDate,
   onChangeEndDate,
   valueStartDate,
   valueEndDate,
   bookings,
   dates,
   errorStartDate,
   errorEndDate,
}) => {
   const endDateInput = useRef(null)
   const startDateInput = useRef(null)

   return (
      <Flex gap={2}>
         <GlobalStyle />
         <FlexDate width="167px">
            <Img src={dateIcon} />
            <DatePickerStyled
               {...dates.startDate}
               excludeDates={getExcludedDates(bookings)}
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
               placeholder="Select Date"
            />
         </FlexDate>
         <FlexDate>
            <Img src={dateIcon} />
            <DatePickerStyled
               {...dates.endDate}
               minDate={new Date()}
               excludeDates={getExcludedDates(bookings)}
               rangeStartDate={valueStartDate}
               rangeEndDate={valueEndDate}
               id="example-end-date"
               label="Check Out"
               nextRef={startDateInput}
               onChange={({ event, value }) => onChangeEndDate(value)}
               rangeSelector="end"
               value={valueEndDate}
               ref={endDateInput}
               placeholder="Select Date"
            />
         </FlexDate>
      </Flex>
   )
}

const Img = styled.img`
   position: absolute;
   top: 38px;
   right: 16px;
   z-index: 2;
   overflow: hidden;
   width: 20px;
`
const FlexDate = styled.div`
   position: relative;
`
const DatePickerStyled = styled(DatePicker)`
   border-radius: 1px;
   input {
      border-radius: 1px;
      ::placeholder {
         color: #c4c4c4;
      }
   }
`
const GlobalStyle = createGlobalStyle`
 .unP {
         border-radius: 3px !important;
      }
      ._gestalt .react-datepicker__day--highlighted{
         background: #dd8a08 !important;
      }
      .NMJ{
         opacity: 0 !important;
         z-index: 4;
      }
`

export default DateRangePicker
