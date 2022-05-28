/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled from 'styled-components'
import media from '../../../utils/helpers/media'
import Flex from '../ui-for-positions/Flex'

const LoadingPage = ({ width, height }) => {
   return (
      <FlexCard width="100%">
         {Array.from({ length: 10 }).map((_, i) => (
            <Card height={height} width={width} key={i}>
               <P />
               <Content>
                  <Flex width="100%" justify="space-between">
                     <H2 width="20%" />
                     <H2 width="20%" />
                  </Flex>
                  <H2 />
                  <H2 />
                  <H2 />
               </Content>
            </Card>
         ))}
      </FlexCard>
   )
}
const FlexCard = styled(Flex)`
   gap: ${({ width }) => (width ? '13px' : '15px')};
   flex-wrap: wrap;
   ${media.tablet`
   justify-content:center;
   `}
`

const Card = styled.div`
   width: ${(props) => props.width || '290px'};
   min-height: ${(props) => props.height || '362px'};
   position: relative;
   @media (max-width: 425px) {
      width: 100%;
   }
`
const Content = styled.div`
   width: 100%;
   height: 50%;
   padding: 10px;
`
const H2 = styled.h2`
   :empty {
      width: ${(props) => props.width || '100%'};
      height: 1em;
      background-color: rgba(0, 0, 0, 0.2);
      animation: skeleton-anim 1s 0.5s infinite alternate;
      margin-top: 10px;
      @keyframes skeleton-anim {
         0% {
            opacity: 0.3;
         }
         100% {
            opacity: 0.8;
         }
      }
   }
`
const P = styled.p`
   width: 100%;
   height: 50%;
   background-color: rgba(0, 0, 0, 0.2);
   animation: skeleton-anim 1s infinite alternate;

   @keyframes skeleton-anim {
      0% {
         opacity: 0.3;
      }
      100% {
         opacity: 0.8;
      }
   }
`

export default LoadingPage
