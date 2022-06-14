/* eslint-disable import/no-duplicates */
import styled from 'styled-components'
import { Outlet, useParams } from 'react-router-dom'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import AdminUserCard from './AdminUserCard'
import ProjectTabs from '../../../components/UI/tabs/ProjectTabs'
import media from '../../../utils/helpers/media'
import Text from '../../../components/UI/typography/Text'
import Title from '../../../components/UI/typography/Title'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSingleUser } from '../../../store/adminUsersSlice'

const Profile = () => {
   const { userId } = useParams()
   const { pathname } = useLocation()
   const { data: user } = useSelector((state) => state.users.user)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getSingleUser(userId))
   }, [])

   const visibleAllBlockedButton =
      pathname === `/users/${userId}/my-announcements`
   return (
      <WrapperContainer>
         <Flex align="center" gap="6px" margin="86px 0 0 0 ">
            <Text size="17">Users</Text>
            <Title>/</Title>
            <Title>{user?.user.name}</Title>
         </Flex>
         <UserProfile>{user?.user.name || 'LOADING...'} </UserProfile>
         <ContentWrapper>
            <AdminUserCard
               id={userId}
               user={user?.user}
               isAllAnnouncementsAreBlocked={user?.isAllAnnouncementsAreBlocked}
               visibleAllBlockedButton={visibleAllBlockedButton}
            />

            <ContainerList>
               <ProjectTabs
                  firstPath={`/users/${userId}/bookings`}
                  secondPath={`/users/${userId}/my-announcements`}
               />
               <ContainerListings>
                  <Outlet />
               </ContainerListings>
            </ContainerList>
         </ContentWrapper>
      </WrapperContainer>
   )
}

const UserProfile = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   padding-top: 30px;
   text-transform: uppercase;
   color: #363636;
`
const WrapperContainer = styled.div`
   max-width: 1500px;
   width: 100%;
   padding: 40px 0 0 40px;
   margin: 0 auto;
   ${media.tablet`
      padding:25px;
   `}
   ${media.mobile`
      padding:15px;
   `}
`
const ContentWrapper = styled.div`
   width: 100%;
   display: flex;
   gap: 30px;
   ${media.desktop`
   flex-direction:column;
   justify-content:center;
   `}
`
const ContainerList = styled.div`
   max-width: 1500px;
`
const ContainerListings = styled(Flex)`
   width: 100%;
   flex-wrap: wrap;
   gap: 15px;
   @media (max-width: 800px) {
      max-height: 100%;
   }
`

export default Profile
