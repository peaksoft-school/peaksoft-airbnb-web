import React from 'react'
import Button from '../UI/buttons/Button'
import Input from '../UI/text-fields/Input'
import Title from '../UI/typography/Title'
import Flex from '../UI/ui-for-positions/Flex'
import styled, { createGlobalStyle } from 'styled-components'
import dateIcon from '../../assets/icons/payment.svg'
import InputMask from 'react-input-mask'
import Spinner from '../UI/loader/Spinner'
import { useForm } from 'react-hook-form'
import { Alert } from '@mui/material'
import { validateDateCreditCard } from '../../utils/helpers/general'

const BookingForm = ({ isLoading, onBooking }) => {
   const {
      reset,
      register,
      handleSubmit,
      formState: { errors, isValid },
   } = useForm()
   const onBook = () => {
      onBooking(reset)
   }

   const checkOut = {
      creditCard: {
         ...register('creditCard', {
            required: 'enter credit card',
            pattern: {
               value: /^4[0-9]{12}(?:[0-9]{3})?$/,
               message: 'errrrrrrrroooooorrrr',
            },
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
            pattern: {
               value: /[0-9]{3}/,
               message: 'Error cvc',
            },
         }),
      },
   }
   const errorCreditCard =
      (errors?.creditCard && errors.creditCard.message) || ''
   const errorDate = (errors?.date && errors.date.message) || ''
   const errorCvc = (errors?.cvc && errors.cvc.message) || ''
   const errorMessage = errorCreditCard || errorDate || errorCvc || ''

   const isValidCreditCard = errors?.creditCard && !isValid
   const isValidDate = !errors?.creditCard && errors?.date && !isValid
   const isValidCvc =
      !errors?.creditCard && !errors?.date && errors?.cvc && !isValid
   return (
      <>
         <GlobalStyle />
         {errorMessage && (
            <Alert severity="error" className="alertError">
               <Title>{errorMessage}</Title>
            </Alert>
         )}
         <Flex width="100%" justify="center" direction="column" align="center">
            <Flex width="100%" margin="0 0 22px 0">
               <WrapperInput>
                  <Img src={dateIcon} />
                  <Flex width="100%">
                     <InputMask
                        maskChar=""
                        width="70%"
                        placeholder="Card Number"
                        mask="9999999999999999"
                        {...checkOut.creditCard}
                        isValid={isValidCreditCard}
                     >
                        {(inputProps) => <InputBook {...inputProps} />}
                     </InputMask>
                     <InputMask
                        maskChar=""
                        mask="99/99"
                        width="70px"
                        placeholder="dd/mm"
                        {...checkOut.date}
                        isValid={isValidDate}
                     >
                        {(inputProps) => <InputDate {...inputProps} />}
                     </InputMask>
                     <InputMask
                        maskChar=""
                        mask="999"
                        width="70px"
                        placeholder="CVC"
                        {...checkOut.cvc}
                        isValid={isValidCvc}
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
      </>
   )
}

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
   width: 100%;
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
