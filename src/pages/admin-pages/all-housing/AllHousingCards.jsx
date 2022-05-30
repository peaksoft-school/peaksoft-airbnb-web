import React from 'react'
import styled from 'styled-components'
import AdminCard from '../../../components/admin-card/AdminCard'
import NotFound from '../../../components/UI/not-found-content/NotFound'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import media from '../../../utils/helpers/media'

const Cards = ({ listings = [] }) => {
   return (
      <CardContainer>
         {(listings.length > 0 &&
            listings.map((el) => (
               <AdminCard
                  key={el.id}
                  price={el.price}
                  address={el.address}
                  title={el.title}
                  rating={el.rating}
                  guest={el.maxNumberOfGuests}
                  images={el.images}
                  status={el.status}
                  isBlocked={el.isBlocked}
                  isViewed
               />
            ))) || <NotFound />}
      </CardContainer>
   )
}
const CardContainer = styled(Flex)`
   width: 100%;
   flex-wrap: wrap;
   gap: 13px;
   ${media.tablet`
   justify-content:center;
   `}
`
export default Cards
