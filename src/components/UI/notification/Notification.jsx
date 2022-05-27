import styled from 'styled-components'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import media from '../../../utils/helpers/media'
import Title from '../typography/Title'
import Text from '../typography/Text'

export const showSuccessMessage = (msg) =>
   toast.success(
      <div>
         <Title color="black">{msg.title}</Title>
         <Text>{msg.message}</Text>
      </div>
   )
export const showErrorMessage = (msg) =>
   toast.error(
      <div>
         <Title color="black">{msg.title}</Title>
         <Text>{msg.message}</Text>
      </div>
   )
const Notification = () => {
   return <StyledToastContainer autoClose={5000} position="top-center" />
}

const StyledToastContainer = styled(ToastContainer)`
   width: 612px;
   ${media.mobile`
   max-width: 612px;
      width: 100%;
  padding:1rem;
   `}

   .Toastify__toast--success {
      background: #f0fff1;
      border-radius: 5px;
   }
   .Toastify__toast--error {
      background: #fff1f0;
      border-radius: 5px;
   }
   .Toastify__toast-icon {
      width: 0;
      height: 0;
   }
`

export default Notification
