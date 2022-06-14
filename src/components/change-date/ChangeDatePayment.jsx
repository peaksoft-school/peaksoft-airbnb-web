import React from 'react'
import Modal from '../UI/modal/Modal'
import Text from '../UI/typography/Text'
import Title from '../UI/typography/Title'
import Flex from '../UI/ui-for-positions/Flex'
import { formatDate, getNumberOfDays } from '../../utils/helpers/general'
import styled from 'styled-components'
import BookingForm from '../checkout-form/BookingForm'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { changeTheDatesOfTheBooking } from '../../store/bookingSlice'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../UI/notification/Notification'

const ChangeDatePayment = ({
   previousCheckInDate,
   previousCheckOutDate,
   checkInDate,
   checkOutDate,
   price,
   id,
   isVisible,
   onClose,
}) => {
   const dispatch = useDispatch()
   const [, setParams] = useSearchParams()
   const { isLoading } = useSelector((state) => state.booking)
   const previousAmountOfDays = getNumberOfDays(
      previousCheckInDate,
      previousCheckOutDate
   )
   const amountOfDays = getNumberOfDays(previousCheckOutDate, checkOutDate)

   const previousTotalPrice = price * previousAmountOfDays
   const currentTotalPrice = price * amountOfDays
   const totalPrice = previousTotalPrice + currentTotalPrice

   const bookingHandler = async (reset) => {
      const bookingData = {
         checkInDate: formatDate.YYYY_MM_DD(checkInDate),
         checkoutDate: formatDate.YYYY_MM_DD(checkOutDate),
         amount: currentTotalPrice,
         id,
      }
      try {
         await dispatch(changeTheDatesOfTheBooking({ ...bookingData })).unwrap()
         showSuccessMessage({
            title: 'Booked :)',
            message: 'The house was successfully booked',
         })
         setParams('')
         reset()
      } catch (e) {
         showErrorMessage({ title: 'Uh! Oh!', message: 'Something went wrong' })
      }
   }
   return (
      <Modal onClose={onClose} isVisible={isVisible} width="490px">
         <Flex justify="center" direction="column" align="center">
            <Flex margin="0 0 24px 0">
               <Title size="18px" uppercase>
                  Book your trip
               </Title>
            </Flex>
            <WrapperText width="100%" justify="center" margin="0 0  20px 0">
               <Text>
                  The booking date has been changed, please pay an
                  additional&nbsp;
                  {amountOfDays}&nbsp; days in the period from&nbsp;
                  {formatDate.MONTH_DD_YYYY(previousCheckOutDate)} to &nbsp;
                  {formatDate.MONTH_DD_YYYY(checkOutDate)} inclusive.
               </Text>
            </WrapperText>
            <hr width="100%" color="#d3d3d3" />
            <Flex direction="column" width="100%" align="start" margin="10px 0">
               <Title size="15px" color="#e2e2e2">
                  From {formatDate.YYYY_MM_DD(previousCheckInDate)} to &nbsp;
                  {formatDate.YYYY_MM_DD(previousCheckOutDate)}
               </Title>
               <Text>
                  ${price} x {previousAmountOfDays} days = ${previousTotalPrice}
                  &nbsp; was paid
               </Text>
            </Flex>
            <Flex direction="column" width="100%" align="start" margin="10px 0">
               <Title size="15px" color="#e2e2e2">
                  From {formatDate.YYYY_MM_DD(previousCheckOutDate)} to &nbsp;
                  {formatDate.YYYY_MM_DD(checkOutDate)}
               </Title>
               <Text>
                  ${price} x {amountOfDays} days = ${currentTotalPrice}
               </Text>
            </Flex>
            <Flex
               width="100%"
               direction="column"
               align="flex-end"
               margin="24px 0 14px 0"
               gap="5px"
            >
               <Title color="#828282">Total = ${totalPrice}</Title>
               <Title>Payment amount = ${currentTotalPrice}</Title>
            </Flex>
         </Flex>
         <BookingForm onBooking={bookingHandler} isLoading={isLoading} />
      </Modal>
   )
}

const WrapperText = styled(Flex)`
   text-align: center;
`
export default ChangeDatePayment
