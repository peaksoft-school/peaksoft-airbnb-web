import React from 'react'
import Modal from '../../../components/UI/modal/Modal'
import Text from '../../../components/UI/typography/Text'
import Title from '../../../components/UI/typography/Title'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import { formatDate, getNumberOfDays } from '../../../utils/helpers/general'
import styled from 'styled-components'
import BookingForm from '../../../components/checkout-form/BookingForm'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { bookTheListing } from '../../../store/bookingSlice'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../../../components/UI/notification/Notification'

const BookingHome = ({
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
   const amountOfDays = getNumberOfDays(checkInDate, checkOutDate)
   const totalPrice = price * amountOfDays
   const bookingHandler = async (reset) => {
      const bookingData = {
         checkInDate: formatDate.YYYY_MM_DD(checkInDate),
         checkoutDate: formatDate.YYYY_MM_DD(checkOutDate),
         amount: totalPrice,
         id,
      }
      try {
         await dispatch(bookTheListing({ ...bookingData })).unwrap()
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
                  Enter your payment information to book the listing from the
                  between {formatDate.MONTH_DD_YYYY(checkInDate)} to &nbsp;
                  {formatDate.MONTH_DD_YYYY(checkOutDate)} inclusive.
               </Text>
            </WrapperText>
            <hr width="100%" color="#d3d3d3" />
            <Flex margin="24px 0 14px 0">
               <Title>
                  <Text>
                     ${price} x {amountOfDays} days =
                  </Text>
                  ${totalPrice}
               </Title>
            </Flex>
            <Flex margin="0 0 16px 0">
               <Title>Total = ${totalPrice}</Title>
            </Flex>
         </Flex>
         <BookingForm onBooking={bookingHandler} isLoading={isLoading} />
      </Modal>
   )
}

const WrapperText = styled(Flex)`
   text-align: center;
`
export default BookingHome
