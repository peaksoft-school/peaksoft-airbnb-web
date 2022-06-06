/* eslint-disable react/no-array-index-key */
import { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import ProfileCard from '../cards/ProfileCard'
import { getUserProfileListingBookings } from '../../store/userProfileSlice'
import LoadingPage from '../UI/loader/LoadingPage'

const Bookings = () => {
   const dispatch = useDispatch()
   const { userBookingListings, isLoading } = useSelector(
      (state) => state.userProfile
   )
   useEffect(() => {
      dispatch(
         getUserProfileListingBookings({
            sortBy: { createdAt: 'DESC', updatedAt: 'DESC', isBlocked: 'ASC' },
         })
      )
   }, [])
   return isLoading ? (
      <LoadingPageStyled width="260px" height="320px" />
   ) : (
      userBookingListings?.data?.map((el) => (
         <ProfileCard
            key={el.listing.id}
            width="260px"
            images={el.listing.images}
            title={el.listing.title}
            address={el.listing.address}
            price={el.listing.price}
            rating={el.listing.rating}
            blocked={el.listing.isBlocked}
            maxNumberOfGuests={el.maxNumberOfGuests}
            isBooking
         />
      ))
   )
}

const LoadingPageStyled = styled(LoadingPage)`
   width: 260px !important;
   height: 332px !important;
   @media (max-width: 525px) {
      width: 40vmin !important;
      height: 55vmin !important;
   }
`
export default Bookings
