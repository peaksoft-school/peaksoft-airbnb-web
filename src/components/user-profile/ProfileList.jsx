import * as React from 'react'
import styled from 'styled-components'
import { ReactComponent as Stars } from '../../assets/icons/Star.svg'
import { ReactComponent as Geolocations } from '../../assets/icons/Geolocation.svg'
import { ReactComponent as WarningIcon } from '../../assets/icons/Warning.svg'
import Button from '../UI/buttons/Button'
import Text from '../UI/typography/Text'
import Flex from '../UI/ui-for-positions/Flex'
import Title from '../UI/typography/Title'
import Carousel from '../UI/carousel/Carousel'

const ProfileList = ({
   title,
   day,
   starRange,
   text,
   address,
   guest,
   images,
   blocked = true,
   rejected = true,
}) => {
   const [warning, setWarning] = React.useState(false)
   const worningHandle = () => {
      setWarning(true)
   }
   return (
      <Wrapper width="260px" blocked={blocked}>
         {blocked && (
            <BlockedContent>
               <Flex justify="end">
                  <StyledWarningIcon onClick={worningHandle} />
               </Flex>
               <BlockedMessage>
                  Your application has been blocked, please contact the
                  administrator
               </BlockedMessage>
            </BlockedContent>
         )}
         {rejected && (
            <RejectedContent>
               <Flex justify="end">
                  <StyledWarningIcon />
               </Flex>
               {!warning && (
                  <RejectedMessage>
                     Your application has been rejected, please contact the
                     administrator
                  </RejectedMessage>
               )}
            </RejectedContent>
         )}
         <Flex height="100%" direction="column" align="center">
            <ImgWrapper>
               <Carousel dataSlider={images} />
            </ImgWrapper>
            <ContentWrapper>
               <Flex margin="16px 0" justify="space-between" width="100%">
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
                  <Title className="text">{text}</Title>
                  <Flex width="100%" align="flex-start" margin="0 0 18px 0">
                     <Geolocations />
                     <Text className="text">{address}</Text>
                  </Flex>
               </Flex>
               <Flex width="100%" justify="space-between" align="center">
                  <Text>{guest} guests</Text>
                  <Blocked disabled="true">Blocked</Blocked>
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
   position: relative;
   /* top: 12rem; */
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
const BlockedContent = styled.div`
   position: absolute;
   top: 14.1rem;
   left: 29.2rem;
   right: 0;
   bottom: 0;
   z-index: 1;
   width: 260px;
   height: 362px;
   padding: 17px;
   border-radius: 1px;
   cursor: not-allowed;
   background-color: rgba(212, 212, 212, 0.4);
   opacity: 0.2;
   filter: alpha(opacity=40);
   @media (max-width: 525px) {
      padding: 6px;
   }
`
const StyledWarningIcon = styled(WarningIcon)``

const BlockedMessage = styled.h5`
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
const RejectedMessage = styled.h5`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 10px;
   line-height: 12px;
   color: #ffffff;
   padding: 0.5em;
   background: #e74848;
   border-radius: 4px;
   margin-top: 10px;
   @media (max-width: 525px) {
      font-size: 8px;
   }
`
const Blocked = styled(Button)`
   background-color: #cacaca;
   @media (max-width: 525px) {
      font-size: 10px;
      padding: 0.5em 1rem;
   }
`
const RejectedContent = styled.div`
   position: absolute;
   top: 14.1rem;
   left: 46.7rem;
   right: 0;
   bottom: 0;
   z-index: 1;
   width: 260px;
   height: 362px;
   padding: 17px;
   border: 3px solid #e74848;
   cursor: not-allowed;
   background-color: rgba(212, 212, 212, 0.4);
   opacity: 0.2;
   filter: alpha(opacity=40);
   @media (max-width: 525px) {
      padding: 6px;
   }
`
export default ProfileList
