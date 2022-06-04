import styled from 'styled-components'
import Text from '../../../components/UI/typography/Text'
import Title from '../../../components/UI/typography/Title'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import media from '../../../utils/helpers/media'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Loader from '../../../components/UI/loader/Loader'
import RatingChart from '../../../components/UI/rating-chart/RatingChart'
import LeaveFeedbackButton from '../../../components/UI/buttons/LeaveFeedbackButton'
import FeedBack from '../../../components/feedback/FeedBack'
import FeedbackList from '../../../components/feedback/FeedbackList'
import { ratingPercentageCalculator } from '../../../utils/helpers/calculatorPercentRating'
import DatesOfBooking from './DatesOfBooking'
import { getOneAnnouncements } from '../../../store/listingSlice'
import InnerPageContent from '../../../components/inner-page-content/InnerPageContent'
import Button from '../../../components/UI/buttons/Button'
import DeleteModal from '../../../components/delete-listing-modal/DeleteModal'

const UserProfileAnnouncementsDetail = () => {
   const navigate = useNavigate()
   const params = useParams()
   const [searchParams, setSearchParams] = useSearchParams()
   const feedbackParams = searchParams.get('feedback')
   const dispatch = useDispatch()
   const { listing, isLoading } = useSelector((state) => state.listing)
   const [showDeleteModal, setShowDeleteModal] = useState(false)

   useEffect(() => {
      dispatch(getOneAnnouncements(params.homeId))
   }, [])

   const navigateToProfile = () => navigate('/profile/my-announcements')

   const showFeedbackModal = () => setSearchParams({ feedback: 'true' })

   const hidePaymentModal = () => setSearchParams('')

   return isLoading ? (
      <Loader />
   ) : (
      <Wrapper>
         <DeleteModal
            id={params.homeId}
            func={navigateToProfile}
            isVisible={showDeleteModal}
            onClose={() => setShowDeleteModal(false)}
         />
         <FeedBack isVisible={feedbackParams} onClose={hidePaymentModal} />
         <Flex align="center" gap="6px">
            <Text size="17">Announcement</Text>
            <Title>/</Title>
            <Title>Name</Title>
         </Flex>
         <Flex margin="30px 0 30px 0">
            <Title size="20px">NAME</Title>
         </Flex>
         <Container>
            <InnerPageContent listing={listing}>
               <Flex width="100%" gap="20px" margin="60px 0 0 0">
                  <Button
                     onClick={() => setShowDeleteModal(true)}
                     width="200px"
                     outline
                  >
                     DELETE
                  </Button>
                  <Button width="200px">EDIT</Button>
               </Flex>
            </InnerPageContent>
         </Container>
         {listing?.bookings?.length && (
            <DatesOfBooking bookings={listing.bookings} />
         )}
         <Container>
            <LeftContent>
               <FeedbackList feedbacks={listing.feedbacks} />
               <Flex width="100%" margin="40px 0 0 0">
                  <LeaveFeedbackButton onClick={showFeedbackModal} />
               </Flex>
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

export default UserProfileAnnouncementsDetail
