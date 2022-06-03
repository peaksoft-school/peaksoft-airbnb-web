import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileCard from '../cards/ProfileCard'
import LoadingPage from '../UI/loader/LoadingPage'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { getUserProfileListingsAnnouncement } from '../../store/listingSlice'

const MyAnnouncement = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { userAnouncementlistings, isLoading } = useSelector(
      (state) => state.listing
   )
   useEffect(() => {
      dispatch(
         getUserProfileListingsAnnouncement({
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
      userAnouncementlistings?.data?.map((el) => (
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

export default MyAnnouncement
