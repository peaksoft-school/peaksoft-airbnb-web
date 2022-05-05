import ReactDOM from 'react-dom'
import styled from 'styled-components'
import BackDrop from './BackDrop'

const ModalOverly = (props) => {
   return <ModalStyle {...props}>{props.children}</ModalStyle>
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
   padding: 20px 25px;
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   border-radius: 2px;
   z-index: 10;
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
`
export default Modal
