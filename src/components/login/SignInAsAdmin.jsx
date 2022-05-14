import React, { useEffect } from 'react'
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

const SignInAsAdmin = () => {
   const { error, isAuthorized, role, status } = useSelector(
      (state) => state.auth
   )
   const dispatch = useDispatch()
   const navigate = useNavigate()

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
      reset()
   }

   return (
      <Form onSubmit={handleSubmit(submitHandler)}>
         <Title size="18px" uppercase>
            SIGN IN
         </Title>
         <ErrorMessage>{error}</ErrorMessage>
         <Flex width="100%" direction="column" gap="15px">
            <Flex direction="column" gap="5px">
               <Input
                  isValid={errors?.email && !isValid}
                  {...input.login}
                  placeholder="Login"
               />
               <ErrorMessage>
                  {errors?.email ? errors.email.message : ''}
               </ErrorMessage>
            </Flex>
            <Flex direction="column" gap="5px  ">
               <Input
                  type="password"
                  isValid={errors?.password && !isValid}
                  {...input.password}
                  placeholder="Password"
               />
               <ErrorMessage>
                  {errors?.password ? errors.password.message : ''}
               </ErrorMessage>
            </Flex>
         </Flex>
         <Button width="100%">
            {status === 'loading' ? <Spinner /> : 'SIGN IN'}
         </Button>
      </Form>
   )
}
const Form = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 30px;
   transition: all 0.2s;
`
const ErrorMessage = styled.p`
   font-family: 'Inter';
   font-size: 14px;
   color: tomato;
`

export default SignInAsAdmin
