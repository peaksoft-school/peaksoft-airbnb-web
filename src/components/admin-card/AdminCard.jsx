import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { ReactComponent as Stars } from '../../assets/icons/Star.svg'
import { ReactComponent as Geolocations } from '../../assets/icons/Geolocation.svg'
import Text from '../UI/typography/Text'
import Flex from '../UI/ui-for-positions/Flex'
import Title from '../UI/typography/Title'
import Carousel from '../UI/carousel/Carousel'
import { LISTING_STATUSES } from '../../utils/constants/general'
import PopUp from '../UI/popup/PopUp'

const AdminCard = ({
   isViewed,
   title,
   price,
   address,
   maxNumberOfGuests,
   images,
   rating,
   onClick,
   status,
   isBlocked,
   onReject,
   onAccept,
   onDelete,
   id,
   onBlock,
   onUnBlock,
   isAnnouncements,
   isBookings,
}) => {
   const [showMeetballs, setShowMeetballs] = useState(false)
   const showMeetballsHandler = (e) => {
      e.stopPropagation()
      setShowMeetballs(!showMeetballs)
   }
   const rejectHandler = (e) => {
      e.stopPropagation()
      onReject(id)
      setShowMeetballs(false)
   }
   const deleteHandler = (e) => {
      e.stopPropagation()
      onDelete(id)
      setShowMeetballs(false)
   }
   const blockHandler = (e) => {
      e.stopPropagation()
      onBlock(id)
      setShowMeetballs(false)
   }
   const unBlockHandler = (e) => {
      e.stopPropagation()
      onUnBlock(id)

      setShowMeetballs(false)
   }
   const acceptHandler = (e) => {
      e.stopPropagation()
      onAccept(id)
      setShowMeetballs(false)
   }
   const closeMeetballs = (e) => {
      e.stopPropagation()
      setShowMeetballs(false)
   }

   const { ACCEPTED, PENDING } = LISTING_STATUSES
   const isRejected = status === LISTING_STATUSES.REJECTED
   const visibleDisabledContent = isBlocked || isRejected
   return (
      <Wrapper
         isViewed={isViewed}
         isBlocked={isBlocked}
         isRejected={isRejected}
      >
         {visibleDisabledContent && (
            <BlockedContent>
               <Message>
                  {isBlocked
                     ? 'This application has been blocked'
                     : 'This application has been REJECTED'}
               </Message>
            </BlockedContent>
         )}
         <Flex height="100%" direction="column" align="center">
            <ImgWrapper>
               <Carousel dataSlider={images} />
            </ImgWrapper>
            <ContentWrapper onClick={() => onClick(id)}>
               <Flex margin="8px 0 16px 0" justify="space-between" width="100%">
                  <Flex gap="3px" align="center">
                     <Title>${price}/</Title>
                     <Text size="16px">day</Text>
                  </Flex>
                  <StarStyle>
                     <Stars />
                     <Div>{rating}</Div>
                  </StarStyle>
               </Flex>
               <Flex direction="column" gap="8px">
                  <Title size="14px" className="text">
                     {title}
                  </Title>
                  <Flex width="100%" align="center" margin="0 0 6px 0">
                     <Geolocations />
                     <Text size="12px" className="text">
                        {address}
                     </Text>
                  </Flex>
               </Flex>
               <Flex width="100%" align="center" justify="space-between">
                  <Text size="12px">{maxNumberOfGuests} guests</Text>
                  <Button
                     isRejected={isRejected}
                     onClick={showMeetballsHandler}
                  >
                     ...
                  </Button>
                  <PopUp
                     isVisible={
                        showMeetballs && status === PENDING && !isAnnouncements
                     }
                     onClose={closeMeetballs}
                  >
                     <AboutItem onClick={rejectHandler}>Reject</AboutItem>
                     <AboutItem onClick={deleteHandler}>Delete</AboutItem>
                     <AboutItem onClick={acceptHandler}>Accept</AboutItem>
                  </PopUp>
                  <PopUp
                     isVisible={
                        showMeetballs &&
                        status === ACCEPTED &&
                        !isBlocked &&
                        !isAnnouncements
                     }
                     onClose={closeMeetballs}
                  >
                     <AboutItem onClick={blockHandler}>Block</AboutItem>
                     <AboutItem onClick={deleteHandler}>Delete</AboutItem>
                  </PopUp>
                  <PopUp
                     isVisible={
                        showMeetballs &&
                        status === ACCEPTED &&
                        isBlocked &&
                        !isAnnouncements
                     }
                     onClose={closeMeetballs}
                  >
                     <AboutItem onClick={unBlockHandler}>UnBlock</AboutItem>
                     <AboutItem onClick={deleteHandler}>Delete</AboutItem>
                  </PopUp>
                  <PopUp
                     isVisible={showMeetballs && isAnnouncements && isBlocked}
                     onClose={closeMeetballs}
                  >
                     <AboutItem onClick={unBlockHandler}>UnBlock</AboutItem>
                  </PopUp>
                  <PopUp
                     isVisible={showMeetballs && isAnnouncements && !isBlocked}
                     onClose={closeMeetballs}
                  >
                     <AboutItem onClick={blockHandler}>block</AboutItem>
                  </PopUp>
                  <PopUp
                     isVisible={showMeetballs && isBookings}
                     onClose={closeMeetballs}
                  >
                     <AboutItem onClick={deleteHandler}>delete</AboutItem>
                  </PopUp>
               </Flex>
            </ContentWrapper>
         </Flex>
      </Wrapper>
   )
}
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
   background-color: #d4d4d483;
   @media (max-width: 525px) {
      padding: 6px;
   }
`
const Wrapper = styled.div`
   position: relative;
   width: 210px;
   height: 275px;
   @media (max-width: 425px) {
      width: 100%;
   }
   border: ${({ isViewed }) => (!isViewed ? '3px solid #FF0000' : '')};
   border-radius: ${({ isViewed }) => (!isViewed ? '8px' : '4px')};
   border-radius: ${({ isViewed }) =>
      isViewed ? 'rgba(255, 0, 0, 0.18)' : ''};
   background-color: #f7f7f7;
   animation: YES ease-out 0.4s;
   @keyframes YES {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
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
   cursor: pointer;
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
const Button = styled.p`
   border: none;
   color: #c4c4c4;
   font-size: 20px;
   font-family: 'Inter';
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   padding-bottom: 10px;
   z-index: ${({ isRejected }) => (isRejected ? '0' : '5')};
`

const AboutItem = styled.div`
   width: 100%;
   padding: 0.4rem 1rem;
   font-family: 'Inter';
   font-weight: 400;
   font-size: 16px;
   background-color: #ffffff;
   color: #5d5d5d;
   cursor: pointer;
   :hover {
      background-color: #f1f1f1;
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
export default AdminCard
