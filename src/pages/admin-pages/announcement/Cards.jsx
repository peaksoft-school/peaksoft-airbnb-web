import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AdminCard from '../../../components/admin-card/AdminCard'
import {
   acceptListing,
   deleteListing,
   rejectListing,
} from '../../../store/listingSlice'

const Cards = ({ listings = [] }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const transitionInnerPage = (id) => {
      navigate(`${id}`)
   }
   const acceptListingHandler = (id) => {
      dispatch(acceptListing(id))
      // console.log(acceptListing(id))
   }
   const rejectListingHandler = (id) => {
      dispatch(rejectListing(id))
   }
   const deleteListingHandler = (id) => {
      dispatch(deleteListing(id))
   }
   return (
      listings.length > 0 &&
      listings.map((el) => (
         <AdminCard
            key={el.id}
            id={el.id}
            onClick={() => transitionInnerPage(el.id)}
            images={el.images}
            isViewed={el.isViewed}
            price={el.price}
            address={el.address}
            title={el.title}
            rating={el.rating}
            maxNumberOfGuests={el.maxNumberOfGuests}
            acceptHandler={acceptListingHandler}
            rejectHandler={rejectListingHandler}
            deleteHandler={deleteListingHandler}
         />
      ))
   )
}

export default Cards
