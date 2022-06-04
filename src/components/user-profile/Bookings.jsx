/* eslint-disable react/no-array-index-key */
import { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import ProfileCard from '../cards/ProfileCard'
import LoadingPage from '../UI/loader/LoadingPage'
import { getUserProfileListingBookings } from '../../store/listingSlice'
import { useNavigate } from 'react-router-dom'
import Flex from '../UI/ui-for-positions/Flex'
import NotFound from '../UI/not-found-content/NotFound'

const Bookings = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { listings, isLoading } = useSelector((state) => state.listing)
   useEffect(() => {
      dispatch(
         getUserProfileListingBookings({
            sortBy: { createdAt: 'DESC', updatedAt: 'DESC', isBlocked: 'ASC' },
         })
      )
   }, [])
   const enterListingHandler = (id) => {
      navigate(`${id}`)
   }
   return isLoading ? (
      <LoadingPageStyled width="260px" height="320px" />
   ) : (
      (listings?.data?.length &&
         listings?.data?.map((el) => (
            <ProfileCard
               key={el?.listing?.id}
               id={el?.listing?.id}
               width="260px"
               images={el?.listing?.images}
               title={el?.listing?.title}
               address={el?.listing?.address}
               price={el?.listing?.price}
               rating={el?.listing?.rating}
               blocked={el?.listing?.isBlocked}
               rejected={el?.listing?.status}
               isViewed={el?.listing?.isViewed}
               maxNumberOfGuests={el?.listing?.maxNumberOfGuests}
               onClick={enterListingHandler}
            />
         ))) || (
         <Flex margin="40px 0" width="100%" justify="centers">
            <NotFound />
         </Flex>
      )
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
