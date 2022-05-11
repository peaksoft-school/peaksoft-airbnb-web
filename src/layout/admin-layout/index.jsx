import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header/Header'

const AdminLayout = () => {
   return (
      <>
         <Header />
         <Main>
            <Outlet />
         </Main>
      </>
   )
}
const Main = styled.main`
   min-height: 80vh;
`

export default AdminLayout
