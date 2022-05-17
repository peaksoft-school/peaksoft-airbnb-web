import styled from 'styled-components'
import Flex from '../UI/ui-for-positions/Flex'
import UserCart from './UserCart'
import ProfileTabs from './ProfileTabs'
import ProfileList from './ProfileList'
import media from '../../utils/helpers/media'

const Profile = () => {
   const data = [
      {
         Image: [
            {
               img: 'https://media.istockphoto.com/photos/beautiful-siding-house-view-from-backyard-picture-id480775603?k=20&m=480775603&s=612x612&w=0&h=FHBTUWXE8ZxMwTP_BfJ804G9j1nyByGaRTjDH3jknOQ=',
            },
         ],
         text: 'hdgfhjgfhdBeautiful and pictures fhgfg ghfghffffffffffh thffytftyfy',
         address: '12 Morris Ave, Toronto, ON, CA gfgjhjh',
         number: '46565465',
         title: '26',
         day: 'day',
         starRange: '3.6',
         guest: '3',
      },
      {
         Image: [
            {
               img: 'https://media.istockphoto.com/photos/new-home-with-a-freshly-mown-lawn-picture-id171363972?k=20&m=171363972&s=612x612&w=0&h=SQ-qVPVnGF4WNmhkaH5zidEXWk6Uvf1lOBbuNVEO15k=',
            },
         ],
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
