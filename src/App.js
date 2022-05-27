import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AdminRoutes from './routes/AdminRoutes'
import UserRoutes from './routes/UserRoutes'
import { KEY_AUTH } from './utils/constants/general'
import { saveToLocalStorage } from './utils/helpers/general'
import { usePosition } from './hooks/usePosition'

function App() {
   const { latitude, longitude, error } = usePosition()
   console.log(longitude, latitude, error)
   const { user, token, isAuthorized, role } = useSelector(
      (state) => state.auth
   )
   useEffect(() => {
      saveToLocalStorage(KEY_AUTH, { token, isAuthorized, role, user })
   }, [isAuthorized, token, role])
   return (
      <div>
         <UserRoutes />
         <AdminRoutes />
      </div>
   )
}

export default App
