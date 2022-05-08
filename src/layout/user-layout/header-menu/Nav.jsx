import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import media from '../../../utils/helpers/media'

const Nav = ({ dark }) => {
   return (
      <NavStyled>
         <List dark={dark}>
            <Li>
               <NavLink to="/">Regions</NavLink>
            </Li>
            <Li>
               <NavLink to="/">Leave an ad</NavLink>
            </Li>
         </List>
      </NavStyled>
   )
}
const NavStyled = styled.nav`
   min-width: 220px;
   ${media.tablet`
      display:none;
   `}
`
const List = styled.ul`
   list-style: none;
   display: flex;
   gap: 40px;
   a {
      text-decoration: none;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: ${({ dark }) => (dark ? '#363636' : '#ffffff')};
      transition: 0.1s;
      :hover {
         color: #f5a321;
      }
   }
`
const Li = styled.li``

export default Nav
