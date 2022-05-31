import React from 'react'
import styled from 'styled-components'
import Backdrop from '../modal/BackDrop'

const PopUp = ({ isVisible, onClose, children }) => {
   return (
      isVisible && (
         <>
            <Backdrop onClose={onClose} background="transparent" />
            <Meetballs>{children}</Meetballs>
         </>
      )
   )
}
const Meetballs = styled.div`
   border: 1px solid #c4c4c4;
   border-radius: 2px;
   width: 200px;
   padding: 0.3rem 0;
   background-color: white;
   position: absolute;
   bottom: 50px;
   right: 20px;
   animation: YES ease 0.2s;
   z-index: 11;
   @keyframes YES {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
`
export default PopUp
