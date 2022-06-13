import styled from 'styled-components'
import Title from '../typography/Title'
import Text from '../typography/Text'
import Button from '../buttons/Button'
import Flex from '../ui-for-positions/Flex'
import DateRangePicker from '../date-picker/DatePicker'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { formatDate } from '../../../utils/helpers/general'

const ChangeDateModal = ({ price, getDates, bookings = [] }) => {
   const [params] = useSearchParams()
   const id = params.get('changeDate')
   const booking = bookings.find((el) => el.id === id)
   const checkIn = formatDate.MM_DD_YYYY(booking.checkInDate)
   const checkOut = formatDate.MM_DD_YYYY(booking.checkOutDate)
   console.log(checkIn)
   console.log(checkOut)
   const {
      register,
      setValue,
      handleSubmit,
      getValues,
      reset,
      formState: { errors },
   } = useForm({
      defaultValues: {
         startDate: new Date(checkIn) || '',
         endDate: new Date(checkOut) || '',
      },
   })

   const errorStartDate = (errors?.startDate && errors.startDate.message) || ''

   const errorEndDate = (errors?.endDate && errors.endDate.message) || ''

   const onChangeStartDate = (value) =>
      setValue('startDate', value, { shouldValidate: true })

   const onChangeEndDate = (value) =>
      setValue('endDate', value, { shouldValidate: true })

   const submitHandler = (data) => {
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
                  disabled
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
   background-color: #ffffff;

   :hover {
      box-shadow: 0px 4px 12px rgba(105, 105, 105, 0.08);
      background-color: #ffffff;
      border-radius: 2px;
   }
`

const DatePickerStyle = styled.div`
   margin-bottom: 25px;
`

export default ChangeDateModal
