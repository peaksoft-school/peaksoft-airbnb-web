import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import Title from '../../../components/UI/typography/Title'
import Modal from '../../../components/UI/modal/Modal'
import TextArea from '../../../components/UI/text-fields/TextArea'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import CancelButton from '../../../components/UI/buttons/CancelButton'
import PositionedSnackbar from '../../../components/UI/snackbar/Snackbar'
import Button from '../../../components/UI/buttons/Button'

const Rejects = ({ onClose, cancelHandler, isVisible = true }) => {
   const [value, setValue] = useState('')
   const [show, setShow] = useState(false)
   const {
      formState: { errors, isValid },
      register,
      reset,
      handleSubmit,
   } = useForm({ mode: 'onChange' })
   const input = {
      rejection: {
         ...register('rejection', {
            required: 'write something',
         }),
      },
   }
   const submitHandler = () => {
      setShow(true)

      reset()
   }
   const textAreaChangeHandler = (e) => {
      setValue({ ...value, feedbackDescription: e.target.value })
   }

   useEffect(() => {
      if (value.trim() === '') {
         setValue(true)
      } else {
         setValue(false)
      }
   }, [])

   return (
      <>
         <PositionedSnackbar
            message=""
            title="Successfully sent :)"
            open={show}
            severity="success"
            onClose={() => setShow(false)}
            delay={setShow}
         />
         <Modal width="474px" onClose={onClose} isVisible={isVisible}>
            <div>
               <Flex justify="center" margin="0 0 20px 0">
                  <Title>REJECT</Title>
               </Flex>

               <TextArea
                  type="submit"
                  placeholder="Write the reason for your rejection"
                  onChange={textAreaChangeHandler}
                  value={value.feedbackDescription}
                  {...input.rejection}
                  isValid={errors?.rejection && !isValid}
               />
               <ErrorMessage>
                  {errors?.rejection ? errors.rejection.message : ''}
               </ErrorMessage>

               <Flex margin="20px 0 0 0" width="100%" gap="50px" justify="end">
                  <CancelButton width="100px" onClick={cancelHandler} />
                  <Button
                     width="196px"
                     disabled={!isValid}
                     onClick={handleSubmit(submitHandler)}
                  >
                     SENT
                  </Button>
               </Flex>
            </div>
         </Modal>
      </>
   )
}

const ErrorMessage = styled.p`
   font-family: 'Inter';
   font-size: 14px;
   color: tomato;
`

export default Rejects
