import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteListing } from '../../store/listingSlice'
import Button from '../UI/buttons/Button'
import CancelButton from '../UI/buttons/CancelButton'
import Spinner from '../UI/loader/Spinner'
import Modal from '../UI/modal/Modal'
import Title from '../UI/typography/Title'
import Flex from '../UI/ui-for-positions/Flex'

const DeleteModal = ({ isVisible, onClose, func, id }) => {
   const { isLoadingDelete } = useSelector((state) => state.listing)
   const dispatch = useDispatch()
   const deleteHandler = () => {
      dispatch(deleteListing(id))
         .unwrap()
         .then((response) => {
            if (response && func) {
               func()
               onClose()
            }
         })
   }
   return (
      <Modal width="400px" isVisible={isVisible} onClose={onClose}>
         <Flex
            style={{ textAlign: 'center' }}
            margin="20px 0 0 0"
            justify="center"
            width="100%"
         >
            <Title size="20px">
               Are you sure you want to delete this listing?
            </Title>
         </Flex>
         <Flex margin="30px 0 0 0" width="100%" justify="space-around">
            <CancelButton onClick={onClose} />
            <Button onClick={deleteHandler}>
               {isLoadingDelete ? <Spinner /> : 'DELETE'}
            </Button>
         </Flex>
      </Modal>
   )
}

export default DeleteModal
