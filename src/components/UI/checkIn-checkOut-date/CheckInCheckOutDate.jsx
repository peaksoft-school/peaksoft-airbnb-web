import React from 'react'
import styled from 'styled-components'
import Text from '../typography/Text'
import Title from '../typography/Title'
import Flex from '../ui-for-positions/Flex'
import { Avatar } from '@mui/material'

const CheckInCheckOutDate = ({ price, date }) => {
   return (
      <Wrapper>
         <Flex direction="column" align="center" width="100%">
            <Flex gap="3px">
               <Title size="20px">$26{price} /</Title>
               <Text size="18px">day</Text>
            </Flex>
            <Flex width="100%" margin="10px 0 20px 0 ">
               <hr width="100%" color="#d3d3d3" />
            </Flex>
            <Flex margin="4px 0px 14px 0" gap="10rem">
               <Text className="checkIn">Check in</Text>
               <Text>Check out</Text>
            </Flex>
            <Flex gap="10rem" margin="0 0 16px 0">
               <Title>22.09.2022{date}</Title>
               <Title>30.09.2022{date}</Title>
            </Flex>
            <Flex margin="32px 0 0 0 ">
               <AvatarStyle>
                  <Avatar />
               </AvatarStyle>
               <UserStyle>
                  <Title>Anna Annova</Title>
                  <Text>anna@gmail.com</Text>
               </UserStyle>
            </Flex>
         </Flex>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   width: 400px;
   height: 157px;
   background-color: #ffffff;
   padding-top: 20px;
   .checkIn {
      padding-right: 30px;
   }
   @media (max-width: 470px) {
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
