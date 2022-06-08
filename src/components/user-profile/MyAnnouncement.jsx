import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfileListingsAnnouncement } from '../../store/userProfileSlice'
import ProfileCard from '../cards/ProfileCard'
import LoadingPage from '../UI/loader/LoadingPage'
import styled from 'styled-components'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { LISTING_STATUSES } from '../../utils/constants/general'
import Pagination from '../pagination/Pagination'
import Flex from '../UI/ui-for-positions/Flex'

const MyAnnouncement = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [params, setParams] = useSearchParams()
   const page = params.get('page')
   const [pagination, setPagination] = useState(Number(page) || 1)
   const { userlistings, isLoading } = useSelector((state) => state.userProfile)

   const { total } = userlistings

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

   const enterListingHandler = (id) => {
      navigate(`${id}`)
   }
   return (
      <>
         {isLoading ? (
            <LoadingPageStyled width="260px" height="320px" />
         ) : (
            userlistings?.data?.map((el) => (
               <ProfileCard
                  key={el.id}
                  id={el.id}
                  onClick={enterListingHandler}
                  width="260px"
                  images={el.images}
                  title={el.title}
                  address={el.address}
                  price={el.price}
                  rating={el.rating}
                  blocked={el.isBlocked}
                  rejected={el.status}
                  isViewed={el.isViewed}
                  maxNumberOfGuests={el.maxNumberOfGuests}
                  isBooked={el.status === LISTING_STATUSES.ACCEPTED}
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

export default MyAnnouncement
