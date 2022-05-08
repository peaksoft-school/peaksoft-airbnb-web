import React from 'react'
import styled from 'styled-components'
import Button from '../../../../components/UI/buttons/Button'
import LogoAirBnb from '../../../../components/UI/Logo/LogoAirBnb'
import Flex from '../../../../components/UI/ui-for-positions/Flex'
import ContentForProfile from '../../content-for-profile/ContentForProfile'
import Nav from '../../header-menu/Nav'
import media from '../../../../utils/helpers/media'
import NavBurger from '../../header-menu/NavBurger'

const HeaderContentMain = ({ auth, showMenuHandler }) => {
   const loginHandler = () => {}
   return (
      <Flex justify="space-between" align="center" width="100%">
         <Nav />
         <Content auth={auth}>
            <LogoAirBnb />
         </Content>
         <Flex align="center">
            {!auth && (
               <Button onClick={loginHandler} className="btn" width="200px">
                  JOIN AS
               </Button>
            )}
            <ContentForProfile auth={auth} />
            <NavBurger showMenuHandler={showMenuHandler} />
         </Flex>
      </Flex>
   )
}

const Content = styled.div`
   transform: ${({ auth }) => (auth ? 'translate(-70px)' : 'translate(-10px)')};
   ${media.tablet`
  transform: translate(0px);
      
  `}
`

export default HeaderContentMain
