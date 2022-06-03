import styled from 'styled-components'
import ReactDOM from 'react-dom'

const BackDrop = (props) => {
   return (
      <>
         {ReactDOM.createPortal(
            <BackDropStyle {...props} onClick={props.onClose} />,
            document.getElementById('backdrop-root')
         )}
      </>
   )
}

const BackDropStyle = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   z-index: 10;
   background: ${({ background }) => background || 'rgba(0, 0, 0, 0.5)'};
   animation: BACKDROP ease-in 0.4s;
   @keyframes BACKDROP {
      0% {
         opacity: 0;
      }
      100% {
         opacity: 1;
      }
   }
`
export default BackDrop
