/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import ProfileCard from '../cards/ProfileCard'
import { getUserProfileListingBookings } from '../../store/userProfileSlice'
import LoadingPage from '../UI/loader/LoadingPage'
import { useSearchParams } from 'react-router-dom'
import Flex from '../UI/ui-for-positions/Flex'
import Pagination from '../pagination/Pagination'

const Bookings = () => {
   const dispatch = useDispatch()
   const [params, setParams] = useSearchParams()
   const page = params.get('page')
   const [pagination, setPagination] = useState(Number(page) || 1)
   const { userBookingListings, isLoading } = useSelector(
      (state) => state.userProfile
   )
   const { total } = userBookingListings

   useEffect(() => {
      dispatch(
         getUserProfileListingBookings({
            pagination,
            sortBy: { createdAt: 'DESC', updatedAt: 'DESC', isBlocked: 'ASC' },
         })
      )
      setParams({ page: pagination })
   }, [pagination])

   const paginationHandler = (event, value) => setPagination(value)
   const countOfPages = total / 6

   return (
      <>
         {isLoading ? (
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
                  isBooked
               />
            ))
         )}
         <Flex margin="0 0 150px 0" width="100%" justify="center">
            <Pagination
               onChange={paginationHandler}
               count={Math.ceil(countOfPages)}
               page={pagination}
            />
         </Flex>
      </>
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
