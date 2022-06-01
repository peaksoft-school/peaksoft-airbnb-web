import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { ReactComponent as LogoLight } from '../../../assets/icons/LogoLight.svg'
import { ReactComponent as LogoDark } from '../../../assets/icons/Logo.svg'
import media from '../../../utils/helpers/media'
import { useNavigate } from 'react-router-dom'

const LogoAirBnb = ({ color = 'light', size }) => {
   const navigate = useNavigate()
   const clickHandler = () => navigate('/')
   return (
      <>
         <GlobalStyle />
         {color === 'light' && (
            <LogoLight onClick={clickHandler} size={size} className="logo" />
         )}
         {color === 'dark' && (
            <LogoDark onClick={clickHandler} size={size} className="logo" />
         )}
      </>
   )
}
const GlobalStyle = createGlobalStyle`
    .logo{
        cursor: pointer;
        width: ${({ size }) => size || '68px'};
        height: 55px;
        color: red;
        ${media.tablet`
        width:50px;
        height :50px;
        `}
    }
`
export default LogoAirBnb
