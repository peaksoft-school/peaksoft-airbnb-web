import * as React from 'react'
import StarIcon from '@mui/icons-material/Star'
import Rating from '@mui/material/Rating'
import styled from 'styled-components'
import Text from '../../../components/UI/typography/Text'

const StarRating = ({ value }) => {
   return (
      <RatingContainer>
         <Rating
            name="text-feedback"
            value={value}
            readOnly
            precision={0.5}
            emptyIcon={
               <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
         />
         <Text className="text">{`(${value})`}</Text>
      </RatingContainer>
   )
}
const RatingContainer = styled.div`
   width: 200;
   display: flex;
   align-items: center;
   .text {
      padding: 15px 15px 15px 10px;
   }
`
export default StarRating
