import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as NavBurger } from '../../../assets/icons/NavAdmin.svg'
import Drawer from '../../../components/UI/drawer/Drawer'
import LogoAirBnb from '../../../components/UI/Logo/LogoAirBnb'
import Title from '../../../components/UI/typography/Title'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import media from '../../../utils/helpers/media'

const Nav = () => {
   const [showMenu, setShowMenu] = useState(false)
   const showMenuHamdler = () => {
      setShowMenu(true)
   }
   const hideMenuHandler = () => {
      setShowMenu(false)
   }
   return (
      <>
         <Drawer
            isVisible={showMenu}
            justify="center"
            onClose={hideMenuHandler}
         >
            <Flex justify="space-evenly" align="center" direction="column">
               <Flex margin="70px 0 0 0">
                  <LogoAirBnb color="dark" />
               </Flex>
               <List>
                  <Li>
                     <a href="/">Announcement</a>
                  </Li>
                  <Li>
                     <a href="/">Users</a>
                  </Li>
                  <Li>
                     <a href="/">All housing</a>
                  </Li>
               </List>
               <Title>Log out</Title>
            </Flex>
         </Drawer>
         <NabBar onClick={showMenuHamdler}>
            <NavBurger />
         </NabBar>
         <NavStyled>
            <List>
               <Li>
                  <a href="/">Announcement</a>
               </Li>
               <Li>
                  <a href="/">Users</a>
               </Li>
               <Li>
                  <a href="/">All housing</a>
               </Li>
            </List>
         </NavStyled>
      </>
   )
}
const NavStyled = styled.nav`
   ${media.tablet`
      display:none;
   `}
`
const List = styled.ul`
   list-style: none;
   display: flex;
   gap: 40px;
   ${media.tablet`
      flex-direction:column;
      align-items:center;
      margin:100px 0 300px 0;
`}
`
const Li = styled.li`
   ${media.tablet`
   a{
      color:#000000;
   }
   
`}
`

const NabBar = styled.div`
   border: none;
   background: none;
   cursor: pointer;
   display: none;
   ${media.tablet`
      display:block;
   `}
`
export default Nav
