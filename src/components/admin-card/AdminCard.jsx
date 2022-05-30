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
}) => {
   const [showMeetballs, setShowMeetballs] = useState(false)
   const meetballsHandler = () => setShowMeetballs(!showMeetballs)
   const editBookHandler = () => {
      setShowMeetballs(false)
   }
   const deleteBookHandler = () => {
      setShowMeetballs(false)
   }
   const acceptBookHandler = () => {
      setShowMeetballs(false)
   }
   const { ACCEPTED, PENDING } = LISTING_STATUSES
   return (
      <Wrapper onClick={onClick} isViewed={isViewed}>
         <Flex height="100%" direction="column" align="center">
            <ImgWrapper>
               <Carousel dataSlider={images} />
            </ImgWrapper>
            <ContentWrapper>
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
                  <Button onClick={meetballsHandler}>...</Button>
                  {showMeetballs && status === PENDING && (
                     <Meetballs>
                        <AboutItem onClick={editBookHandler}>Reject</AboutItem>
                        <AboutItem onClick={deleteBookHandler}>
                           Delete
                        </AboutItem>
                        <AboutItem onClick={acceptBookHandler}>
                           Accept
                        </AboutItem>
                     </Meetballs>
                  )}
                  {showMeetballs && status === ACCEPTED && !isBlocked && (
                     <Meetballs>
                        <AboutItem onClick={editBookHandler}>Block</AboutItem>
                        <AboutItem onClick={deleteBookHandler}>
                           Delete
                        </AboutItem>
                     </Meetballs>
                  )}
                  {showMeetballs && status === ACCEPTED && isBlocked && (
                     <Meetballs>
                        <AboutItem onClick={editBookHandler}>UnBlock</AboutItem>
                        <AboutItem onClick={deleteBookHandler}>
                           Delete
                        </AboutItem>
                     </Meetballs>
                  )}
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
`
const Meetballs = styled.div`
   padding: 0.3rem;
   box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
   background-color: white;
   position: absolute;
   bottom: 50px;
   right: 10px;
   animation: YES ease 0.2s;
   @keyframes YES {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
`
const AboutItem = styled.div`
   width: 180px;
   padding: 0.4rem 1rem;
   box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
   font-family: 'Inter';
   font-weight: 400;
   font-size: 16px;
   background-color: #ebebeb;
   color: #5d5d5d;
   cursor: pointer;
   :hover {
      background-color: #b8b8b888;
   }
`
export default AdminCard
