import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import AdminCard from '../../../components/admin-card/AdminCard'
import { showSuccessMessage } from '../../../components/UI/notification/Notification'
import { acceptListing, deleteListing } from '../../../store/listingSlice'
import { REJECT_LISTING } from '../../../utils/constants/general'

const Cards = ({ listings = [] }) => {
   const [, setParams] = useSearchParams()
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const transitionInnerPage = (id) => {
      navigate(`${id}`)
   }
   const acceptListingHandler = (id) => {
      dispatch(acceptListing(id))
         .unwrap()
         .then(() =>
            showSuccessMessage({
               title: 'Accepted :)',
               message: 'Moderation successfully passed',
            })
         )
   }
   const rejectListingHandler = (id) => {
      setParams({ [REJECT_LISTING]: id })
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
            onAccept={acceptListingHandler}
            onReject={rejectListingHandler}
            onDelete={deleteListingHandler}
         />
      ))
   )
}

export default Cards
