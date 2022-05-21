/* eslint-disable jsx-a11y/no-static-element-interactions */
import Avatar from '@mui/material/Avatar'
import styled from 'styled-components'
import { useState } from 'react'
import Title from '../../../components/UI/typography/Title'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import Text from '../../../components/UI/typography/Text'
import Like from '../../../assets/icons/Like.svg'
import disLike from '../../../assets/icons/disLike.svg'
import Rating from './Rating'
import ModalImage from './ModalImage'

const Feedbacks = ({ users, value, data, date, like, dislike, images }) => {
   const [seeMore, setSeeMore] = useState(false)
   return (
      <Div>
         <Flex
            margin="46px 0 0 0 "
            width="100%"
            justify="space-between"
            align="center"
         >
            <Flex align="center" gap="10px">
               <Avatar />
               <Title>{users}</Title>
            </Flex>
            <Flex align="center" gap="10px">
               <Rating value={value} />
            </Flex>
         </Flex>
         <Flex margin="20px 0 0 0 " direction="row">
            <Text className="longText" direction="column">
               {seeMore ? data : `${data.substring(0, 100)}`}
               <span onClick={() => setSeeMore(!seeMore)}>
                  {seeMore ? 'See less' : 'See  more'}
               </span>
            </Text>
         </Flex>
         <Flex margin="23px 0 0 0" justify="space-between">
            <Flex>
               <Text>{date}</Text>
            </Flex>
            <Flex gap="20px">
               <Flex gap="10px">
                  <img src={Like} alt="" />
                  <span className="Like">{like}</span>
               </Flex>
               <Flex gap="10px">
                  <img src={disLike} alt="" />
                  <span className="Like">{dislike}</span>
               </Flex>
            </Flex>
         </Flex>
         <ModalImage images={images} />
      </Div>
   )
}
const Div = styled.div`
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
         font-size: 16px;
         line-height: 130%;
         text-decoration-line: underline;
         cursor: pointer;
      }
   }
`
export default Feedbacks
