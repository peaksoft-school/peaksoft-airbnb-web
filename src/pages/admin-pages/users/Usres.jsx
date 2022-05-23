import styled from 'styled-components'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import Title from '../../../components/UI/typography/Title'

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

   return (
      <Container>
         <Flex width="95%" margin="0 auto">
            <Title uppercase>Users</Title>
         </Flex>
         <div>
            <Flex
               background="#646464"
               width="95%"
               height="37px"
               padding="10px"
               margin="0 auto"
            >
               <NumberHeader>№</NumberHeader>
               <NameHeader>Name</NameHeader>
               <ContactHeader>Contact</ContactHeader>
               <BookingHeader>Booking</BookingHeader>
               <AnnouncementHeader>Announcement</AnnouncementHeader>
               <ActionsHeader>Action</ActionsHeader>
            </Flex>
            {users.map((user, index) => {
               return (
                  <AllUsers>
                     <h4>{index + 1}</h4>
                     <h4>{user.name}</h4>
                     <h4>{user.contact}</h4>
                     <h4>{user.booking}</h4>
                     <h4>{user.announcement}</h4>
                     <h4>dk</h4>
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
`

const NumberHeader = styled.h4`
   max-width: 55px;
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
   color: #ffffff;
`

const NameHeader = styled.h4`
   max-width: 380px;
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
   color: #ffffff;
`

const ContactHeader = styled.h4`
   max-width: 380px;
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
   color: #ffffff;
`

const BookingHeader = styled.h4`
   max-width: 150px;
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
   color: #ffffff;
`

const AnnouncementHeader = styled.h4`
   max-width: 100px;
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
   color: #ffffff;
`

const ActionsHeader = styled.h4`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
   color: #ffffff;
`

const AllUsers = styled.div`
   display: flex;
   width: 95%;
   justify-content: space-between;
   margin: 0 auto;
   height: 37px;
   padding: 10px;
`

export default Users
