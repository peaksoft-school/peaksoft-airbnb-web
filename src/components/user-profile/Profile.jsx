import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import Flex from '../UI/ui-for-positions/Flex'
import UserCard from './UserCard'
import ProfileTabs from './ProfileTabs'
import media from '../../utils/helpers/media'

const Profile = () => {
   return (
      <WrapperContainer>
         <UserProfile>Profile</UserProfile>
         <ContentWrapper>
            <UserCard />
            <ContainerList>
               <ProfileTabs />
               <Flex width="100%" gap="20px" wrap="wrap">
                  <Outlet />
               </Flex>
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
   padding-bottom: 8rem;
`

export default Profile
