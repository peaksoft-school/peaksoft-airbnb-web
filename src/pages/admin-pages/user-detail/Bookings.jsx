import AdminCard from '../../../components/admin-card/AdminCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import LoadingPage from '../../../components/UI/loader/LoadingPage'
import {
   getAdminUserListingBookings,
   deleteListing,
} from '../../../store/adminUsersSlice'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Pagination from '../../../components/pagination/Pagination'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import NotFound from '../../../components/UI/not-found-content/NotFound'

const Bookings = () => {
   const { userId: id } = useParams()
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { userListings, isLoading } = useSelector((state) => state.users)
   const { total } = userListings
   const [params, setParams] = useSearchParams()
   const page = params.get('page')
   const [pagination, setPagination] = useState(Number(page) || 1)
   const sortBy = {
      createdAt: 'ASC',
      updatedAt: 'DESC',
   }

   useEffect(() => {
      dispatch(getAdminUserListingBookings({ sortBy, id, pagination }))
      setParams({ page: pagination })
   }, [pagination])

   const paginationHandler = (event, value) => setPagination(value)
   const countOfPages = total / 8

   const enterListingHandler = (id) => {
      navigate(`${id}`)
   }
   const deleteListingHandler = async (id) => {
      dispatch(deleteListing(id)).unwrap()
   }
   return (
      <>
         {isLoading && <LoadingPage width="210px" height="270px" />}
         {userListings?.data?.length ? (
            userListings?.data?.map((el) => (
               <AdminCard
                  userId={id}
                  key={el?.listing?.id}
                  id={el?.listing?.id}
                  onClick={enterListingHandler}
                  width="260px"
                  images={el?.listing?.images}
                  title={el?.listing?.title}
                  address={el?.listing?.address}
                  price={el?.listing?.price}
                  rating={el?.listing?.rating}
                  isBlocked={el?.listing?.isBlocked}
                  isViewed="true"
                  maxNumberOfGuests={el?.listing?.maxNumberOfGuests}
                  isBooked="true"
                  onDelete={deleteListingHandler}
               />
            ))
         ) : (
            <Flex margin="100px 0 0 100px" width="100%" justify="center">
               <NotFound />
            </Flex>
         )}
         <Flex margin="200px 0 150px 0" width="100%" justify="center">
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
export default Bookings
