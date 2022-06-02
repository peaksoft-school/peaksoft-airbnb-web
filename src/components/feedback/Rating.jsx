import * as React from 'react'
import StarIcon from '@mui/icons-material/Star'
import Rating from '@mui/material/Rating'
import styled from 'styled-components'
import Text from '../UI/typography/Text'

const StarRating = ({ value }) => {
   return (
      <RatingContainer>
         <StarIconStyled
            name="text-feedback"
            value={value}
            readOnly
            precision={0.5}
            emptyIcon={<StarEmptyStyled style={{ opacity: 0.55 }} />}
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
      margin-left: 3px;
      @media (max-width: 500px) {
         font-size: 11px;
      }
   }
`
const StarIconStyled = styled(Rating)`
   @media (max-width: 500px) {
      font-size: 14px !important;
   }
`
const StarEmptyStyled = styled(StarIcon)`
   @media (max-width: 500px) {
      font-size: 14px !important;
   }
`
export default StarRating
