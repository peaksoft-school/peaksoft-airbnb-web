import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from '../layout/admin-layout'
import { ROLES } from '../utils/constants/general'
import { ADMIN_ROUTES } from '../utils/constants/routes'
import ProtectedRoute from './ProtectedRoute'
import Bookings from '../pages/admin-pages/user-detail/Bookings'
import MyAnnouncement from '../pages/admin-pages/user-detail/MyAnouncement'

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
const AllHousing = React.lazy(() => import('../pages/admin-pages/all-housing'))

const AdminRoutes = () => {
   const { isAuthorized, role } = useSelector((state) => state.auth)
   const {
      ANNOUNCEMENT,
      ANNOUNCEMENT_NAME,
      USERS,
      USER,
      USER_HOUSE,
      USER_TABS,
      ALL_HOUSING,
   } = ADMIN_ROUTES
   return (
      <Routes>
         <Route element={<AdminLayout />}>
            <Route
               element={
                  <ProtectedRoute
                     isAllowed={isAuthorized && role === ROLES.ADMIN}
                  />
               }
            >
               <Route path={ANNOUNCEMENT.path} element={<Announcement />} />
               <Route
                  path={ANNOUNCEMENT_NAME.path}
                  element={<AnnouncementDetail />}
               />
               <Route path={USERS.path} element={<Users />} />
               <Route path={USER.path} element={<UserDetail />}>
                  <Route
                     path={USER.path}
                     element={<Navigate to={USER_TABS.USER_BOOKINGS.path} />}
                  />
                  <Route
                     path={USER_TABS.USER_BOOKINGS.path}
                     element={<Bookings />}
                  />
                  <Route
                     path={USER_TABS.USER_MY_ANNOUNCEMENTS.path}
                     element={<MyAnnouncement />}
                  />
               </Route>
               <Route path={USER_HOUSE.path} element={<UserHouseDetail />} />
               <Route path={ALL_HOUSING.path} element={<AllHousing />} />
            </Route>
         </Route>
      </Routes>
   )
}

export default AdminRoutes
