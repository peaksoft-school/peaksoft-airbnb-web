import React from 'react'
import styled from 'styled-components'
import Text from '../typography/Text'
import Title from '../typography/Title'
import Flex from '../ui-for-positions/Flex'
import { Avatar } from '@mui/material'

const CheckInCheckOutDate = ({ price, checkIn, checkOut, name, email }) => {
   return (
      <Wrapper>
         <Container>
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
                  <Title size="14px">{checkIn}</Title>
               </Flex>
               <Flex direction="column" gap="1rem">
                  <Text>Check out</Text>
                  <Title size="14px">{checkOut}</Title>
               </Flex>
            </Flex>
         </Container>
         <Flex width="100%" margin="22px 0 0 0 ">
            <UserStyle>
               <Avatar />
               <Flex direction="column" gap="2px">
                  <Title className="user">{name}</Title>
                  <Text className="user">{email}</Text>
               </Flex>
            </UserStyle>
         </Flex>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   width: 370px;
   .checkIn {
      padding-right: 30px;
   }
   @media (max-width: 670px) {
      gap: 0px;
      width: 100%;
      margin-bottom: 30px;
   }
`
const Container = styled(Flex)`
   width: 100%;
   flex-direction: column;
   align-items: center;
   height: 157px;
   background-color: #ffffff;
   padding: 20px;
`

const UserStyle = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
   width: 100%;
   .user {
      letter-spacing: 0.3px;
   }
   @media (max-width: 570px) {
      .user {
         font-size: 13px;
      }
   }
`
export default CheckInCheckOutDate
