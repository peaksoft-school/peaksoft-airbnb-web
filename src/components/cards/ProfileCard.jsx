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
   price,
   starRange,
   title,
   address,
   guest,
   images,
   blocked,
   rejected,
}) => {
   const [showWarningMessage, setShowWarningMessage] = React.useState(false)
   const showOrHideWarningMessageHandler = () =>
      setShowWarningMessage(!showWarningMessage)
   return (
      <Wrapper blocked={blocked} rejected={rejected}>
         {blocked && (
            <BlockedContent>
               <Flex justify="end">
                  <StyledWarningIcon
                     onClick={showOrHideWarningMessageHandler}
                  />
               </Flex>
               {showWarningMessage && (
                  <Message>
                     Your application has been blocked, please contact the
                     administrator
                  </Message>
               )}
            </BlockedContent>
         )}
         {rejected && (
            <BlockedContent>
               <Flex justify="end">
                  <StyledWarningIcon
                     onClick={showOrHideWarningMessageHandler}
                  />
               </Flex>
               {showWarningMessage && (
                  <Message>
                     Your application has been rejected, please contact the
                     administrator
                  </Message>
               )}
            </BlockedContent>
         )}
         <Flex height="100%" direction="column" align="center">
            <ImgWrapper>
               <Carousel dataSlider={images} />
            </ImgWrapper>
            <ContentWrapper>
               <ContainerItem>
                  <Flex gap="3px" align="center">
                     <Title className="price">${price}/</Title>
                     <Text className="price" size="16px">
                        day
                     </Text>
                  </Flex>
                  <StarStyle>
                     <Stars />
                     <Div>{starRange}</Div>
                  </StarStyle>
               </ContainerItem>
               <Flex className="flex" direction="column" gap="7px">
                  <Title className="text">{title}</Title>
                  <Flex width="100%" align="center" gap="3px">
                     <Geolocations />
                     <Text className="text address">{address}</Text>
                  </Flex>
               </Flex>
               <FlexText>
                  <Text className="address">{guest} guests</Text>
                  {blocked && <Warning>Blocked</Warning>}
                  {rejected && !blocked && <Warning>Rejected</Warning>}
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
   align-items: center;
   margin: 8px 0 16px 0;
   @media (max-width: 500px) {
      margin: 10px 0 2px 0;
   }
   @media (max-width: 400px) {
      margin: 3px 0 0px 0;
   }
`
const Wrapper = styled.div`
   position: relative;
   width: 260px;
   height: 332px;
   @media (max-width: 525px) {
      width: 40vmin;
      height: 55vmin;
   }
   background-color: transparent;
   border: ${({ rejected }) => (rejected ? '3px solid tomato' : 'none')};
   :hover {
      box-shadow: 0px 4px 12px rgba(105, 105, 105, 0.08);
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
   .price {
      @media (max-width: 400px) {
         font-size: 80%;
      }
   }
`
const Div = styled.p`
   font-family: 'Inter';
   font-weight: 500;
   font-size: 14px;
   color: #ffffff;
   @media (max-width: 400px) {
      font-size: 10px;
   }
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
      @media (max-width: 470px) {
         gap: 0px;
         padding: 0 6px 6px 6px;
      }
   }
   @media (max-width: 525px) {
      padding: 0 6px 6px 6px;
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
      padding: 0.1em 0.4em;
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
   background-color: #d4d4d483;
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
   animation: message linear 0.4s;
   @keyframes message {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
`
const StyledWarningIcon = styled(WarningIcon)`
   z-index: 11;
   cursor: pointer;
`

const Warning = styled(Button)`
   background-color: #cacaca;

   @media (max-width: 525px) {
      font-size: 9px;
      padding: 0.5em 1rem;
      width: auto;
      position: relative;
   }
   @media (max-width: 400px) {
      font-size: 9px;
      padding: 0.5em 0.7rem;
      width: auto;
   }
`
export default ProfileCard
