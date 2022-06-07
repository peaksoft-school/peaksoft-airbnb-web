/* eslint-disable jsx-a11y/no-static-element-interactions */
import Avatar from '@mui/material/Avatar'
import styled from 'styled-components'
import { useState } from 'react'
import Title from '../UI/typography/Title'
import Flex from '../UI/ui-for-positions/Flex'
import Text from '../UI/typography/Text'
import Rating from './Rating'
import ModalImage from './ModalImage'
import LikeCheckbox from '../UI/checkbox/LikeCheckbox'
import DisLikeCheckbox from '../UI/checkbox/DisLikeCheckbox'
import { useDispatch } from 'react-redux'
import { disLikeFeedback, likeFeedback } from '../../store/feedbackSlice'

const FeedbackComment = ({
   user,
   comment,
   date,
   likes,
   dislikes,
   images,
   rating,
   avatar,
   id,
}) => {
   const dispatch = useDispatch()
   const [seeMore, setSeeMore] = useState(false)

   const seeMoreComments = () => {
      return seeMore ? comment : `${comment.substring(0, 200)}`
   }

   const likeHandler = () => dispatch(likeFeedback(id))

   const disLikeHandler = () => dispatch(disLikeFeedback(id))

   return (
      <Div>
         <Flex width="100%" justify="space-between" align="center">
            <Flex align="center" gap="10px">
               <Avatar src={avatar} />
               <Title className="useName">{user}</Title>
            </Flex>
            <Flex align="center" gap="10px">
               <Rating value={rating} />
            </Flex>
         </Flex>
         <Flex margin="20px 0 0 0 " direction="row">
            <Text feedback className="longText" direction="column">
               {seeMoreComments()}
               &nbsp;
               {comment.length > 200 && (
                  <span onClick={() => setSeeMore(!seeMore)}>
                     {seeMore ? 'see less' : 'see  more'}
                  </span>
               )}
            </Text>
         </Flex>
         <ModalImage images={images} />
         <Flex margin="23px 0 0 0" justify="space-between" align="center">
            <Flex>
               <Text>{date}</Text>
            </Flex>
            <Flex gap="20px" align="center">
               <Flex>
                  <LikeCheckbox onChange={likeHandler} />
                  <span className="Like">{likes}</span>
               </Flex>
               <Flex>
                  <DisLikeCheckbox onChange={disLikeHandler} />
                  <span className="Like">{dislikes}</span>
               </Flex>
            </Flex>
         </Flex>
      </Div>
   )
}
const Div = styled.div`
   margin-bottom: 60px;
   .Like {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #000000;
   }
   .useName {
      @media (max-width: 500px) {
         font-size: 14px;
      }
   }
   .longText {
      max-width: 550px;
      span {
         color: #266bd3;
         font-family: 'Inter';
         font-style: normal;
         font-weight: 400;
         font-size: 14px;
         line-height: 130%;
         text-decoration-line: underline;
         cursor: pointer;
      }
   }
`
export default FeedbackComment
