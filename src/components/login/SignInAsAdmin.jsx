import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Flex from '../UI/ui-for-positions/Flex'
import Input from '../UI/text-fields/Input'
import Button from '../UI/buttons/Button'
import Title from '../UI/typography/Title'
import { signInAsAdmin } from '../../store/authSlice'
import { ROLES } from '../../utils/constants/general'
import Spinner from '../UI/loader/Spinner'
import {
   showSuccessMessage,
   showErrorMessage,
} from '../UI/notification/Notification'
import { Alert } from '@mui/material'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

const SignInAsAdmin = () => {
   const { isAuthorized, role, status } = useSelector((state) => state.auth)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [isPassword, setIsPassword] = useState(false)

   const showPassword = () => setIsPassword(!isPassword)

   useEffect(() => {
      if (isAuthorized && role === ROLES.ADMIN) navigate('/announcement')
   }, [isAuthorized, role])

   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
   } = useForm({ mode: 'onChange' })
   const input = {
      login: {
         ...register('email', {
            required: 'Please enter login',
         }),
      },
      password: {
         ...register('password', {
            required: 'Enter password',
         }),
      },
   }
   const submitHandler = (data) => {
      dispatch(signInAsAdmin(data))
         .unwrap()
         .then(() => {
            showSuccessMessage({
               title: 'Success)',
               message: 'Successfulli logged in',
            })
            reset()
         })
         .catch((error) =>
            showErrorMessage({ title: 'Error', message: error.message })
         )
   }

   const errorLoginMessage = (errors?.email && errors.email.message) || ''
   const errorPasswordMessage =
      (errors?.password && errors.password.message) || ''
   const errorMessage = errorLoginMessage || errorPasswordMessage
   return (
      <Form onSubmit={handleSubmit(submitHandler)}>
         {errorMessage && (
            <Alert className="alert" severity="error">
               {errorLoginMessage || errorPasswordMessage}
            </Alert>
         )}
         <Title size="18px" uppercase>
            SIGN IN
         </Title>
         <Flex width="100%" direction="column" gap="20px">
            <Input
               isValid={errors?.email && !isValid}
               {...input.login}
               placeholder="Login"
            />
            <PasswordInputContainer>
               <IconEye onClick={showPassword}>
                  {isPassword ? (
                     <AiFillEyeInvisible cursor="pointer" />
                  ) : (
                     <AiFillEye cursor="pointer" />
                  )}
               </IconEye>
               <Input
                  type={isPassword ? 'text' : 'password'}
                  isValid={errors?.password && !isValid}
                  {...input.password}
                  placeholder="Password"
               />
            </PasswordInputContainer>
         </Flex>
         <Flex margin="30px 0 0 0" width="100%">
            <Button width="100%">
               {status === 'loading' ? <Spinner /> : 'SIGN IN'}
            </Button>
         </Flex>
      </Form>
   )
}
const PasswordInputContainer = styled.div`
   width: 100%;
   position: relative;
`
const IconEye = styled.div`
   position: absolute;
   right: 20px;
   top: 50%;
   transform: translateY(-40%);
   font-size: 30px;
   color: gray;
`
const Form = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 13px;
   transition: all 0.2s;
   .alert {
      position: absolute;
      width: 100%;
      top: -46px;
      font-family: 'Inter';
      letter-spacing: 0.5px;
      animation: alert 600ms ease-out;
   }

   @keyframes alert {
      0% {
         transform: scale(1);
      }
      10% {
         transform: scale(0.9);
      }
      30% {
         transform: scale(1.1);
      }
      50% {
         transform: scale(1.15);
      }
      100% {
         transform: scale(1);
      }
   }
`

export default SignInAsAdmin
