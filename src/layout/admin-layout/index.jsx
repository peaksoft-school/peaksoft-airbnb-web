import React from 'react'
import styled from 'styled-components'
import Header from './Header/Header'

const AdminLayout = (props) => {
   return (
      <>
         <Header />
         <Main>{props.children}</Main>
      </>
   )
}
const Main = styled.main`
   min-height: 80vh;
`

export default AdminLayout
