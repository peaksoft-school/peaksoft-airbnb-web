import React from 'react'
import styled from 'styled-components'
import Button from '../../../components/UI/buttons/Button'
import Drawer from '../../../components/UI/drawer/Drawer'
import LogoAirBnb from '../../../components/UI/Logo/LogoAirBnb'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import media from '../../../utils/helpers/media'

const HeaderMenu = ({ showMenu, hideMenuHandler, auth }) => {
   return (
      <Drawer isVisible={showMenu} justify="center" onClose={hideMenuHandler}>
         <Flex justify="space-evenly" align="center" direction="column">
            <Flex margin="70px 0 0 0">
               <LogoAirBnb color="dark" />
            </Flex>
            {auth && (
               <Flex gap="20px" align="center">
                  <AboutItem>My Profile</AboutItem>
                  <AboutItem>Log out</AboutItem>
               </Flex>
            )}
            <List>
               <Li>
                  <a href="/">Regions</a>
               </Li>
               <Li>
                  <a href="/">Leave an ad</a>
               </Li>
            </List>
            {auth ? (
               <Button>Submit an ad</Button>
            ) : (
               <Button width="100%">JOIN AS</Button>
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
