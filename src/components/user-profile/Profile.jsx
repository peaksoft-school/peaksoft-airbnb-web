import styled from 'styled-components'
import Flex from '../UI/ui-for-positions/Flex'
import UserCart from './UserCart'
import ProfileList from './ProfileList'
import ProfileTabs from './ProfileTabs'

const Profile = () => {
   const data = [
      {
         Image: [],
         text: 'hdgfhjgfhdBeautiful and pictures fhgfg ghfghffffffffffh thffytftyfy',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
      },
      {
         Image: [],
         text: 'hdgfhjgfhdBeautiful and pictures fhgfg ghfghffffffffffh thffytftyfy',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
      },
      {
         Image: [],
         text: 'hdgfhjgfhdBeautiful and pictures fhgfg ghfghffffffffffh thffytftyfy',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
      },
      {
         Image: [],
         text: 'hdgfhjgfhdBeautiful and pictures fhgfg ghfghffffffffffh thffytftyfy',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
      },
      {
         Image: [],
         text: 'hdgfhjgfhdBeautiful and pictures fhgfg ghfghffffffffffh thffytftyfy',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
      },
      {
         Image: [],
         text: 'hdgfhjgfhdBeautiful and pictures fhgfg ghfghffffffffffh thffytftyfy',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
      },
      {
         Image: [],
         text: 'hdgfhjgfhdBeautiful and pictures fhgfg ghfghffffffffffh thffytftyfy',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
      },
      {
         Image: [],
         text: 'hdgfhjgfhdBeautiful and pictures fhgfg ghfghffffffffffh thffytftyfy',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
      },
      {
         Image: [],
         text: 'hdgfhjgfhdBeautiful and pictures fhgfg ghfghffffffffffh thffytftyfy',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
      },
   ]
   return (
      <WrapperContainer>
         <UserProfile>Profile</UserProfile>
         <Flex gap="50px">
            <UserCart />
            <Flex>
               <ContainerList>
                  <ProfileTabs />
                  <Flex
                     width="100%"
                     justify="space-around"
                     gap="20px"
                     wrap="wrap"
                  >
                     {data.map((el) => (
                        <ProfileList
                           width="260px"
                           images={el.Image}
                           isViewed
                           day={el.day}
                           text={el.text}
                           address={el.address}
                           title={el.title}
                           starRange={el.starRange}
                           guest={el.guest}
                        />
                     ))}
                  </Flex>
               </ContainerList>
            </Flex>
         </Flex>
      </WrapperContainer>
   )
}

const UserProfile = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   /* line-height: 24px; */
   text-transform: uppercase;
   color: #363636;
`
const WrapperContainer = styled.div`
   max-width: 1240px;
   width: 100%;
   margin: 0 auto;
`
const ContainerList = styled.div`
   /* width: 820px; */
`
export default Profile
