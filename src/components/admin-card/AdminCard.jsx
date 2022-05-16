import * as React from 'react'
import styled from 'styled-components'
import { ReactComponent as Stars } from '../../assets/icons/Star.svg'
import { ReactComponent as Geolocations } from '../../assets/icons/Geolocation.svg'
import Text from '../UI/typography/Text'
import Flex from '../UI/ui-for-positions/Flex'
import Title from '../UI/typography/Title'
import Carousel from '../UI/carousel/Carousel'

const AdminCard = ({
   isViewed,
   title,
   day,
   starRange,
   text,
   address,
   guest,
   images,
}) => {
   return (
      <Wrapper isViewed={isViewed}>
         <Flex height="100%" direction="column" align="center">
            <ImgWrapper>
               <Carousel dataSlider={images} />
            </ImgWrapper>

            <ContentWrapper>
               <Flex margin="8px 0 16px 0" justify="space-between" width="100%">
                  <Flex gap="3px" align="center">
                     <Title>${title}/</Title>
                     <Text size="16px">{day}</Text>
                  </Flex>
                  <StarStyle>
                     <Stars />
                     <Div>{starRange}</Div>
                  </StarStyle>
               </Flex>
               <Flex direction="column" gap="8px">
                  <Title size="14px" className="text">
                     {text}
                  </Title>
                  <Flex width="100%" align="center" margin="0 0 6px 0">
                     <Geolocations />
                     <Text size="12px" className="text">
                        {address}
                     </Text>
                  </Flex>
               </Flex>
               <Flex width="100%" align="center" justify="space-between">
                  <Text size="12px">{guest} guests</Text>
               </Flex>
            </ContentWrapper>
         </Flex>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   width: 210px;
   height: 275px;
   @media (max-width: 425px) {
      width: 100%;
   }

   border: ${({ isViewed }) => (isViewed ? '5px solid #ff0000' : '')};
   border-radius: ${({ isViewed }) => (isViewed ? '8px' : '4px')};
   border-radius: ${({ isViewed }) =>
      isViewed ? 'rgba(255, 0, 0, 0.18)' : ''};

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
   padding: 0 12px 12px 12px;
   position: relative;
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

export default AdminCard
