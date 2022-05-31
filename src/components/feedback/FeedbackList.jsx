/* eslint-disable jsx-a11y/no-static-element-interactions */
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Title from '../UI/typography/Title'
import media from '../../utils/helpers/media'
import Flex from '../UI/ui-for-positions/Flex'
import FeedbackComment from './FeedbackComment'

const FeedbackList = ({ feedbacks = [] }) => {
   const [feedbackToggle, setFeedbackToggle] = useState(feedbacks || [])
   const [showMore, setShowMore] = useState(false)
   useEffect(() => {
      if (showMore) {
         setFeedbackToggle(feedbacks)
      } else {
         setFeedbackToggle(feedbacks.slice(0, 3))
      }
   }, [showMore])
   return (
      <Container>
         <Flex margin="0 0 40px 0">
            <Title>FEEDBACK</Title>
         </Flex>
         {feedbackToggle.map((el) => (
            <FeedbackComment
               key={el.id}
               avatar={el.listing.user.avatar}
               user={el.listing.user.name}
               rating={el.rating}
               comment={el.comment}
               date="22-22-2222"
               likes={el.likes}
               dislikes={el.dislikes}
               images={el.listing.images}
            />
         ))}
         <Flex align="center" justify="center" margin="35px 0 0 0 ">
            <Title className="showMore" onClick={() => setShowMore(!showMore)}>
               {showMore ? 'Show less' : 'Show  more'}
            </Title>
         </Flex>
      </Container>
   )
}
const Container = styled.div`
   max-width: 580px;
   width: 100%;
   ${media.mobile`
   padding:0.5rem;
  
   `}
   margin-top: 60px;
   .showMore {
      cursor: pointer;
      text-decoration-line: underline;
   }
`
export default FeedbackList