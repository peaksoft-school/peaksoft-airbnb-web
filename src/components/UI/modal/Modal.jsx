import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { IoMdClose } from 'react-icons/io'
import BackDrop from './BackDrop'

const ModalOverly = (props) => {
   return (
      <ModalStyle {...props}>
         {props.children}
         <Close onClick={props.onClose}>
            <IoMdClose fontSize={20} color="#50607f" />
         </Close>
      </ModalStyle>
   )
}
const Modal = (props) => {
   return (
      <>
         {props.isVisible &&
            ReactDOM.createPortal(
               <ModalOverly {...props} />,
               document.getElementById('modal-root')
            )}
         {props.isVisible && <BackDrop onClose={props.onClose} />}
      </>
   )
}

const ModalStyle = styled.div`
   max-width: ${({ width }) => width || ''};
   width: 100%;
   padding: 20px 25px;
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   border-radius: 2px;
   z-index: 11;
   background: #ffffff;
   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
   animation: MODAL linear 0.4s;
   @keyframes MODAL {
      0% {
         opacity: 0;
         top: 40%;
      }
      100% {
         opacity: 1;
         top: 50%;
      }
   }
   z-index: 11;
   @media (max-width: 425px) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      padding: 4rem 1rem;
      transform: translate(0%, 0%);
      animation: MOBILE_MODAL ease-in-out 0.5s;
   }
   @keyframes MOBILE_MODAL {
      0% {
         opacity: 0;
      }
      100% {
         opacity: 1;
      }
   }
`
const Close = styled.button`
   padding: 0.2rem;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: rgba(255, 255, 255, 0.854);
   border: none;
   position: absolute;
   top: 0;
   right: -35px;
   cursor: pointer;
   @media (max-width: 525px) {
      top: 10px;
      right: 10px;
   }
`
export default Modal
