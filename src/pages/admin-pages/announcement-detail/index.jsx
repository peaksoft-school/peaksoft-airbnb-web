/* eslint-disable max-len */
import { useEffect } from 'react'
import styled from 'styled-components'
import Title from '../../../components/UI/typography/Title'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import Button from '../../../components/UI/buttons/Button'
import media from '../../../utils/helpers/media'
import Loader from '../../../components/UI/loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import {
   getOneListing,
   acceptListing,
   viewedListing,
   listingActions,
} from '../../../store/listingSlice'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import {
   showSuccessMessage,
   showErrorMessage,
} from '../../../components/UI/notification/Notification'
import { REJECT_LISTING } from '../../../utils/constants/general'
import InnerPageContent from '../../../components/inner-page-content/InnerPageContent'
import { BreadCrumbs } from '../../../components/UI/breadcrumbs/BreadCrumbs'

const AnnouncementDetail = () => {
   const params = useParams()
   const navigate = useNavigate()
   const [, setSearchParams] = useSearchParams()
   const dispatch = useDispatch()
   const { listing, isLoading } = useSelector((state) => state.listing)
   const id = params.name

   useEffect(() => {
      dispatch(getOneListing(id))
      if (!listing?.isViewed) {
         dispatch(viewedListing(id))
      }
      return () => {
         dispatch(listingActions.clearListing())
      }
   }, [])
   const acceptListingHandler = async () => {
      try {
         await dispatch(acceptListing(id)).unwrap()
         showSuccessMessage({
            title: 'Accepted :)',
            message: 'Moderation successfully passed',
         })
         navigate('/announcement')
      } catch (e) {
         showErrorMessage({
            title: 'Error',
            message: 'Something went wrong',
         })
      }
   }

   const showRejectModal = () => setSearchParams({ [REJECT_LISTING]: id })

   const pathsArray = [
      {
         path: '/announcement',
         name: 'Announcements',
      },
      {
         path: '/announcements/detail',
         name: listing?.type,
      },
   ]

   return isLoading ? (
      <Loader />
   ) : (
      <Wrapper>
         <Flex align="center" gap="6px" margin="86px 0 0 0 ">
            <BreadCrumbs pathsArray={pathsArray} />
         </Flex>
         <Flex margin="30px 0 30px 0">
            <Title size="20px">NAME</Title>
         </Flex>
         <Container>
            <InnerPageContent listing={listing}>
               <Flex gap="10px" margin="40px 0 40px 0 " align="center">
                  <Button
                     padding="8px 16px"
                     className="btn"
                     width="196px"
                     outline
                     onClick={showRejectModal}
                  >
                     REJECT
                  </Button>

                  <Button
                     width="196px"
                     className="btn"
                     onClick={acceptListingHandler}
                  >
                     ACCEPT
                  </Button>
               </Flex>
            </InnerPageContent>
         </Container>
      </Wrapper>
   )
}

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
   width: 100%;
   margin: 0 auto;
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

export default AnnouncementDetail
