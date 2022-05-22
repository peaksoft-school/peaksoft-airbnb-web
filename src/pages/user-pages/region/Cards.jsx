/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled from 'styled-components'
import ClientCard from '../../../components/client-card/ClientCard'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import media from '../../../utils/helpers/media'

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
                  images={el.images}
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
