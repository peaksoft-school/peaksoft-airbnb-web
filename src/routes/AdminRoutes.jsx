import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import AdminLayout from '../layout/admin-layout'
import { ADMIN_ROUTES } from '../utils/constants/routes'
import ProtectedRoute from './ProtectedRoute'

const Announcement = React.lazy(
   () => import('../pages/admin-pages/announcement')
)
const AnnouncementDetail = React.lazy(
   () => import('../pages/admin-pages/announcement-detail')
)
const Users = React.lazy(() => import('../pages/admin-pages/users'))
const UserDetail = React.lazy(() => import('../pages/admin-pages/user-detail'))
const UserHouseDetail = React.lazy(
   () => import('../pages/admin-pages/user-home-details')
)
const EditHouse = React.lazy(() => import('../pages/admin-pages/edit-house'))
const AllHousing = React.lazy(() => import('../pages/admin-pages/all-housing'))

const AdminRoutes = () => {
   const { auth, role } = useSelector((state) => state.auth)
   const {
      ANNOUNCEMENT,
      ANNOUNCEMENT_NAME,
      USERS,
      USER,
      USER_HOUSE,
      USER_HOUSE_EDIT,
      ALL_HOUSING,
   } = ADMIN_ROUTES
   return (
      <Routes>
         <Route element={<AdminLayout />}>
            <Route
               element={<ProtectedRoute isAllowed={auth && role === 'admin'} />}
            >
               <Route path={ANNOUNCEMENT.path} element={<Announcement />} />
               <Route
                  path={ANNOUNCEMENT_NAME.path}
                  element={<AnnouncementDetail />}
               />
               <Route path={USERS.path} element={<Users />} />
               <Route path={USER.path} element={<UserDetail />} />
               <Route path={USER_HOUSE.path} element={<UserHouseDetail />} />
               <Route path={USER_HOUSE_EDIT.path} element={<EditHouse />} />
               <Route path={ALL_HOUSING.path} element={<AllHousing />} />
            </Route>
         </Route>
      </Routes>
   )
}

export default AdminRoutes
