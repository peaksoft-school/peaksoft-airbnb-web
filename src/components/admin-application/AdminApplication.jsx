import styled from 'styled-components'
// import Title from '../UI/typography/Title'
import Flex from '../UI/ui-for-positions/Flex'
import ApplicationList from './ApplicationList'
// import UserCart from './UserCart'
// import ProfileTabs from './ProfileTabs'
// import ProfileList from './ProfileList'
// import ProfileBackdrop from './ProfileBackdrop'

const Admin = () => {
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
         <TitleApplication>Application</TitleApplication>
         <Flex>
            <ContainerList>
               <Flex width="100%" gap="20px" wrap="wrap">
                  {data.map((el) => (
                     <ApplicationList
                        width="260px"
                        images={el.Image}
                        isViewed={false}
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
      </WrapperContainer>
   )
}
const TitleApplication = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   margin: 25px;
   text-transform: uppercase;
   color: #000000;
`
const WrapperContainer = styled.div`
   max-width: 1410px;
   width: 100%;
   margin: 0 auto;
`
const ContainerList = styled.div`
   max-width: 1240px;
   width: 100%;
   padding-bottom: 8rem;
`
// const VectorStyle = styled.div`
//    width: 24px;
//    height: 24px;
//    background: #F3F3F3;
// `
export default Admin
