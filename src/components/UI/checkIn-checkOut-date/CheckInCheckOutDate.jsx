import React from 'react'
import styled from 'styled-components'
import Text from '../typography/Text'
import Title from '../typography/Title'
import Flex from '../ui-for-positions/Flex'
import { Avatar } from '@mui/material'

const CheckInCheckOutDate = ({ price, date, name, email }) => {
   return (
      <Wrapper>
         <Flex direction="column" align="center" width="100%">
            <Flex gap="3px">
               <Title size="20px">{price} /</Title>
               <Text size="18px">day</Text>
            </Flex>
            <Flex width="100%" margin="10px 0 20px 0 ">
               <hr width="100%" color="#d3d3d3" />
            </Flex>
            <Flex width="100%" justify="space-between">
               <Flex direction="column" gap="1rem">
                  <Text className="checkIn">Check in</Text>
                  <Title size="14px">{date}</Title>
               </Flex>
               <Flex direction="column" gap="1rem">
                  <Text>Check out</Text>
                  <Title size="14px">{date}</Title>
               </Flex>
            </Flex>
            <Flex margin="32px 0 0 0 ">
               <AvatarStyle>
                  <Avatar />
               </AvatarStyle>
               <UserStyle>
                  <Title>{name}</Title>
                  <Text>{email}</Text>
               </UserStyle>
            </Flex>
         </Flex>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   max-width: 400px;
   width: 100%;
   height: 157px;
   background-color: #ffffff;
   padding: 20px;
   .checkIn {
      padding-right: 30px;
   }
   @media (max-width: 370px) {
      gap: 0px;
      padding: 0 6px 6px 6px;
   }
`

const AvatarStyle = styled.div`
   position: absolute;
   left: 7px;
`
const UserStyle = styled.div`
   position: absolute;
   left: 3.5rem;
   flex-direction: column;
`
export default CheckInCheckOutDate
