import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { USER_ROUTES } from '../utils/constants/routes'
import Main from '../pages/user-pages/main'
import ProtectedRoute from './ProtectedRoute'
import UserLayout from '../layout/user-layout'
import { ROLES } from '../utils/constants/general'
import Bookings from '../components/user-profile/Bookings'
import MyAnnouncements from '../components/user-profile/MyAnnouncement'

const Region = React.lazy(() => import('../pages/user-pages/region'))
const HomeDetail = React.lazy(() => import('../pages/user-pages/home-detail'))
const Profile = React.lazy(() => import('../pages/user-pages/profile'))
const SubmitAnAd = React.lazy(() => import('../pages/user-pages/submit-an-ad'))

const UserRoutes = () => {
   const { isAuthorized, role } = useSelector((state) => state.auth)

   const { INDEX, MAIN, REGION, HOUSE, PROFILE, SUBMIT_AN_AD, PROFILE_TABS } =
      USER_ROUTES
   return (
      <Routes>
         <Route element={<UserLayout />}>
            <Route
               element={
                  <ProtectedRoute
                     redirectPath="/announcement"
                     isAllowed={role !== ROLES.ADMIN}
                  />
               }
            >
               <Route path={INDEX.path} element={<Navigate to={MAIN.path} />} />
               <Route path={MAIN.path} element={<Main />} />
               <Route path={REGION.path} element={<Region />} />
               <Route path={HOUSE.path} element={<HomeDetail />} />
               <Route path={SUBMIT_AN_AD.path} element={<SubmitAnAd />} />
            </Route>
            <Route
               element={
                  <ProtectedRoute
                     isAllowed={isAuthorized && role === ROLES.WENDOR}
                  />
               }
            >
               <Route path={PROFILE.path} element={<Profile />}>
                  <Route
                     path={PROFILE.path}
                     element={
                        <Navigate to={PROFILE_TABS.PFOFILE_BOOKINGS.path} />
                     }
                  />
                  <Route
                     path={PROFILE_TABS.PFOFILE_BOOKINGS.path}
                     element={<Bookings />}
                  />
                  <Route
                     path={PROFILE_TABS.PROFILE_MY_ANNOUNCEMENTS.path}
                     element={<MyAnnouncements />}
                  />
               </Route>
            </Route>
         </Route>
      </Routes>
   )
}

export default UserRoutes
