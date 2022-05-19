import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AdminRoutes from './routes/AdminRoutes'
import UserRoutes from './routes/UserRoutes'
import { KEY_AUTH } from './utils/constants/general'
import { saveToLocalStorage } from './utils/helpers/general'
import InputSearch from './components/search-bar'

function App() {
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
         <InputSearch />
      </div>
   )
}

export default App
