/* eslint-disable react/no-array-index-key */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import ClientCard from '../../../components/client-card/ClientCard'
import NotFound from '../../../components/UI/not-found-content/NotFound'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import media from '../../../utils/helpers/media'

const Cards = ({ listings = [] }) => {
   const navigate = useNavigate()
   const transitionDetailListing = (id) => {
      navigate(`${id}`)
   }
   return (
      <CardContainer>
         {(listings.length > 0 &&
            listings.map((el) => (
               <ClientCard
                  onClick={() => transitionDetailListing(el.id)}
                  key={el.id}
                  isViewed={el.isViewed}
                  price={el.price}
                  address={el.address}
                  title={el.title}
                  starRange={el.region.title}
                  guest={el.maxNumberOfGuests}
                  images={el.images}
               />
            ))) || <NotFound />}
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
