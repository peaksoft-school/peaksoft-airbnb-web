import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import Nav from './Nav'
import ContentForProfile from './ContentForProfile'
import LogoAirBnb from '../../../components/UI/Logo/LogoAirBnb'
import media from '../../../utils/helpers/media'

const Header = () => {
   const user = false

   return (
      <HeaderStyled>
         <GlobalStyle />
         <Flex width="100%" justify="space-between" align="center">
            <Flex
               gap="83px"
               align="center"
               justifyTab="space-between"
               width="100%"
            >
               <LogoAirBnb />
               <Nav user={user} />
            </Flex>
            <ContentForProfile user={user} />
         </Flex>
      </HeaderStyled>
   )
}
const HeaderStyled = styled.header`
   width: 100%;
   padding: 15px 40px;
   background-color: #0b0b0b;
   position: fixed;
   ${media.tablet`
      padding:20px 30px;
   `}
   ${media.mobile`
      padding:20px 16px;
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
           color:#FF4B4B;
        }
    }
`
export default Header
