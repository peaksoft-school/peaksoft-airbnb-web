import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Notification from './components/UI/notification/Notification'
import AdminRoutes from './routes/AdminRoutes'
import UserRoutes from './routes/UserRoutes'
import { KEY_AUTH } from './utils/constants/general'
import { saveToLocalStorage } from './utils/helpers/general'

function App() {
   const { user, token, isAuthorized, role } = useSelector(
      (state) => state.auth
   )
   useEffect(() => {
      saveToLocalStorage(KEY_AUTH, { token, isAuthorized, role, user })
   }, [isAuthorized, token, role])
   return (
      <div>
         <Notification />
         <UserRoutes />
         <AdminRoutes />
      </div>
   )
}

export default App
