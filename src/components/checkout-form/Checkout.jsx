import styled from 'styled-components'
import { useState } from 'react'
import Title from '../UI/typography/Title'
import Text from '../UI/typography/Text'
import Button from '../UI/buttons/Button'
import Flex from '../UI/ui-for-positions/Flex'
import DateRangePicker from '../UI/date-picker/DatePicker'

const Checkout = () => {
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
   return (
      <Wrapper>
         <Flex direction="column" align="center">
            <Flex align="center">
               <Title>$26 /</Title>
               <Text>day</Text>
            </Flex>
            <Flex margin="10px 0 20px 0 ">
               <hr width="454px" color="#C4C4C4" />
            </Flex>
            <DateRangePicker
               onChangeStartDate={onChangeStartDate}
               onChangeEndDate={onChangeEndDate}
               valueStartDate={valueDatePicker.valueStartDate}
               valueEndDate={valueDatePicker.valueEndDate}
            />
            <Button width="100%">REQUEST TO BOOK</Button>
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
   background-color: #f7f7f7;
   padding: 1rem;

   :hover {
      box-shadow: 0px 4px 12px rgba(105, 105, 105, 0.08);
      background-color: #ffffff;
      border-radius: 2px;
   }
`
// const Line = styled.div`
//    width: 454px;
//    border: 1px solid #c4c4c4;
// `

export default Checkout
