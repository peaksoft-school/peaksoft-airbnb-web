import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Notification from './components/UI/notification/Notification'
import AdminRoutes from './routes/AdminRoutes'
import UserRoutes from './routes/UserRoutes'
import { getRegions } from './store/regionSlice'
import { KEY_AUTH } from './utils/constants/general'
import { saveToLocalStorage } from './utils/helpers/general'

function App() {
   const dispatch = useDispatch()
   const { user, token, isAuthorized, role } = useSelector(
      (state) => state.auth
   )
   useEffect(() => {
      saveToLocalStorage(KEY_AUTH, { token, isAuthorized, role, user })
   }, [isAuthorized, token, role])
   useEffect(() => {
      dispatch(getRegions())
   }, [])
   return (
      <div>
         <UserRoutes />
         <AdminRoutes />
         <Notification />
      </div>
   )
}

export default App
