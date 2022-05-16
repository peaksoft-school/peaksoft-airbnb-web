import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../../../components/UI/buttons/Button'
import Drawer from '../../../components/UI/drawer/Drawer'
import LogoAirBnb from '../../../components/UI/Logo/LogoAirBnb'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import { modalActions } from '../../../store/modalSlice'
import media from '../../../utils/helpers/media'

const HeaderMenu = ({
   showMenu,
   showSignInWithGoogle,
   hideMenuHandler,
   isAuthorized,
}) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { pathname } = useLocation()

   const logoutHandler = () => {
      dispatch(modalActions.showLogoutModal())
   }
   const profileHanlder = () => {
      navigate('/profile')
   }
   const navigateToSubmitAnAd = () => {
      navigate('/submit-an-ad')
      hideMenuHandler()
   }
   return (
      <Drawer isVisible={showMenu} justify="center" onClose={hideMenuHandler}>
         <Flex justify="space-evenly" align="center" direction="column">
            <Flex margin="70px 0 0 0">
               <LogoAirBnb color="dark" />
            </Flex>
            {isAuthorized && (
               <Flex gap="20px" align="center">
                  {pathname !== '/profile' && (
                     <AboutItem onClick={profileHanlder}>My Profile</AboutItem>
                  )}
                  <AboutItem onClick={logoutHandler}>Log out</AboutItem>
               </Flex>
            )}
            <List>
               <Li>
                  <NavLink to="/">Regions</NavLink>
               </Li>
               <Li>
                  <NavLink to="/">Leave an ad</NavLink>
               </Li>
            </List>
            {isAuthorized ? (
               pathname !== '/submit-an-ad' && (
                  <Button onClick={navigateToSubmitAnAd}>Submit an ad</Button>
               )
            ) : (
               <Button onClick={() => showSignInWithGoogle()} width="100%">
                  JOIN AS
               </Button>
            )}
         </Flex>
      </Drawer>
   )
}
const List = styled.ul`
   list-style: none;
   display: flex;
   gap: 40px;
   ${media.tablet`
      flex-direction:column;
      align-items:center;
      margin:100px 0 70px 0;
`}
`
const Li = styled.li`
   ${media.tablet`
   a{
      color:#000000;
   }
   
`}
`
const AboutItem = styled.div`
   padding: 0.4rem 1rem;
   font-family: 'Inter';
   border-radius: 5px;
   margin: 30px 0 3px 0;
   background-color: #efefef;
   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
   cursor: pointer;
   :hover {
      background-color: #efefef8b;
   }
`
export default HeaderMenu
