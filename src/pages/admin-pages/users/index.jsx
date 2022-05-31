import { useState } from 'react'
import UsersTable from './UsersTable'

const users = [
   {
      id: 1,
      name: 'Daniar Almazbekov',
      contact: 'daniar@gmail.com',
      booking: 2,
      announcement: 4,
   },
   {
      id: 2,
      name: 'Daniar Almazbekov',
      contact: 'daniar@gmail.com',
      booking: 2,
      announcement: 5,
   },
   {
      id: 3,
      name: 'Daniar Almazbekov',
      contact: 'daniar@gmail.com',
      booking: 2,
      announcement: 4,
   },
   {
      id: 4,
      name: 'Daniar Almazbekov',
      contact: 'daniar@gmail.com',
      booking: 2,
      announcement: 4,
   },
   {
      id: 5,
      name: 'Almazbekov Daniar Almazbekovich',
      contact: 'daniar@gmail.com',
      booking: 2,
      announcement: 4,
   },
]

const Users = () => {
   const [usersData, setUsersData] = useState(users)

   const deleteChangeHandler = (id) => {
      setUsersData(usersData.filter((el) => el.id !== id))
   }
   return <UsersTable users={usersData} delete={deleteChangeHandler} />
}

export default Users
