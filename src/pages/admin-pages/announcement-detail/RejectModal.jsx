import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import Title from '../../../components/UI/typography/Title'
import Modal from '../../../components/UI/modal/Modal'
import TextArea from '../../../components/UI/text-fields/TextArea'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import CancelButton from '../../../components/UI/buttons/CancelButton'
import Button from '../../../components/UI/buttons/Button'
import {
   showErrorMessage,
   showSuccessMessage,
} from '../../../components/UI/notification/Notification'
import { useDispatch } from 'react-redux'
import { rejectListing } from '../../../store/listingSlice'
import { useSearchParams } from 'react-router-dom'

const RejectModal = ({ onClose, isVisible }) => {
   const [params, setParams] = useSearchParams()
   const dispatch = useDispatch()
   const {
      formState: { errors, isValid },
      register,
      reset,
      handleSubmit,
   } = useForm({ mode: 'onChange' })
   const input = {
      rejection: {
         ...register('reason', {
            required: 'write something',
         }),
      },
   }
   const idListing = params.get('rejectListing')
   const submitHandler = (data) => {
      dispatch(rejectListing({ data, id: idListing }))
         .unwrap()
         .then(() => {
            showSuccessMessage({ title: 'Successfully sent :)' })
            reset()
            setParams('')
         })
         .catch(() => {
            showErrorMessage({
               title: 'Error',
               message: 'Something went wrong',
            })
         })
   }
   return (
      <Modal width="474px" onClose={onClose} isVisible={isVisible}>
         <form onSubmit={handleSubmit(submitHandler)}>
            <Flex justify="center" margin="0 0 20px 0">
               <Title>REJECT</Title>
            </Flex>
            <TextArea
               type="submit"
               placeholder="Write the reason for your rejection"
               {...input.rejection}
               isValid={errors?.rejection && !isValid}
            />
            <ErrorMessage>
               {errors?.rejection ? errors.rejection.message : ''}
            </ErrorMessage>
            <Flex margin="20px 0 0 0" width="100%" gap="50px" justify="end">
               <CancelButton width="100px" onClick={onClose} />
               <Button width="196px" disabled={!isValid}>
                  SENT
               </Button>
            </Flex>
         </form>
      </Modal>
   )
}
const ErrorMessage = styled.p`
   font-family: 'Inter';
   font-size: 14px;
   color: tomato;
`
export default RejectModal
