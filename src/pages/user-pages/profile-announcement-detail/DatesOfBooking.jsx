import { Alert } from '@mui/material'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import CheckInCheckOutDate from '../../../components/UI/checkIn-checkOut-date/CheckInCheckOutDate'
import Title from '../../../components/UI/typography/Title'
import Flex from '../../../components/UI/ui-for-positions/Flex'

const DatesOfBooking = ({ bookings = [] }) => {
   return (
      <>
         <Flex width="100%" margin="50px 0">
            <Title size="20px">BOOKED</Title>
         </Flex>
         <Flex
            gap="20px"
            width="100%"
            justify="space-between"
            margin="30px 0 170px 0"
            wrap="wrap"
         >
            <GlobalStyle />
            {(bookings.length &&
               bookings.map((el) => (
                  <CheckInCheckOutDate
                     checkIn={el.checkInDate}
                     checkOut={el.checkOutDate}
                     price={el.amount}
                     key={el.id}
                     name="Ulukmyrza Zhanybekov"
                     email="ulukmyrzazhanybekov@gmail.com"
                  />
               ))) || (
               <Alert className="alertBook" severity="info">
                  <span className="span">no one has booked this house yet</span>
               </Alert>
            )}
         </Flex>
      </>
   )
}
const GlobalStyle = createGlobalStyle`
   .alertBook {
      width: 100%;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: bold;
      @media (max-width: 500px) {
         .span{
            font-size: 12px;
         }
      }
   }
`

export default DatesOfBooking
