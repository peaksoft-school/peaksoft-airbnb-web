import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ isAllowed, redirectPath = '/landing', children }) => {
   if (!isAllowed) {
      return <Navigate to={redirectPath} replace />
   }
   return children || <Outlet />
}
export default ProtectedRoute
