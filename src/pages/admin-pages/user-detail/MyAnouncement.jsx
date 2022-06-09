import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import LoadingPage from '../../../components/UI/loader/LoadingPage'
import {
   getAdminUserListingAnnouncement,
   blockListing,
   unBlockListing,
} from '../../../store/adminUsersSlice'
import AdminCard from '../../../components/admin-card/AdminCard'
import Pagination from '../../../components/pagination/Pagination'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import NotFound from '../../../components/UI/not-found-content/NotFound'

const MyAnnouncement = () => {
   const { userId: id } = useParams()
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { userListings, isLoading } = useSelector((state) => state.users)
   const { total } = userListings
   const [params, setParams] = useSearchParams()
   const page = params.get('page')
   const [pagination, setPagination] = useState(Number(page) || 1)
   const sortBy = {
      createdAt: 'DESC',
      updatedAt: 'DESC',
      isBlocked: 'ASC',
      isViewed: 'DESC',
   }

   useEffect(() => {
      dispatch(getAdminUserListingAnnouncement({ sortBy, id, pagination }))
      setParams({ page: pagination })
   }, [pagination])

   const paginationHandler = (event, value) => setPagination(value)
   const countOfPages = total / 8

   const enterListingHandler = (id) => {
      navigate(`${id}`)
   }
   const blockListingHandler = async (id) => {
      dispatch(blockListing(id)).unwrap()
   }
   const unBlockListingHandler = (id) => {
      dispatch(unBlockListing(id)).unwrap()
   }
   return (
      <>
         {isLoading && <LoadingPage width="210px" height="270px" />}
         {userListings?.data?.length ? (
            userListings?.data?.map((el) => (
               <AdminCard
                  userId={id}
                  key={el.id}
                  id={el.id}
                  onClick={enterListingHandler}
                  width="260px"
                  images={el.images}
                  title={el.title}
                  address={el.address}
                  price={el.price}
                  rating={el.rating}
                  isBlocked={el.isBlocked}
                  status={el.status}
                  isViewed="true"
                  maxNumberOfGuests={el.maxNumberOfGuests}
                  onBlock={blockListingHandler}
                  onUnBlock={unBlockListingHandler}
               />
            ))
         ) : (
            <Flex margin="100px 0 0 100px" width="100%" justify="center">
               <NotFound />
            </Flex>
         )}
         <Flex margin="100px  0" width="100%" justify="center">
            {countOfPages > 1 && (
               <Pagination
                  onChange={paginationHandler}
                  count={Math.ceil(countOfPages)}
                  page={pagination}
               />
            )}
         </Flex>
      </>
   )
}

export default MyAnnouncement
