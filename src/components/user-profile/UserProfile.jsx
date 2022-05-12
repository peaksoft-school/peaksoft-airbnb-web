import styled from 'styled-components'
import Flex from '../UI/ui-for-positions/Flex'
import UserCart from './UserCart'
import CustomizedTabs from './Tab'

const UserProfile = () => {
   return (
      <>
         <Profile>Profile</Profile>
         <Flex gap="50px">
            <UserCart />
            <CustomizedTabs />
         </Flex>
      </>
   )
}

const Profile = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   /* line-height: 24px; */
   text-transform: uppercase;
   color: #363636;
`

export default UserProfile
