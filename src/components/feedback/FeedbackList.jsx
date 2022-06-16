/* eslint-disable jsx-a11y/no-static-element-interactions */
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import Title from '../UI/typography/Title'
import media from '../../utils/helpers/media'
import Flex from '../UI/ui-for-positions/Flex'
import FeedbackComment from './FeedbackComment'
import { formatDate } from '../../utils/helpers/general'
import { Alert } from '@mui/material'

const FeedbackList = ({ disabledLikeDisLike = null, feedbacks = [] }) => {
   const [feedbackToggle, setFeedbackToggle] = useState(feedbacks || [])
   const [showMore, setShowMore] = useState(false)
   useEffect(() => {
      if (showMore) {
         setFeedbackToggle(feedbacks)
      } else {
         setFeedbackToggle(feedbacks.slice(0, 3))
      }
   }, [showMore, feedbacks])
   const dateOfTheFeedback = (date) => formatDate.DD_MM_YYYY(date)
   return (
      <Container>
         <Flex margin="0 0 40px 0">
            <Title size="20px">FEEDBACK</Title>
         </Flex>
         {(feedbackToggle?.length > 0 &&
            feedbackToggle.map((el) => (
               <FeedbackComment
                  key={el.id}
                  avatar={el?.user?.avatar}
                  user={el?.user?.name}
                  rating={el?.rating}
                  comment={el?.comment}
                  date={dateOfTheFeedback(el?.createdAt)}
                  likes={el?.likes}
                  dislikes={el?.dislikes}
                  images={el?.images}
                  id={el?.id}
                  disabledLikeDisLike={disabledLikeDisLike}
               />
            ))) || (
            <Alert severity="info" className="notification">
               no comments yet,click button below
            </Alert>
         )}
         <Flex align="center" justify="center" margin="35px 0 0 0 ">
            {feedbacks.length > 3 && (
               <Title
                  className="showMore"
                  onClick={() => setShowMore(!showMore)}
               >
                  {showMore ? 'Show less' : 'Show  more'}
               </Title>
            )}
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
   .notification {
      width: 100%;
      font-size: 16px;
      letter-spacing: 0.5px;
      font-family: 'Inter';
      text-transform: uppercase;
   }
`
export default FeedbackList
