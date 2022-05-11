import * as React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { ReactComponent as Stars } from '../../assets/icons/Star.svg'
import { ReactComponent as Geolocations } from '../../assets/icons/Geolocation.svg'
import Text from '../UI/typography/Text'

import Flex from '../UI/ui-for-positions/Flex'
import Title from '../UI/typography/Title'
import Carousel from '../UI/carousel/Carousel'

const AdminCard = ({ width, isViewed }) => {
   const [showMeetballs, setShowMeetballs] = useState(false)
   const meetballsHandler = () => setShowMeetballs(!showMeetballs)
   const editBookHandler = () => {
      setShowMeetballs(false)
   }
   const deleteBookHandler = () => {
      setShowMeetballs(false)
   }

   return (
      <Wrapper width={width} isViewed={isViewed}>
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
                  {showMeetballs && (
                     <Meetballs>
                        <AboutItem onClick={editBookHandler}>Edit</AboutItem>
                        <AboutItem onClick={deleteBookHandler}>
                           Delete
                        </AboutItem>
                     </Meetballs>
                  )}
                  <Button onClick={meetballsHandler}>...</Button>
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
   padding: 0 20px 20px 20px;
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
   width: 30px;
   font-family: bold;
   font-size: 20px;
   bottom: 200px;
   display: inline;
   font-family: 'Inter';
   font-weight: 400;
   cursor: pointer;
`
const Meetballs = styled.div`
   padding: 0.3rem;
   box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
   background-color: white;
   position: absolute;
   bottom: 50px;
   right: 20px;
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
   width: 200px;
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
