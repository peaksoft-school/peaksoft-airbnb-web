import React from 'react'
import {
   NavLink,
   useLocation,
   useNavigate,
   useSearchParams,
} from 'react-router-dom'
import styled from 'styled-components'
import media from '../../../utils/helpers/media'

const Nav = ({ dark, isAuthorized }) => {
   const { pathname } = useLocation()
   const navigate = useNavigate()
   const [, setParams] = useSearchParams()
   const leaveAnAd = () => {
      if (!isAuthorized) setParams({ signIn: 'google' })
      else navigate('/submit-an-ad')
   }
   return (
      <NavStyled>
         <List dark={dark}>
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
   a,
   .a {
      cursor: pointer;
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
