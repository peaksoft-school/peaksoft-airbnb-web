import styled from 'styled-components'
import Avatar from '@mui/material/Avatar'
import Text from '../../../components/UI/typography/Text'
import Title from '../../../components/UI/typography/Title'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import media from '../../../utils/helpers/media'
import ReplaceImages from '../../../components/UI/replace-image/ReplaceImages'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneListing } from '../../../store/listingSlice'
import { useParams, useSearchParams } from 'react-router-dom'
import Loader from '../../../components/UI/loader/Loader'
import Checkout from '../../../components/checkout-form/Checkout'
import RatingChart from '../../../components/UI/rating-chart/RatingChart'
import BookForm from '../../../components/checkout-form/BookForm'
import { bookingListing } from '../../../store/bookingSlice'

const HomeDetail = () => {
   const params = useParams()
   const [searchParams, setSearchParams] = useSearchParams()
   const valueParams = searchParams.get('payment')
   const dispatch = useDispatch()
   const { listing, status, isLoading } = useSelector((state) => state.listing)

   useEffect(() => {
      dispatch(getOneListing(params.house))
   }, [])

   const showPaymentModal = (date) => {
      setSearchParams({ payment: 'true' })
      dispatch(bookingListing({ date, id: params.house }))
      console.log(date)
   }
   const hidePaymentModal = () => setSearchParams('')

   return isLoading ? (
      <Loader />
   ) : (
      <Wrapper>
         <BookForm isVisible={valueParams} onClose={hidePaymentModal} />
         <Flex align="center" gap="6px">
            <Text size="17">Announcement</Text>
            <Title>/</Title>
            <Title>Name</Title>
         </Flex>
         <Flex margin="30px 0 30px 0">
            <Title size="20px">NAME</Title>
         </Flex>
         <Container>
            <LeftContent>
               {status === 'success' && (
                  <ReplaceImages dataSlider={listing.images} />
               )}
            </LeftContent>
            <RightContent>
               <Flex direction="column">
                  <Flex gap="14px">
                     <Tag>{listing.type}</Tag>
                     <Tag>{listing.maxNumberOfGuests} Guests</Tag>
                  </Flex>
                  <Flex direction="column" margin="8px 0 30px 0" gap="20px">
                     <Flex direction="column" gap="6px" margin="15px 0 20px 0">
                        <Title color="#000000" size="20px">
                           {listing.title}
                        </Title>
                        <Text>{listing.address}</Text>
                     </Flex>
                     <Text color="#363636">{listing.description}</Text>
                  </Flex>
                  {status === 'success' && (
                     <Flex gap="16px" margin="32px 0 0 0 " align="center">
                        <Avatar
                           src={(listing?.user && listing.user.avatar) || ''}
                        />
                        <Flex direction="column">
                           <Title color="#000000">
                              {listing?.user && listing.user.name}
                           </Title>
                           <Text>
                              {(listing?.user && listing.user.email) || ''}
                           </Text>
                        </Flex>
                     </Flex>
                  )}
               </Flex>
               <Flex margin="30px 0 0 0">
                  <Checkout onClick={showPaymentModal} price={listing.price} />
               </Flex>
               <Flex margin="220px 0 0 0">
                  <RatingChart />
               </Flex>
            </RightContent>
         </Container>
      </Wrapper>
   )
}
const LeftContent = styled(Flex)`
   width: 50%;
   ${media.desktop`
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
   ${media.mobile`
   padding:0.5rem;
  
   `}

   .btn {
      ${media.tablet`
      max-width: 167px;
      width: 100%;
       padding:8px 10px;
   `}
   }
`
const Tag = styled.span`
   background: #fff0f6;
   border: 1px solid #ffcbe0;
   padding: 6px 8px;
   font-family: 'Inter';
`

export default HomeDetail
