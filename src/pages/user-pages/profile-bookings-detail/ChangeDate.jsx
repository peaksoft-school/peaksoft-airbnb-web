import React from 'react'
import styled from 'styled-components'
import Text from '../../../components/UI/typography/Text'
import Title from '../../../components/UI/typography/Title'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import Button from '../../../components/UI/buttons/Button'
import { useSearchParams } from 'react-router-dom'

const ChangeDate = ({ price, checkIn, checkOut, id }) => {
   const [, setParams] = useSearchParams()
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
            <Flex width="100%" margin="10px 0">
               <Button
                  onClick={() => setParams({ changeDate: id })}
                  width="100%"
               >
                  Change the date
               </Button>
            </Flex>
         </Container>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   width: 470px;
   .checkIn {
      padding-right: 30px;
   }
   margin-top: 20px;
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

export default ChangeDate
