import React from 'react'
import styled from 'styled-components'
import Button from '../../../../components/UI/buttons/Button'
import LogoAirBnb from '../../../../components/UI/Logo/LogoAirBnb'
import Flex from '../../../../components/UI/ui-for-positions/Flex'
import ContentForProfile from '../../content-for-profile/ContentForProfile'
import Nav from '../../header-menu/Nav'
import media from '../../../../utils/helpers/media'
import NavBurger from '../../header-menu/NavBurger'

const HeaderContentMain = ({
   isAuthorized,
   showSignInWithGoogle,
   showMenuHandler,
}) => {
   const loginHandler = () => {
      showSignInWithGoogle()
   }
   return (
      <Flex justify="space-between" align="center" width="100%">
         <Nav />
         <Content isAuthorized={isAuthorized}>
            <LogoAirBnb />
         </Content>
         <Flex align="center">
            {!isAuthorized && (
               <Button onClick={loginHandler} className="btn" width="200px">
                  JOIN AS
               </Button>
            )}
            <ContentForProfile isAuthorized={isAuthorized} />
            <NavBurger showMenuHandler={showMenuHandler} />
         </Flex>
      </Flex>
   )
}

const Content = styled.div`
   transform: ${({ isAuthorized }) =>
      isAuthorized ? 'translate(-70px)' : 'translate(-10px)'};
   ${media.tablet`
  transform: translate(0px);
      
  `}
`

export default HeaderContentMain
