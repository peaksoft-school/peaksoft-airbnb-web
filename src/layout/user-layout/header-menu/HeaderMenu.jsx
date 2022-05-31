import React from 'react'
import { useDispatch } from 'react-redux'
import {
   NavLink,
   useLocation,
   useNavigate,
   useSearchParams,
} from 'react-router-dom'
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
   const [, setParams] = useSearchParams()

   const logoutHandler = () => {
      hideMenuHandler()
      dispatch(modalActions.showLogoutModal())
   }
   const profileHanlder = () => {
      hideMenuHandler()
      navigate('/profile')
   }
   const navigateToSubmitAnAd = () => {
      navigate('/submit-an-ad')
      hideMenuHandler()
   }
   const leaveAnAd = () => {
      if (!isAuthorized) setParams({ signIn: 'google' })
      else navigate('/submit-an-ad')
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
               {pathname !== '/submit-an-ad' && (
                  <Li>
                     <p className="a" onClick={leaveAnAd} to="">
                        Leave an ad
                     </p>
                  </Li>
               )}
            </List>
            {isAuthorized ? (
               pathname !== '/submit-an-ad' && (
                  <Button onClick={navigateToSubmitAnAd}>Submit an ad</Button>
               )
            ) : (
               <Button
                  onClick={() => {
                     showSignInWithGoogle()
                     hideMenuHandler()
                  }}
                  width="100%"
               >
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
   .a {
      cursor: pointer;
      text-decoration: none;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #363636;
      transition: 0.1s;
      :hover {
         color: #f5a321;
      }
   }
`
const Li = styled.li`
   ${media.tablet`
   a{
      color:#000000;
      :hover {
         color: #f5a321;
      }
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
   text-transform: uppercase;
   cursor: pointer;
   :hover {
      background-color: #efefef8b;
   }
`
export default HeaderMenu
