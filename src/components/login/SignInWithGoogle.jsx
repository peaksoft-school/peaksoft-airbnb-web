import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Flex from '../UI/ui-for-positions/Flex'
import Text from '../UI/typography/Text'
import Title from '../UI/typography/Title'
import GoogleButton from '../UI/buttons/GoogleButton'
import { googleAccountIntegration } from '../../store/authSlice'
import { ROLES } from '../../utils/constants/general'
import Spinner from '../UI/loader/Spinner'

const SignInWithGoogle = ({ showSignInAsAdminHandler }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { isAuthorized, role, isLoading } = useSelector((state) => state.auth)

   useEffect(() => {
      if (isAuthorized && role === ROLES.VENDOR) navigate('/profile')
   }, [isAuthorized, role])

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
            <GoogleButton isLoading={!isLoading} onClick={signInHandler}>
               {isLoading ? <Spinner dark /> : 'Google'}
            </GoogleButton>
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
