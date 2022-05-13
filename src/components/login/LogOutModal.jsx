import React from 'react'
import { useDispatch } from 'react-redux'
// import { signOut } from 'firebase/auth'
import Button from '../UI/buttons/Button'
import Title from '../UI/typography/Title'
import Flex from '../UI/ui-for-positions/Flex'
import CancelButton from '../UI/buttons/CancelButton'
import { authAction } from '../../store/authSlice'
import { modalActions } from '../../store/modalSlice'

const LogOutModal = () => {
   const dispatch = useDispatch()

   const hideModalHandler = () => dispatch(modalActions.hideLogOutModal())

   const signOutHandler = () => {
      dispatch(authAction.signOut())
      dispatch(modalActions.hideLogOutModal())
   }

   return (
      <Flex direction="column" align="center" gap="45px">
         <Flex direction="column" align="center" gap="20px">
            <Title uppercase>LOG OUT</Title>
            <Title size="16px">Are you sure you want to Log out?</Title>
         </Flex>
         <Flex justify="space-around" width="100%">
            <CancelButton onClick={hideModalHandler} />
            <Button onClick={signOutHandler}>Log out</Button>
         </Flex>
      </Flex>
   )
}

export default LogOutModal
