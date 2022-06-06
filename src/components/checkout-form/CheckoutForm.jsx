import styled from 'styled-components'
import Title from '../UI/typography/Title'
import Text from '../UI/typography/Text'
import Button from '../UI/buttons/Button'
import Flex from '../UI/ui-for-positions/Flex'
import DateRangePicker from '../UI/date-picker/DatePicker'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const CheckoutForm = ({ price, getDates, bookings = [] }) => {
   const { isAuthorized } = useSelector((state) => state.auth)
   const [, setParams] = useSearchParams()
   const {
      register,
      setValue,
      handleSubmit,
      getValues,
      reset,
      formState: { errors },
   } = useForm({
      defaultValues: {
         startDate: '',
         endDate: '',
      },
   })
   const errorStartDate = (errors?.startDate && errors.startDate.message) || ''

   const errorEndDate = (errors?.endDate && errors.endDate.message) || ''

   const onChangeStartDate = (value) =>
      setValue('startDate', value, { shouldValidate: true })

   const onChangeEndDate = (value) =>
      setValue('endDate', value, { shouldValidate: true })

   const submitHandler = (data) => {
      if (!isAuthorized) {
         setParams({ signIn: 'google' })
         return
      }
      getDates(data)
      reset()
   }

   const dates = {
      startDate: {
         ...register('startDate', {
            required: 'fill in start date',
         }),
      },
      endDate: {
         ...register('endDate', {
            required: 'fill in end date',
         }),
      },
   }
   return (
      <CheckoutFormStyled onSubmit={handleSubmit(submitHandler)}>
         <Flex direction="column" align="center">
            <Flex align="center" gap="3px">
               <Title size="20px">${price} /</Title>
               <Text size="18px">day</Text>
            </Flex>
            <Flex width="100%" margin="10px 0 20px 0 ">
               <hr width="100%" color="#d3d3d3" />
            </Flex>
            <DatePickerStyle>
               <DateRangePicker
                  dates={dates}
                  valueEndDate={getValues('endDate')}
                  valueStartDate={getValues('startDate')}
                  onChangeStartDate={onChangeStartDate}
                  onChangeEndDate={onChangeEndDate}
                  bookings={bookings}
               />
               <Flex justify="center" width="100%" margin="10px 0 0 0">
                  <ErrorMessage>{errorStartDate || errorEndDate}</ErrorMessage>
               </Flex>
            </DatePickerStyle>
            <Button width="100%">REQUEST TO BOOK</Button>
            <Flex margin="20px 0 0 0 ">
               <Text>You have to be signed in to book a listing</Text>
            </Flex>
         </Flex>
      </CheckoutFormStyled>
   )
}
const ErrorMessage = styled.h5`
   color: tomato;
   font-size: 12px;
   font-family: 'Inter';
   letter-spacing: 0.5px;
   text-transform: uppercase;
`
const CheckoutFormStyled = styled.form`
   max-width: 494px;
   width: 100%;
   height: 269px;
   background-color: #ffffff;
   padding: 1rem;

   :hover {
      box-shadow: 0px 4px 12px rgba(105, 105, 105, 0.08);
      background-color: #ffffff;
      border-radius: 2px;
   }
`

const DatePickerStyle = styled.div`
   margin-bottom: 25px;
`

export default CheckoutForm
