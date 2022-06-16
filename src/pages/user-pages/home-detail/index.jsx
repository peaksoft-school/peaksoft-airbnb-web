import styled from 'styled-components'
import Title from '../../../components/UI/typography/Title'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import media from '../../../utils/helpers/media'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneListing } from '../../../store/listingSlice'
import { useParams, useSearchParams } from 'react-router-dom'
import Loader from '../../../components/UI/loader/Loader'
import RatingChart from '../../../components/UI/rating-chart/RatingChart'
import CheckoutForm from '../../../components/checkout-form/CheckoutForm'
import LeaveFeedbackButton from '../../../components/UI/buttons/LeaveFeedbackButton'
import FeedBack from '../../../components/feedback/FeedBack'
import FeedbackList from '../../../components/feedback/FeedbackList'
import {
   getDataFromLocalStorage,
   saveToLocalStorage,
} from '../../../utils/helpers/general'
import { ratingPercentageCalculator } from '../../../utils/helpers/calculatorPercentRating'
import InnerPageContent from '../../../components/inner-page-content/InnerPageContent'
import BookingHome from './BookingHome'
import { BreadCrumbs } from '../../../components/UI/breadcrumbs/BreadCrumbs'

const HomeDetail = () => {
   const params = useParams()
   const [searchParams, setSearchParams] = useSearchParams()
   const valueParams = searchParams.get('payment')
   const feedbackParams = searchParams.get('feedback')
   const dispatch = useDispatch()
   const { listing, isLoading } = useSelector((state) => state.listing)
   const [startAndEndDate, setStartAndEndDate] = useState(
      getDataFromLocalStorage('dates') || {}
   )
   useEffect(() => {
      dispatch(getOneListing(params.homeId))
   }, [])

   const showFeedbackModal = () => setSearchParams({ feedback: 'true' })
   useEffect(() => {
      saveToLocalStorage('dates', startAndEndDate)
   }, [startAndEndDate])

   const showPaymentModal = (dates) => {
      setSearchParams({ payment: 'true' })
      setStartAndEndDate(dates)
   }
   const hidePaymentModal = () => setSearchParams('')

   const pathsArray = [
      {
         path: '/main',
         name: 'main',
      },
      {
         path: '/main/regions',
         name: listing?.region?.title,
      },
      {
         path: '/main/regions/apartment',
         name: listing?.type,
      },
   ]

   return isLoading ? (
      <Loader />
   ) : (
      <Wrapper>
         <FeedBack isVisible={feedbackParams} onClose={hidePaymentModal} />
         <BookingHome
            checkInDate={startAndEndDate.startDate}
            checkOutDate={startAndEndDate.endDate}
            isVisible={valueParams}
            onClose={hidePaymentModal}
            id={params.homeId}
            price={listing?.price}
         />
         <Flex>
            <BreadCrumbs pathsArray={pathsArray} />
         </Flex>
         <Flex margin="30px 0 30px 0">
            <Title size="20px">NAME</Title>
         </Flex>
         <Container>
            <InnerPageContent listing={listing}>
               <Flex margin="30px 0 0 0">
                  <CheckoutForm
                     getDates={showPaymentModal}
                     price={listing?.price}
                     bookings={listing?.bookings}
                  />
               </Flex>
            </InnerPageContent>
         </Container>
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
   padding-top: 1.5rem;
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
export default HomeDetail
