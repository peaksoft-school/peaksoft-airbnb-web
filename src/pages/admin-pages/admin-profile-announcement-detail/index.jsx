import styled from 'styled-components'
import Title from '../../../components/UI/typography/Title'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import media from '../../../utils/helpers/media'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loader from '../../../components/UI/loader/Loader'
import RatingChart from '../../../components/UI/rating-chart/RatingChart'
import FeedbackList from '../../../components/feedback/FeedbackList'
import { ratingPercentageCalculator } from '../../../utils/helpers/calculatorPercentRating'
import InnerPageContent from '../../../components/inner-page-content/InnerPageContent'
import Button from '../../../components/UI/buttons/Button'
import {
   blockListing,
   getOneAnnouncement,
   unBlockListing,
} from '../../../store/adminUsersSlice'
import DatesOfBooking from '../../user-pages/profile-announcement-detail/DatesOfBooking'
import { BreadCrumbs } from '../../../components/UI/breadcrumbs/BreadCrumbs'

const AdminProfileAnnouncementDetail = () => {
   const params = useParams()
   const dispatch = useDispatch()
   const { listing, isLoading, user } = useSelector((state) => state.users)

   useEffect(() => {
      dispatch(getOneAnnouncement(params.homeId))
   }, [])

   const blockListingHandler = () => dispatch(blockListing(params.homeId))

   const unBlockListingHandler = () => dispatch(unBlockListing(params.homeId))

   const pathsArray = [
      {
         path: '/users',
         name: 'Users',
      },
      {
         path: `/users/${params.userId}/my-announcements`,
         name: user?.data?.user?.name || 'user',
      },
      {
         path: `/users/${params.userId}/booking`,
         name: 'announcement',
      },
   ]

   return isLoading ? (
      <Loader />
   ) : (
      <Wrapper>
         <Flex align="center" gap="6px" margin="40px 0 0 0">
            <BreadCrumbs pathsArray={pathsArray} />
         </Flex>
         <Flex margin="30px 0 30px 0">
            <Title size="20px">NAME</Title>
         </Flex>
         <Container>
            <InnerPageContent listing={listing}>
               <Flex width="100%" gap="20px" margin="60px 0 0 0">
                  {listing?.isBlocked && (
                     <Button width="200px" onClick={unBlockListingHandler}>
                        UNBLOCK
                     </Button>
                  )}
                  {!listing?.isBlocked && (
                     <Button onClick={blockListingHandler} width="200px">
                        BLOCK
                     </Button>
                  )}
               </Flex>
            </InnerPageContent>
         </Container>
         <DatesOfBooking bookings={listing.bookings} />
         <Container>
            <LeftContent>
               <FeedbackList
                  disabledLikeDisLike
                  feedbacks={listing?.feedbacks}
               />
            </LeftContent>
            <RightContent>
               <RatingChart
                  feedbacks={ratingPercentageCalculator(listing?.feedbacks)}
                  rating={listing?.rating}
               />
            </RightContent>
         </Container>
      </Wrapper>
   )
}
const LeftContent = styled(Flex)`
   width: 50%;
   display: flex;
   flex-direction: column;
   ${media.desktop`
   margin: 0 auto;
      width:100%;
   `}
`
const RightContent = styled(Flex)`
   width: 50%;
   display: flex;
   flex-direction: column;
   ${media.desktop`
      width:100%;
   `}
`
const Container = styled(Flex)`
   width: 100%;
   gap: 68px;
   ${media.desktop`
       flex-direction:column;
       align-items:center;

   `}
`
const Wrapper = styled.div`
   max-width: 1290px;
   padding: 4rem;
   margin: 0 auto;
   width: 100%;
   ${media.tablet`
   padding:1.5rem;

   `}
   ${media.mobile`
   padding:1rem;

   `}

   .btn {
      ${media.tablet`
      max-width: 167px;
      width: 100%;
       padding:8px 10px;
   `}
   }
`

export default AdminProfileAnnouncementDetail
