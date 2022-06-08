import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingPage from '../UI/loader/LoadingPage'
import styled from 'styled-components'
import { getUserProfileListingsAnnouncement } from '../../store/listingSlice'
import NotFound from '../UI/not-found-content/NotFound'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Pagination from '../pagination/Pagination'
import Flex from '../UI/ui-for-positions/Flex'
import ProfileCard from '../cards/ProfileCard'
import { LISTING_STATUSES } from '../../utils/constants/general'

const MyAnnouncement = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { listings, isLoading } = useSelector((state) => state.listing)
   const [params, setParams] = useSearchParams()
   const page = params.get('page')
   const [pagination, setPagination] = useState(Number(page) || 1)

   const { total } = listings

   useEffect(() => {
      dispatch(
         getUserProfileListingsAnnouncement({
            pagination,
            sortBy: { createdAt: 'DESC', updatedAt: 'DESC', isBlocked: 'ASC' },
         })
      )
      setParams({ page: pagination })
   }, [pagination])

   const paginationHandler = (event, value) => setPagination(value)
   const countOfPages = total / 6

   const enterListingHandler = (id) => navigate(`${id}`)

   const isAccepted = (el) => el.status === LISTING_STATUSES.ACCEPTED

   return (
      (isLoading && <LoadingPageStyled width="260px" height="320px" />) ||
      (listings?.data?.length && (
         <>
            {listings?.data?.map((el) => (
               <ProfileCard
                  key={el?.id}
                  id={el?.id}
                  onClick={enterListingHandler}
                  width="260px"
                  images={el?.images}
                  title={el?.title}
                  address={el?.address}
                  price={el?.price}
                  rating={el?.rating}
                  blocked={el?.isBlocked}
                  rejected={el?.status}
                  isViewed={el?.isViewed}
                  maxNumberOfGuests={el?.maxNumberOfGuests}
                  isAccepted={isAccepted(el)}
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

export default MyAnnouncement
