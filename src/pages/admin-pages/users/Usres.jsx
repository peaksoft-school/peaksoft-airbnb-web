import styled from 'styled-components'
import Title from '../../../components/UI/typography/Title'
import acitons from '../../../assets/icons/Action.svg'
import { useState } from 'react'
import media from '../../../utils/helpers/media'

const Users = () => {
   const users = [
      {
         id: 13,
         contact: 'daniar0@gmail.com',
         name: 'Daniar Almazbekov',
         booking: 4,
         announcement: 3,
      },
      {
         id: 17,
         contact: 'azamat@gmail.com',
         name: 'Zamirov Azamat',
         booking: 3,
         announcement: 7,
      },
      {
         id: 12,
         contact: 'alisher@gmail.com',
         name: 'Arstanov Alisher',
         booking: 6,
         announcement: 10,
      },
      {
         id: 8,
         contact: 'ariet@gmail.com',
         name: 'Saparov Ariet',
         booking: 8,
         announcement: 3,
      },
   ]

   const [userData, setUserData] = useState(users)

   const ActionsHandler = (id) => {
      setUserData(userData.filter((item) => item.id !== id))
   }
   console.log(userData)

   return (
      <Container>
         <Title size="20px" uppercase>
            Users
         </Title>
         <div>
            <Header>
               <NumberHeader>№</NumberHeader>
               <NameHeader>Name</NameHeader>
               <ContactHeader>Contact</ContactHeader>
               <BookingHeader>Booking</BookingHeader>
               <AnnouncementHeader>Announcement</AnnouncementHeader>
               <ActionsHeader>Action</ActionsHeader>
            </Header>
            {userData.map((user, index) => {
               return (
                  <AllUsers key={user.id}>
                     <Number>{index + 1}</Number>
                     <Name>{user.name}</Name>
                     <Contact>{user.contact}</Contact>
                     <Booking>{user.booking}</Booking>
                     <Announcement>{user.announcement}</Announcement>
                     <Actions onClick={() => ActionsHandler(user.id)}>
                        <img src={acitons} alt="actons" />
                     </Actions>
                  </AllUsers>
               )
            })}
         </div>
      </Container>
   )
}

const Container = styled.div`
   max-width: 1350px;
   width: 100%;
   margin: 0 auto;
   padding: 2.5rem;
`

const Header = styled.div`
   width: 1270px;
   background: #646464;
   display: flex;
   height: 37px;
   color: white;
   padding: 10px;
   ${media}
`

const NumberHeader = styled.h4`
   max-width: 55px;
   min-width: 20px;
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
`

const NameHeader = styled.h4`
   max-width: 380px;
   min-width: 210px;
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
`

const ContactHeader = styled.h4`
   max-width: 380px;
   min-width: 210px;
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
`

const BookingHeader = styled.h4`
   max-width: 170px;
   min-width: 90px;
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
`

const AnnouncementHeader = styled.h4`
   max-width: 220px;
   min-width: 130px;
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
`

const ActionsHeader = styled.h4`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
`

const AllUsers = styled.div`
   :hover {
      background: #d8d8d8;
   }
   display: flex;
   width: 1270px;
   min-width: 750px;
   margin: 0 auto;
   height: 54px;
   padding: 15.5px 10px 0 10px;
`

const Number = styled.h4`
   max-width: 55px;
   min-width: 20px;
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   color: #363636;
`

const Name = styled.h4`
   max-width: 380px;
   min-width: 210px;
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   color: #363636;
`

const Contact = styled.h4`
   max-width: 380px;
   min-width: 210px;
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   color: #363636;
`

const Booking = styled.h4`
   max-width: 170px;
   min-width: 90px;
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   color: #363636;
`

const Announcement = styled.h4`
   max-width: 230px;
   min-width: 130px;
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   color: #363636;
`

const Actions = styled.h4`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   color: #363636;
`

export default Users
