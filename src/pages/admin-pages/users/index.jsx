import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminUsersPanel } from '../../../store/adminUsersSlice'

import UsersTable from './UsersTable'

const Users = () => {
   const { users } = useSelector((state) => state.users)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getAdminUsersPanel())
   }, [])

   return <UsersTable users={users} />
}

export default Users
