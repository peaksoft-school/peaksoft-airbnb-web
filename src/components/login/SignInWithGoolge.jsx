import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { useDispatch } from 'react-redux'
import Flex from '../UI/ui-for-positions/Flex'
import Text from '../UI/typography/Text'
import Title from '../UI/typography/Title'
import GoogleButton from '../UI/buttons/GoogleButton'
import { signInWithGoogle } from '../../store/authSlice'

const SignInWithGoolge = () => {
   const dispatch = useDispatch()

   const signInHandler = () => dispatch(signInWithGoogle())

   return (
      <ContainerForm>
         <GlobalStyle />
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
            <a href="/">log in as admin</a>
         </Flex>
      </ContainerForm>
   )
}
const ContainerForm = styled.div`
   width: 100%;
`
const GlobalStyle = createGlobalStyle`
a{
    font-family: 'Inter';
    font-style: normal;
    font-size: 14px;
    color: #266BD3;
}

`

export default SignInWithGoolge
