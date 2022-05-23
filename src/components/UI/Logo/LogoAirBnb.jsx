import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { ReactComponent as LogoLight } from '../../../assets/icons/LogoLight.svg'
import { ReactComponent as LogoDark } from '../../../assets/icons/Logo.svg'
import media from '../../../utils/helpers/media'

const LogoAirBnb = ({ color = 'light', size }) => {
   return (
      <>
         <GlobalStyle />
         {color === 'light' && <LogoLight size={size} className="logo" />}
         {color === 'dark' && <LogoDark size={size} className="logo" />}
      </>
   )
}
const GlobalStyle = createGlobalStyle`
    .logo{
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
