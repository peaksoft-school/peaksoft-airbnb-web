import styled from 'styled-components'
import { useState } from 'react'
import Title from '../UI/typography/Title'
import Text from '../UI/typography/Text'
import Button from '../UI/buttons/Button'
import Flex from '../UI/ui-for-positions/Flex'
import DateRangePicker from '../UI/date-picker/DatePicker'

const Checkout = ({ price, onClick }) => {
   const [valueDatePicker, setValueDatePicker] = useState({
      valueStartDate: null,
      valueEndDate: null,
   })
   const onChangeStartDate = (value) => {
      setValueDatePicker({
         ...valueDatePicker,
         valueStartDate: value,
      })
   }

   const onChangeEndDate = (value) => {
      setValueDatePicker({
         ...valueDatePicker,
         valueEndDate: value,
      })
   }
   const num = 1215464565
   const newNum = num.toString().match(/.{4}/g).join(' ')
   console.log(newNum)
   return (
      <Wrapper>
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
                  onChangeStartDate={onChangeStartDate}
                  onChangeEndDate={onChangeEndDate}
                  valueStartDate={valueDatePicker.valueStartDate}
                  valueEndDate={valueDatePicker.valueEndDate}
                  booking={[]}
               />
            </DatePickerStyle>

            <Button onClick={onClick} width="100%">
               REQUEST TO BOOK
            </Button>
            <Flex margin="20px 0 0 0 ">
               <Text>You have to be signed in to book a listing</Text>
            </Flex>
         </Flex>
      </Wrapper>
   )
}

const Wrapper = styled.div`
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

export default Checkout
