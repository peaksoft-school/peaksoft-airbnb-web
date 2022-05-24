import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { useSelector } from 'react-redux'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import media from '../../../utils/helpers/media'
import HeaderUserContent from './HeaderContent/HeaderUserContent'
import HeaderMenu from '../header-menu/HeaderMenu'

const Header = ({ showSignInWithGoogle }) => {
   const { isAuthorized } = useSelector((state) => state.auth)
   const [showMenu, setShowMenu] = useState(false)

   const showMenuHandler = () => setShowMenu(true)

   const hideMenuHandler = () => setShowMenu(false)

   return (
      <HeaderStyled>
         <GlobalStyle />
         <HeaderMenu
            showMenu={showMenu}
            hideMenuHandler={hideMenuHandler}
            isAuthorized={isAuthorized}
            showSignInWithGoogle={showSignInWithGoogle}
         />
         <Flex width="100%" justify="space-between" align="center">
            <HeaderUserContent
               showSignInWithGoogle={showSignInWithGoogle}
               showMenuHandler={showMenuHandler}
               isAuthorized={isAuthorized}
            />
         </Flex>
      </HeaderStyled>
   )
}
const HeaderStyled = styled.header`
   width: 100%;
   padding: 13px 60px;
   /* position: fixed; */
   background-color: #ffffff;
   box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
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
