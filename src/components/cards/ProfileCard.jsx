import * as React from 'react'
import styled from 'styled-components'
import { ReactComponent as Stars } from '../../assets/icons/Star.svg'
import { ReactComponent as Geolocations } from '../../assets/icons/Geolocation.svg'
import Text from '../UI/typography/Text'
import Button from '../UI/buttons/Button'
import Flex from '../UI/ui-for-positions/Flex'
import Title from '../UI/typography/Title'
import Carousel from '../UI/carousel/Carousel'
import { ReactComponent as WarningIcon } from '../../assets/icons/Warning.svg'

const ProfileCard = ({
   width,
   title,
   day,
   starRange,
   text,
   address,
   guest,
   image,
   blocked = true,
}) => {
   return (
      <Wrapper blocked={blocked} width={width}>
         {blocked && (
            <BlockedContent>
               <Flex justify="end">
                  <StyledWarningIcon />
               </Flex>
               <Message>
                  Your application has been blocked, please contact the
                  administrator
               </Message>
            </BlockedContent>
         )}
         <Flex height="100%" direction="column" align="center">
            <ImgWrapper>
               <Carousel dataSlider={image} />
            </ImgWrapper>
            <ContentWrapper>
               <ContainerItem>
                  <Flex gap="3px" align="center">
                     <Title>${title}/</Title>
                     <Text size="16px">{day}</Text>
                  </Flex>
                  <StarStyle>
                     <Stars />
                     <Div>{starRange}</Div>
                  </StarStyle>
               </ContainerItem>
               <Flex className="flex" direction="column" gap="7px">
                  <Title className="text">{text}</Title>
                  <Flex width="100%" align="center" gap="3px">
                     <Geolocations />
                     <Text className="text address">{address}</Text>
                  </Flex>
               </Flex>
               <FlexText>
                  <Text className="address">{guest} guests</Text>
                  <Blocked>Blocked</Blocked>
               </FlexText>
            </ContentWrapper>
         </Flex>
      </Wrapper>
   )
}
const FlexText = styled(Flex)`
   width: 100%;
   justify-content: space-between;
   align-items: center;
   margin-top: 15px;
   @media (max-width: 525px) {
      margin-top: 6px;
   }
`
const ContainerItem = styled(Flex)`
   width: 100%;
   justify-content: space-between;
   margin: 8px 0 16px 0;
   @media (max-width: 525px) {
      margin: 8px 0 5px 0;
   }
`
const Wrapper = styled.div`
   position: relative;
   width: ${({ width }) => width || '260px'};
   height: 332px;
   @media (max-width: 525px) {
      width: 40vmin;
      height: 55vmin;
   }
   background-color: transparent;
   :hover {
      box-shadow: 0px 4px 12px rgba(105, 105, 105, 0.08);
      background-color: ${({ blocked }) => !blocked && '#ffffff'};
   }
   .text {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      @media (max-width: 525px) {
         font-size: 70%;
      }
   }
   .address {
      @media (max-width: 525px) {
         font-size: 10px;
      }
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
   min-height: 50%;
   background-color: red;
`
const ContentWrapper = styled.div`
   width: 100%;
   padding: 0 10px 10px 10px;
   .flex {
      @media (max-width: 525px) {
         gap: 0px;
      }
   }
`
const StarStyle = styled.div`
   background: #828282;
   display: flex;
   align-items: center;
   border-radius: 2px;
   gap: 4.5px;
   padding: 0.3em 0.9em;
   @media (max-width: 525px) {
      font-size: 12px;
   }
`
const BlockedContent = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 1;
   width: 100%;
   height: 100%;
   padding: 17px;
   cursor: not-allowed;
   background-color: rgba(255, 255, 255, 0.3);
   @media (max-width: 525px) {
      padding: 6px;
   }
`
const Message = styled.h5`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 10px;
   line-height: 12px;
   color: #ffffff;
   padding: 0.5em;
   background: #646464;
   border-radius: 4px;
   margin-top: 10px;
   @media (max-width: 525px) {
      font-size: 8px;
   }
`
const StyledWarningIcon = styled(WarningIcon)``

const Blocked = styled(Button)`
   background-color: #cacaca;
   @media (max-width: 525px) {
      font-size: 10px;
      padding: 0.5em 2rem;
      width: auto;
   }
`
export default ProfileCard
