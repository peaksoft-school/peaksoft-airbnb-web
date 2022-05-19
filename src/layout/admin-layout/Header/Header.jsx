import React from 'react'
import styled from 'styled-components'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import Nav from './Nav'
import ContentForProfile from './ContentForProfile'
import LogoAirBnb from '../../../components/UI/Logo/LogoAirBnb'
import media from '../../../utils/helpers/media'

const Header = () => {
   return (
      <HeaderStyled>
         <Flex width="100%" justify="space-between" align="center">
            <Div gap="83px" align="center" width="100%">
               <LogoAirBnb />
               <Nav />
            </Div>
            <ContentForProfile />
         </Flex>
      </HeaderStyled>
   )
}
const HeaderStyled = styled.header`
   width: 100%;
   padding: 15px 40px;
   background-color: #0b0b0b;
   position: fixed;
   z-index: 3;
   ${media.tablet`
      padding:10px 30px;
   `}
   ${media.mobile`
      padding:10px 16px;
   `}
`

const Div = styled(Flex)`
   ${media.tablet`
   justify-content: space-between;
   `}
`
export default Header
