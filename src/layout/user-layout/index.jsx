import React from 'react'
import styled from 'styled-components'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header-user/Header'
import HeaderMain from './header-main/Header'

const UserLayout = () => {
   const { pathname } = useLocation()
   return (
      <>
         {pathname === '/main' ? <HeaderMain /> : <Header />}
         <Main>
            <Outlet />
         </Main>
         <Footer />
      </>
   )
}
const Main = styled.main`
   min-height: 80vh;
`

export default UserLayout
