import React from 'react'
import styled from 'styled-components'
import close from '../../../assets/icons/close.png'
import media from '../../../utils/helpers/media'

const Drawer = ({ onClose, children, isVisible, width = '100%' }) => {
   return (
      <DrawerStyled width={width} isVisible={isVisible}>
         <Close src={close} onClick={onClose} />
         {children}
      </DrawerStyled>
   )
}

const DrawerStyled = styled.div`
   position: fixed;
   padding: 1rem;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   width: ${({ width }) => width || '0px'};
   transform: ${({ isVisible }) =>
      isVisible ? 'translateX(0)' : 'translateX(800px)'};
   height: 100%;
   background: rgba(247, 247, 247, 0.9);
   transition: 0.2s;
   display: none;
   z-index: 2;
   ${media.tablet`
       display:block;
   `}
`
const Close = styled.img`
   position: absolute;
   top: 0;
   right: 0;
   margin: 30px 20px;
   cursor: pointer;
`

export default Drawer
