/* eslint-disable max-len */
import { useEffect } from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar'
import Text from '../../../components/UI/typography/Text'
import Title from '../../../components/UI/typography/Title'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import Button from '../../../components/UI/buttons/Button'
import media from '../../../utils/helpers/media'
import ReplaceImages from '../../../components/UI/replace-image/ReplaceImages'
import Rejects from './Reject'
import Loader from '../../../components/UI/loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getOneListing } from '../../../store/listingSlice'
import { useParams, useSearchParams } from 'react-router-dom'
import { showSuccessMessage } from '../../../components/UI/notification/Notification'

const AnnouncementDetail = () => {
   const params = useParams()
   const [searchParams, setSearchParams] = useSearchParams()
   const valueParams = searchParams.get('rejects')
   const dispatch = useDispatch()
   const { listing, isLoading } = useSelector((state) => state.listing)

   useEffect(() => {
      dispatch(getOneListing(params.name))
   }, [])

   const showRejectModal = () => setSearchParams({ rejects: 'true' })

   const hideRejectModal = () => setSearchParams('')

   return isLoading ? (
      <Loader />
   ) : (
      <>
         <Rejects
            isVisible={valueParams}
            onClose={hideRejectModal}
            cancelHandler={hideRejectModal}
         />
         <Wrapper>
            <Flex align="center" gap="6px" margin="86px 0 0 0 ">
               <Text size="17">Announcement</Text>
               <Title>/</Title>
               <Title>Name</Title>
            </Flex>
            <Flex margin="30px 0 30px 0">
               <Title size="20px">NAME</Title>
            </Flex>
            <Container>
               <LeftContent>
                  <ReplaceImages dataSlider={listing.images} />
               </LeftContent>
               <RightContent>
                  <Flex direction="column">
                     <Flex gap="14px">
                        <Tag>{listing.type}</Tag>
                        <Tag>{listing.maxNumberOfGuests}</Tag>
                     </Flex>
                     <Flex direction="column" margin="8px" gap="20px">
                        <Flex direction="column" gap="10px">
                           <Title> {listing.title}</Title>
                           <Text>{listing.address}</Text>
                        </Flex>
                        <Text color="#363636">{listing.description}</Text>
                     </Flex>
                     <Flex gap="16px" margin="32px 0 0 0 " align="center">
                        <Avatar
                           src={(listing?.user && listing.user.avatar) || ''}
                        />
                        <Flex direction="column">
                           <Title> {listing?.user && listing.user.name}</Title>
                           <Text>
                              {(listing?.user && listing.user.email) || ''}
                           </Text>
                        </Flex>
                     </Flex>
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
                           onClick={() => {
                              showSuccessMessage({
                                 message: 'Moderation successfully passed',
                                 title: 'Accepted :)',
                              })
                           }}
                        >
                           ACCEPT
                        </Button>
                     </Flex>
                  </Flex>
               </RightContent>
            </Container>
         </Wrapper>
      </>
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
const Tag = styled.span`
   background: #fff0f6;
   border: 1px solid #ffcbe0;
   padding: 6px 8px;
   font-family: 'Inter';
`

export default AnnouncementDetail
