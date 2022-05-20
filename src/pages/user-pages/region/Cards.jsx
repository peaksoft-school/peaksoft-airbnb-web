/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled from 'styled-components'
import ClientCard from '../../../components/client-card/ClientCard'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import media from '../../../utils/helpers/media'

const image = [
   {
      id: Math.random().toString(),
      img: 'https://images.unsplash.com/photo-1652367252191-eabd34a5f6bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
   },
   {
      id: Math.random().toString(),
      img: 'https://images.unsplash.com/photo-1652381736447-d2cd74dcdc14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
   },
   {
      id: Math.random().toString(),
      img: 'https://images.unsplash.com/photo-1652385401060-519b355dc6fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
   },
   {
      id: Math.random().toString(),
      img: 'https://images.unsplash.com/photo-1652385698317-b6a5cfc43d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
   },
]
const Cards = ({ listings = [] }) => {
   return (
      <CardContainer>
         {listings.length > 0 &&
            listings.map((el) => (
               <ClientCard
                  key={el.id}
                  isViewed
                  price={el.price}
                  address={el.address}
                  title={el.title}
                  starRange={el.region.title}
                  guest={el.maxNumberOfGuests}
                  images={image}
               />
            ))}
      </CardContainer>
   )
}
const CardContainer = styled(Flex)`
   flex-wrap: wrap;
   gap: 15px;
   ${media.tablet`
   justify-content:center;
   `}
`
export default Cards
