import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Flex from '../UI/ui-for-positions/Flex'
import Text from '../UI/typography/Text'
import Title from '../UI/typography/Title'
import GoogleButton from '../UI/buttons/GoogleButton'
import { googleAccountIntegration } from '../../store/authSlice'

const SignInWithGoogle = ({ showSignInAsAdminHandler }) => {
   const dispatch = useDispatch()

   const signInHandler = () => dispatch(googleAccountIntegration())

   return (
      <ContainerForm>
         <Flex direction="column" align="center" gap="20px">
            <Title uppercase>
               <b>Join us</b>
            </Title>
            <Text>
               Sign in with Google to start booking available listings!
            </Text>
            <GoogleButton onClick={signInHandler}>Google</GoogleButton>
         </Flex>
         <Flex margin="40px 0 0 0" justify="center">
            <LoginAsAdmin onClick={showSignInAsAdminHandler}>
               log in as admin
            </LoginAsAdmin>
         </Flex>
      </ContainerForm>
   )
}
const ContainerForm = styled.div`
   width: 100%;
`
const LoginAsAdmin = styled.button`
   font-family: 'Inter';
   font-style: normal;
   font-size: 14px;
   color: #266bd3;
   border: none;
   background-color: none;
   cursor: pointer;
   text-decoration: underline;
`

export default SignInWithGoogle
