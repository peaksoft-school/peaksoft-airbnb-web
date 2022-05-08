import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import media from '../../../utils/helpers/media'
import HeaderUserContent from './HeaderContent/HeaderUserContent'
import HeaderMenu from '../header-menu/HeaderMenu'

const Header = () => {
   const [showMenu, setShowMenu] = useState(false)

   const showMenuHamdler = () => setShowMenu(true)

   const hideMenuHandler = () => setShowMenu(false)

   const auth = true

   return (
      <HeaderStyled>
         <GlobalStyle />
         <HeaderMenu
            showMenu={showMenu}
            hideMenuHandler={hideMenuHandler}
            auth={auth}
         />
         <Flex width="100%" justify="space-between" align="center">
            <HeaderUserContent showMenuHamdler={showMenuHamdler} auth={auth} />
         </Flex>
      </HeaderStyled>
   )
}
const HeaderStyled = styled.header`
   width: 100%;
   padding: 20px 60px;
   position: fixed;
   background-color: #ffffff;
   .btn {
      ${media.tablet`
      display:none;      
   `}
   }
   ${media.tablet`
      padding:15px 30px;
   `}
   ${media.mobile`
      padding:15px 16px;
   `}
`
const GlobalStyle = createGlobalStyle`
    a{
        text-decoration: none;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
        transition: 0.1s;
        :hover{
           color:#f5a321;
        }
    }
`
export default Header
