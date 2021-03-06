/* eslint-disable no-nested-ternary */
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as NavBurgerIcon } from '../../../assets/icons/NavAdmin.svg'
import { ReactComponent as NavBurgerIconDark } from '../../../assets/icons/navburgerdark.svg'
import media from '../../../utils/helpers/media'

const NavBurger = ({ showMenuHandler, dark, headerStyle }) => {
   return (
      <NavBar onClick={showMenuHandler}>
         {dark ? (
            <NavBurgerIconDark />
         ) : headerStyle ? (
            <NavBurgerIconDark />
         ) : (
            <NavBurgerIcon />
         )}
      </NavBar>
   )
}
const NavBar = styled.div`
   border: none;
   background: none;
   cursor: pointer;
   display: none;
   position: relative;
   top: 2px;
   ${media.tablet`
      display:block;
   `}
`
export default NavBurger
