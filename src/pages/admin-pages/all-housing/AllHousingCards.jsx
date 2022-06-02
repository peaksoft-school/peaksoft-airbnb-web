import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import AdminCard from '../../../components/admin-card/AdminCard'
import NotFound from '../../../components/UI/not-found-content/NotFound'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import media from '../../../utils/helpers/media'
import {
   blockListing,
   deleteListing,
   unBlockListing,
} from '../../../store/listingSlice'

const Cards = ({ listings = [] }) => {
   const dispatch = useDispatch()

   const deleteListingHandler = async (id) => {
      dispatch(deleteListing(id)).unwrap()
   }
   const blockListingHandler = async (id) => {
      dispatch(blockListing(id)).unwrap()
   }
   const unBlockListingHandler = (id) => {
      dispatch(unBlockListing(id)).unwrap()
   }

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
                  onDelete={deleteListingHandler}
                  onBlock={blockListingHandler}
                  onUnBlock={unBlockListingHandler}
                  id={el.id}
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
