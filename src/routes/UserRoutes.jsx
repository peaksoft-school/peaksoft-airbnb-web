import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { USER_ROUTES } from '../utils/constants/routes'
import Main from '../pages/user-pages/main'
import ProtectedRoute from './ProtectedRoute'
import UserLayout from '../layout/user-layout'

const Region = React.lazy(() => import('../pages/user-pages/region'))
const HomeDetail = React.lazy(() => import('../pages/user-pages/home-detail'))
const Profile = React.lazy(() => import('../pages/user-pages/profile'))
const SubmitAnAd = React.lazy(() => import('../pages/user-pages/submit-an-ad'))

const UserRoutes = () => {
   const { auth, role } = useSelector((state) => state.auth)

   const { INDEX, MAIN, REGION, HOUSE, PROFILE, SUBMIT_AN_AD } = USER_ROUTES
   return (
      <Routes>
         <Route element={<UserLayout />}>
            <Route path={INDEX.path} element={<Navigate to={MAIN.path} />} />
            <Route path={MAIN.path} element={<Main />} />
            <Route path={REGION.path} element={<Region />} />
            <Route path={HOUSE.path} element={<HomeDetail />} />
            <Route
               element={
                  <ProtectedRoute isAllowed={auth && role === 'wendor'} />
               }
            >
               <Route path={PROFILE.path} element={<Profile />} />
            </Route>
            <Route path={SUBMIT_AN_AD.path} element={<SubmitAnAd />} />
         </Route>
      </Routes>
   )
}

export default UserRoutes
