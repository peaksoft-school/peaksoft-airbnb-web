import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { ReactComponent as NavBurger } from '../../../assets/icons/NavAdmin.svg'
import Drawer from '../../../components/UI/drawer/Drawer'
import LogoAirBnb from '../../../components/UI/Logo/LogoAirBnb'
import Title from '../../../components/UI/typography/Title'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import { modalActions } from '../../../store/modalSlice'
import media from '../../../utils/helpers/media'

const Nav = () => {
   const dispatch = useDispatch()
   const [showMenu, setShowMenu] = useState(false)

   const showMenuHamdler = () => setShowMenu(true)

   const hideMenuHandler = () => setShowMenu(false)

   const logOutHandler = () => dispatch(modalActions.showLogoutModal())

   const isActiveFunction = (isAcive) => (isAcive ? 'active' : '')

   return (
      <>
         <GlobalStyle />
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
                     <NavLink
                        onClick={hideMenuHandler}
                        className={({ isActive }) => isActiveFunction(isActive)}
                        to="/announcement"
                     >
                        Announcement
                     </NavLink>
                  </Li>
                  <Li>
                     <NavLink
                        onClick={hideMenuHandler}
                        className={({ isActive }) => isActiveFunction(isActive)}
                        to="/users"
                     >
                        Users
                     </NavLink>
                  </Li>
                  <Li>
                     <NavLink
                        onClick={hideMenuHandler}
                        className={({ isActive }) => isActiveFunction(isActive)}
                        to="/all-housing"
                     >
                        All housing
                     </NavLink>
                  </Li>
               </List>
               <Logout onClick={logOutHandler}>Log out</Logout>
            </Flex>
         </Drawer>
         <NabBar onClick={showMenuHamdler}>
            <NavBurger />
         </NabBar>
         <NavStyled>
            <List>
               <Li>
                  <NavLink
                     className={({ isActive }) => isActiveFunction(isActive)}
                     to="/announcement"
                  >
                     Announcement
                  </NavLink>
               </Li>
               <Li>
                  <NavLink
                     className={({ isActive }) => isActiveFunction(isActive)}
                     to="/users"
                  >
                     Users
                  </NavLink>
               </Li>
               <Li>
                  <NavLink
                     className={({ isActive }) => isActiveFunction(isActive)}
                     to="/all-housing"
                  >
                     All housing
                  </NavLink>
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
const Logout = styled(Title)`
   cursor: pointer;
   :hover {
      color: #ff4b4b;
   }
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
    a.active{
           color:#FF4B4B;
        }
`
export default Nav
