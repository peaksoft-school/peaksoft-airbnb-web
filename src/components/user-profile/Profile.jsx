import styled from 'styled-components'
import Flex from '../UI/ui-for-positions/Flex'
import UserCart from './UserCart'
import ProfileTabs from './ProfileTabs'
import ProfileList from './ProfileList'
import media from '../../utils/helpers/media'

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
         <ContentWrapper>
            <UserCart />
            <ContainerList>
               <ProfileTabs />
               <Flex width="100%" gap="20px" wrap="wrap">
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
   margin: 0 auto;
   ${media.tablet`
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
   max-width: 820px;
   padding-bottom: 8rem;
`
// const VectorStyle = styled.div`
//    width: 24px;
//    height: 24px;
//    background: #f3f3f3;
// `
export default Profile
