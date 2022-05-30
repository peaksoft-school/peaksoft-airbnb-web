import React from 'react'
import Button from '../UI/buttons/Button'
import Modal from '../UI/modal/Modal'
import Input from '../UI/text-fields/Input'
import Text from '../UI/typography/Text'
import Title from '../UI/typography/Title'
import Flex from '../UI/ui-for-positions/Flex'
import styled, { createGlobalStyle } from 'styled-components'
import dateIcon from '../../assets/icons/payment.svg'
import InputMask from 'react-input-mask'
import {
   convertDateInToString,
   getNumberOfDays,
   validateDateCreditCard,
} from '../../utils/helpers/general'
import { useDispatch, useSelector } from 'react-redux'
import { bookTheListing } from '../../store/bookingSlice'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../UI/notification/Notification'
import Spinner from '../UI/loader/Spinner'
import { useForm } from 'react-hook-form'
import { Alert } from '@mui/material'

const BookingForm = ({ dates, onClose, isVisible, price, id }) => {
   const {
      register,
      handleSubmit,
      formState: { errors, isValid },
   } = useForm()
   const dispatch = useDispatch()
   const { isLoading } = useSelector((state) => state.booking)
   const amountOfDays = getNumberOfDays(dates.startDate, dates.endDate)
   const totalPrice = price * amountOfDays
   const onBook = async () => {
      const bookingData = {
         checkInDate: dates.startDate,
         checkoutDate: dates.endDate,
         amount: totalPrice,
         id,
      }
      try {
         await dispatch(bookTheListing({ ...bookingData })).unwrap()
         showSuccessMessage({
            title: 'Booked :)',
            message: 'The house was successfully booked',
         })
      } catch (e) {
         showErrorMessage({ title: 'Uh! Oh!', message: 'Something went wrong' })
      }
   }

   const checkOut = {
      creditCard: {
         ...register('creditCard', {
            required: 'enter credit card',
         }),
      },
      date: {
         ...register('date', {
            required: 'enter  date',
            validate: (value) => validateDateCreditCard(value),
         }),
      },
      cvc: {
         ...register('cvc', {
            required: 'fill in cvc',
         }),
      },
   }
   const errorCreditCard =
      (errors?.creditCard && errors.creditCard.message) || ''

   const errorDate = (errors?.date && errors.date.message) || ''
   const errorCvc = (errors?.cvc && errors.cvc.message) || ''
   const errorMessage = errorCreditCard || errorDate || errorCvc || ''
   return (
      <Modal width="475px" onClose={onClose} isVisible={isVisible}>
         <GlobalStyle />
         {errorMessage && (
            <Alert severity="error" className="alertError">
               <Title>{errorMessage}</Title>
            </Alert>
         )}
         <Flex justify="center" direction="column" align="center">
            <Flex margin="0 0 24px 0">
               <Title size="18px" uppercase>
                  Book your trip
               </Title>
            </Flex>
            <WrapperText width="100%" justify="center" margin="0 0  20px 0">
               <Text>
                  Enter your payment information to book the listing from the
                  between {convertDateInToString(new Date(dates.startDate))} to
                  &nbsp;
                  {convertDateInToString(new Date(dates.endDate))} inclusive.
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
            <Flex width="100%" margin="0 0 22px 0">
               <WrapperInput>
                  <Img src={dateIcon} />
                  <Flex width="100%">
                     <InputMask
                        maskChar=""
                        width="70%"
                        placeholder="Card Number"
                        mask="9999 9999 9999 9999"
                        {...checkOut.creditCard}
                        isValid={errors?.creditCard && !isValid}
                     >
                        {(inputProps) => <InputBook {...inputProps} />}
                     </InputMask>
                     <InputMask
                        maskChar=""
                        mask="99/99"
                        width="70px"
                        placeholder="dd/mm"
                        {...checkOut.date}
                        isValid={
                           !errors?.creditCard && errors?.date && !isValid
                        }
                     >
                        {(inputProps) => <InputDate {...inputProps} />}
                     </InputMask>
                     <InputMask
                        maskChar=""
                        mask="999"
                        width="70px"
                        placeholder="CVC"
                        {...checkOut.cvc}
                        isValid={
                           !errors?.creditCard &&
                           !errors?.date &&
                           errors?.cvc &&
                           !isValid
                        }
                     >
                        {(inputPops) => <InputCvc {...inputPops} />}
                     </InputMask>
                  </Flex>
               </WrapperInput>
            </Flex>
            <Flex width="100%">
               <Button onClick={handleSubmit(onBook)} width="100%">
                  {isLoading ? <Spinner /> : 'Book'}
               </Button>
            </Flex>
         </Flex>
      </Modal>
   )
}
const WrapperText = styled(Flex)`
   text-align: center;
`
const Img = styled.img`
   position: absolute;
   top: 12px;
   left: 14px;
   z-index: 2;
   overflow: hidden;
`
const WrapperInput = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   input {
      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
         display: none;
         -webkit-appearance: none;
         margin: 0;
      }
   }
`
const InputBook = styled(Input)`
   padding-left: 50px;
   border-right: none;
   :focus,
   :hover {
      border-bottom: ${({ isValid }) =>
         isValid ? '2px solid red' : '1px solid #c4c4c4'};
      border-top: 1px solid #c4c4c4;
      border-left: 1px solid #c4c4c4;
      border-right: none;
      box-shadow: none;
   }
   border-top: 1px solid #c4c4c4;
   border-left: 1px solid #c4c4c4;
   border-right: none;
   border-bottom: ${({ isValid }) => (isValid ? '2px solid red' : '')};
`
const InputCvc = styled(Input)`
   border-left: none;
   :focus,
   :hover {
      border-top: 1px solid #c4c4c4;
      border-bottom: ${({ isValid }) =>
         isValid ? '2px solid red' : '1px solid #c4c4c4'};
      border-right: 1px solid #c4c4c4;
      border-left: none;
      box-shadow: none;
   }
   border-top: 1px solid #c4c4c4;
   border-right: 1px solid #c4c4c4;
   border-bottom: ${({ isValid }) => (isValid ? '2px solid red' : '')};
`
const InputDate = styled(Input)`
   border-left: none;
   border-right: none;
   :focus,
   :hover {
      border-top: 1px solid #c4c4c4;
      border-bottom: ${({ isValid }) =>
         isValid ? '2px solid red' : '1px solid #c4c4c4'};
      border-left: none;
      border-right: none;
      box-shadow: none;
   }
   border-top: 1px solid #c4c4c4;
   border-bottom: ${({ isValid }) => (isValid ? '2px solid red' : '')};
`
const GlobalStyle = createGlobalStyle`
   .alertError{
      position: absolute;
      width: 100%;
      top: -46px;
      left: 0;
      font-family: 'Inter';
      letter-spacing: 1.5px;
      animation: alert 600ms ease-out;
   }
   @keyframes alert {
      0% {
         transform: scale(1);
      }
      10% {
         transform: scale(0.9);
      }
      30% {
         transform: scale(1.1);
      }
      50% {
         transform: scale(1.15);
      }
      100% {
         transform: scale(1);
      }
   }
`

export default BookingForm
