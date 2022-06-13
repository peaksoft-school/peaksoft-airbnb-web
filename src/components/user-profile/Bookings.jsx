import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import ProfileCard from '../cards/ProfileCard'
import LoadingPage from '../UI/loader/LoadingPage'
import { getUserProfileListingBookings } from '../../store/listingSlice'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Flex from '../UI/ui-for-positions/Flex'
import NotFound from '../UI/not-found-content/NotFound'
import Pagination from '../pagination/Pagination'
import ChangeDateBooking from '../change-date/ChangeDateBooking'

const Bookings = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [params, setParams] = useSearchParams()
   const { listings, isLoading } = useSelector((state) => state.listing)
   const { total, data } = listings
   const page = params.get('page')
   const changeDate = params.get('changeDate')
   const booking = data.find((el) => el.id === changeDate) || {}

   const [pagination, setPagination] = useState(Number(page) || 1)

   const paginationHandler = (event, value) => setPagination(value)
   const countOfPages = total / 6

   const enterListingHandler = (id) => navigate(`${id}`)

   const showChangeDateModal = (id) => setParams({ changeDate: id })

   useEffect(() => {
      dispatch(
         getUserProfileListingBookings({
            pagination,
            sortBy: { createdAt: 'DESC', updatedAt: 'DESC', isBlocked: 'ASC' },
         })
      )
      setParams({ page: pagination })
   }, [])

   return isLoading ? (
      <LoadingPageStyled width="260px" height="320px" />
   ) : (
      (listings?.data?.length && (
         <>
            <ChangeDateBooking booking={booking} />
            {data?.map((el) => (
               <ProfileCard
                  key={el?.id}
                  id={el?.id}
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
                  checkIn={el?.checkInDate}
                  checkOut={el?.checkOutDate}
                  onChangeDate={showChangeDateModal}
                  isAccepted
               />
            ))}
            {countOfPages > 1 && (
               <Flex margin="40px 0 150px 0" width="100%" justify="center">
                  <Pagination
                     onChange={paginationHandler}
                     count={Math.ceil(countOfPages)}
                     page={pagination}
                  />
               </Flex>
            )}
         </>
      )) || (
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
