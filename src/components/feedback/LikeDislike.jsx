import React, { useState } from 'react'
// import styled from 'styled-components'
import { ReactComponent as Likes } from '../../assets/icons/like.svg'
import { ReactComponent as Dislike } from '../../assets/icons/disLike.svg'
import Flex from '../UI/ui-for-positions/Flex'

const LikeDislike = () => {
   const [like, setLike] = useState(0)
   const [dislike, setDislike] = useState(0)

   const LikeHandler = () => {
      setLike((like) => like + 1)
   }
   const DislikeHandler = () => {
      setDislike((dislike) => dislike + 1)
   }
   return (
      <div>
         <Flex align="center" margin="8px 38px 8px 8px" gap="10px">
            <Likes onClick={LikeHandler} />
            {like}
            <Dislike onClick={DislikeHandler} />
            {dislike}
         </Flex>
      </div>
   )
}

// const DislikeStyle = styled.div`
//    width: 16.5px;
//    height: 15.27px;
//    margin: 20px;
// `
// const LikeStyle = styled.div`
//    width: 16.5;
//    height: 15.27px;
// `
export default LikeDislike
