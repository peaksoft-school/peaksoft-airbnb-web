/* eslint-disable jsx-a11y/no-static-element-interactions */
import Avatar from '@mui/material/Avatar'
import styled from 'styled-components'
import { useState } from 'react'
import Title from '../UI/typography/Title'
import Flex from '../UI/ui-for-positions/Flex'
import Text from '../UI/typography/Text'
import Like from '../../assets/icons/like.svg'
import disLike from '../../assets/icons/disLike.svg'
import Rating from './Rating'
import ModalImage from './ModalImage'

const FeedbackComment = ({
   user,
   comment,
   date,
   likes,
   dislikes,
   images,
   rating,
}) => {
   const [seeMore, setSeeMore] = useState(false)

   const commentMoreOrSee = () => {
      return seeMore ? comment : `${comment.substring(0, 200)}`
   }

   return (
      <Div>
         <Flex width="100%" justify="space-between" align="center">
            <Flex align="center" gap="10px">
               <Avatar />
               <Title>{user}</Title>
            </Flex>
            <Flex align="center" gap="10px">
               <Rating value={rating} />
            </Flex>
         </Flex>
         <Flex margin="20px 0 0 0 " direction="row">
            <Text feedback className="longText" direction="column">
               {commentMoreOrSee()}
               &nbsp;
               {comment.length > 200 && (
                  <span onClick={() => setSeeMore(!seeMore)}>
                     {seeMore ? 'see less' : 'see  more'}
                  </span>
               )}
            </Text>
         </Flex>
         <Flex margin="23px 0 0 0" justify="space-between">
            <Flex>
               <Text>{date}</Text>
            </Flex>
            <Flex gap="20px">
               <Flex gap="10px">
                  <img src={Like} alt="" />
                  <span className="Like">{likes}</span>
               </Flex>
               <Flex gap="10px">
                  <img src={disLike} alt="" />
                  <span className="Like">{dislikes}</span>
               </Flex>
            </Flex>
         </Flex>
         <ModalImage images={images} />
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
