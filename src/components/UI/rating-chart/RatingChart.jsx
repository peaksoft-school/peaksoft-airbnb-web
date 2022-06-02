import React from 'react'
import styled from 'styled-components'
import Title from '../typography/Title'
import Flex from '../ui-for-positions/Flex'
import Grid from '../ui-for-positions/Grid'
import { ReactComponent as Star } from '../../../assets/icons/bigStar.svg'

// const data = {
//    allRating: '4.4',
//    ratings: [
//       {
//          star: '5',
//          percent: 21,
//       },
//       {
//          star: '4',
//          percent: 74,
//       },
//       {
//          star: '3',
//          percent: 10,
//       },
//       {
//          star: '2',
//          percent: 0,
//       },
//       {
//          star: '1',
//          percent: 0,
//       },
//    ],
// }

const RatingChart = ({ rating, feedbacks }) => {
   return (
      <Container>
         <Flex width="100%" direction="column" gap="12px" height="100%">
            <Flex width="100%" align="center" gap="10px">
               <Title color="#363636" size="24px">
                  <b>{rating}</b>
               </Title>
               <Star />
            </Flex>
            {feedbacks.ratings.map((rating) => (
               <Grid
                  key={rating.star}
                  columns="0.4fr 10fr 2fr"
                  align="center"
                  gap="15px"
                  width="100%"
               >
                  <Title color="#363636">
                     <b>{rating.star}</b>
                  </Title>
                  <Chart>
                     <ChartItem percent={rating.percent} />
                  </Chart>
                  <Title color="#363636">
                     <b>{rating.percent}</b>%
                  </Title>
               </Grid>
            ))}
         </Flex>
      </Container>
   )
}

const Container = styled.div`
   width: 425px;
   padding: 20px 20px 20px 40px;
   border: 1px solid #c4c4c4;
   border-radius: 16px;
   margin: 50px;
   @media (max-width: 625px) {
      margin: 30px 0 0 0;
      width: 100%;
   }
`
const Chart = styled.div`
   height: 1px;
   background: #c4c4c4;
   display: flex;
   align-items: center;
   justify-content: start;
`
const ChartItem = styled.div`
   height: 3px;
   background-color: #4f7755;
   width: ${({ percent }) => `${percent}%` || 0};
`
// const Title = styled.div``

export default RatingChart
