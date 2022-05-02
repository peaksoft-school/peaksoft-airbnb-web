import React from 'react'
import styled from 'styled-components'
import { ReactComponent as NavBurger } from '../../../assets/icons/NavBurger.svg'
import media from '../../../utils/helpers/media'

const Nav = ({ user }) => {
   return (
      !user && (
         <>
            <NabBar>
               <NavBurger />
            </NabBar>
            <NavStyled>
               <List>
                  <Li>
                     <a href="/">Regions</a>
                  </Li>
                  <Li>
                     <a href="/">Leave an ad</a>
                  </Li>
               </List>
            </NavStyled>
         </>
      )
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
`
const Li = styled.li``

const NabBar = styled.div`
   border: none;
   background: none;
   cursor: pointer;
   display: none;
   width: 80px;
   ${media.tablet`
      display:block;
   `}
`

export default Nav
