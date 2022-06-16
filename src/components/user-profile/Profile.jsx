import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import Flex from '../UI/ui-for-positions/Flex'
import UserCard from './UserCard'
import ProjectTabs from '../UI/tabs/ProjectTabs'
import media from '../../utils/helpers/media'
import { BreadCrumbs } from '../UI/breadcrumbs/BreadCrumbs'

const Profile = () => {
   const pathsArray = [
      {
         path: '/main',
         name: 'main',
      },
      {
         path: '/main/regions',
         name: 'Profile',
      },
   ]
   return (
      <WrapperContainer>
         <BreadCrumbs pathsArray={pathsArray} />
         <UserProfile>Profile</UserProfile>
         <ContentWrapper>
            <UserCard />
            <ContainerList>
               <ProjectTabs
                  firstPath="/profile/bookings"
                  secondPath="/profile/my-announcements"
               />
               <WrapperCards>
                  <Outlet />
               </WrapperCards>
            </ContainerList>
         </ContentWrapper>
      </WrapperContainer>
   )
}
const WrapperCards = styled(Flex)`
   width: 100%;
   gap: 20px;
   flex-wrap: wrap;
   @media (max-width: 769px) {
      justify-content: center;
      gap: 10px;
   }
`
const UserProfile = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   padding-top: 30px;
   text-transform: uppercase;
   color: #363636;
   ${media.tablet`
      margin-bottom:20px;
   `}
`
const WrapperContainer = styled.div`
   max-width: 1340px;
   width: 100%;
   padding: 10px 10px 0 40px;
   margin: 0 auto;
   ${media.tablet`
      padding:20px;
   `}
   ${media.mobile`
      padding:10px;
   `}
`
const ContentWrapper = styled.div`
   width: 100%;
   display: flex;
   gap: 50px;
   ${media.desktop`
   flex-direction:column;
   justify-content:center;
   `}
`
const ContainerList = styled.div`
   max-width: 850px;
   width: 100%;
   padding-bottom: 8rem;
`

export default Profile
