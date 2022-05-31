import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import media from '../../../utils/helpers/media'
import HeaderMenu from '../header-menu/HeaderMenu'
import HeaderContentMain from './HeaderContent/HeaderContentMain'

const Header = ({ showSignInWithGoogle }) => {
   const [showMenu, setShowMenu] = useState(false)
   const [headerBackground, setHeaderBckground] = useState(false)
   const { isAuthorized } = useSelector((state) => state.auth)

   const showMenuHandler = () => setShowMenu(true)

   const hideMenuHandler = () => setShowMenu(false)
   window.addEventListener('scroll', () => {
      if (
         document.body.scrollTop > 50 ||
         document.documentElement.scrollTop > 50
      ) {
         setHeaderBckground(true)
      } else {
         setHeaderBckground(false)
      }
   })

   return (
      <HeaderStyled headerBackground={headerBackground}>
         <GlobalStyle />
         <HeaderMenu
            showMenu={showMenu}
            hideMenuHandler={hideMenuHandler}
            isAuthorized={isAuthorized}
            showSignInWithGoogle={showSignInWithGoogle}
         />
         <Flex width="100%" justify="space-between" align="center">
            <HeaderContentMain
               headerStyle={headerBackground}
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
   padding: 15px 60px;
   position: fixed;
   transition: background 0.3s;
   background: ${({ headerBackground }) =>
      headerBackground ? '#ffffff' : 'none'};

   box-shadow: ${({ headerBackground }) =>
      headerBackground ? '0 3px 5px rgba(57, 63, 72, 0.3)' : ''};
   z-index: 11;
   .btn {
      ${media.tablet`
      width:100px;
      margin-right:20px;
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
