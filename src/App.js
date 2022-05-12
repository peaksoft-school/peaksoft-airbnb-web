import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import AdminRoutes from './routes/AdminRoutes'
import UserRoutes from './routes/UserRoutes'

function App() {
   const { user, token, auth, role } = useSelector((state) => state.auth)
   useEffect(() => {
      localStorage.setItem(
         '@users',
         JSON.stringify({ token, auth, role, user })
      )
   }, [auth, token, role])
   return (
      <div>
         <UserRoutes />
         <AdminRoutes />
      </div>
   )
}

export default App
