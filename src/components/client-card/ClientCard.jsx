import * as React from 'react'
import styled from 'styled-components'
import { ReactComponent as Stars } from '../../assets/icons/Star.svg'
import { ReactComponent as Geolocations } from '../../assets/icons/Geolocation.svg'
import Text from '../UI/typography/Text'
import Button from '../UI/buttons/Button'
import Flex from '../UI/ui-for-positions/Flex'
import Title from '../UI/typography/Title'
import Carousel from '../UI/carousel/Carousel'

const ClientCard = ({ width }) => {
   return (
      <Wrapper width={width}>
         <Flex direction="column" align="center">
            <ImgWrapper>
               <Carousel />
            </ImgWrapper>

            <ContentWrapper>
               <Flex margin="16px 0" justify="space-between" width="100%">
                  <Flex gap="3px" align="center">
                     <Title>$26/</Title>
                     <Text size="16px">day</Text>
                  </Flex>
                  <StarStyle>
                     <Stars />
                     <Div>3.4</Div>
                  </StarStyle>
               </Flex>
               <Flex direction="column" gap="8px">
                  <Title className="text">
                     Beautiful and pictures fhgfg ghfghffffffffffh thffytftyfy
                  </Title>
                  <Flex width="100%" align="flex-start" margin="0 0 18px 0">
                     <Geolocations />
                     <Text className="text">
                        12 Morris Ave, Toronto, ON, CA gfgjhjh
                     </Text>
                  </Flex>
               </Flex>
               <Flex width="100%" justify="space-between" align="center">
                  <Text>2 guests</Text>
                  <Button padding="6px 8px">BOOK</Button>
               </Flex>
            </ContentWrapper>
         </Flex>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   width: ${({ width }) => width || '295px'};
   height: 362px;
   @media (max-width: 425px) {
      width: 100%;
   }
   background-color: #f7f7f7;
   :hover {
      box-shadow: 0px 4px 12px rgba(105, 105, 105, 0.08);
      background-color: #ffffff;
   }
   .text {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
   }
`
const Div = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
   color: #ffffff;
`
const ImgWrapper = styled.div`
   min-width: 100%;
   height: 50%;
`
const ContentWrapper = styled.div`
   width: 100%;
   height: 50%;
   padding: 0 20px 20px 20px;
`
const StarStyle = styled.div`
   background: #828282;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 2px;
   gap: 4.5px;
   width: 62px;
   height: 25px;
`

export default ClientCard
