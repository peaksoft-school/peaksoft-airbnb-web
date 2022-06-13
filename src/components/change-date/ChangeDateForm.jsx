import styled from 'styled-components'
import Title from '../UI/typography/Title'
import Text from '../UI/typography/Text'
import Button from '../UI/buttons/Button'
import Flex from '../UI/ui-for-positions/Flex'
import DateRangePicker from '../UI/date-picker/DatePicker'
import { useForm } from 'react-hook-form'
import { compareTwoDate, formatDate } from '../../utils/helpers/general'

const ChangeDateForm = ({
   price,
   getDates,
   checkInDate,
   checkOutDate,
   bookings,
}) => {
   const checkIn = checkInDate && formatDate.MM_DD_YYYY(checkInDate)
   const checkOut = checkOutDate && formatDate.MM_DD_YYYY(checkOutDate)

   const {
      register,
      setValue,
      handleSubmit,
      getValues,
      reset,
      formState: { errors, isValid },
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
            validate: (value) => compareTwoDate(checkOut, value),
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
                  disabledStartDate
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
            <Button disabled={!isValid} width="100%">
               REQUEST TO BOOK
            </Button>
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

export default ChangeDateForm
