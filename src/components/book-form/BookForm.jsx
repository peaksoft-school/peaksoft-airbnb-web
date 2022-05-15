/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { useForm } from 'react-hook-form'
import RadioButton from '../UI/buttons/RadioButton'
import Flex from '../UI/ui-for-positions/Flex'
import Button from '../UI/buttons/Button'
import ImagePicker from '../UI/image-picker/ImagePicker'
import Title from '../UI/typography/Title'
import Text from '../UI/typography/Text'
import Input from '../UI/text-fields/Input'
import TextArea from '../UI/text-fields/TextArea'
import media from '../../utils/helpers/media'

const BookForm = () => {
   const [files, setFiles] = useState([])
   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
   } = useForm({ mode: 'onChange' })
   const input = {
      maxOfQuests: {
         ...register('maxOfQuests', {
            required: 'Obligatory field',
         }),
      },
      price: {
         ...register('price', {
            required: 'Obligatory field',
         }),
      },
      title: {
         ...register('title', {
            required: 'Obligatory field',
         }),
      },
      description: {
         ...register('description', {
            required: 'Obligatory field',
         }),
      },
      region: {
         ...register('region', {
            required: 'Obligatory field',
         }),
      },
      townProvince: {
         ...register('townProvince', {
            required: 'Obligatory field',
         }),
      },
      address: {
         ...register('address', {
            required: 'Obligatory field',
         }),
      },
   }
   const onDrop = (file) => {
      const img = URL.createObjectURL(file[0])
      setFiles([...files, { img, id: Math.random().toString() }])
   }
   const deleteImgHandler = (id) => {
      setFiles(files.filter((el) => el.id !== id))
   }
   const submitHandler = (data) => {
      console.log({ ...data, images: files })
      reset()
   }
   return (
      <FormContainer onSubmit={handleSubmit(submitHandler)}>
         <GlobalStyle />
         <Title uppercase>Hi! Let's get started listing your place.</Title>
         <Br />
         <Text feedback>
            In this form, we'll collect some basic and additional information
            about your listing.
         </Text>
         <Br />
         <Br />
         <Title>
            Image &nbsp;<Text>Max 4 photo</Text>
         </Title>
         <Br />
         <ImagePicker
            deleteHandler={deleteImgHandler}
            onDrop={onDrop}
            files={files}
         />
         <Br />
         <Title>Home type</Title>
         <Flex margin="10px 0 0 0" gap="50px">
            <Flex gap="13px" align="center">
               <RadioButton /> <Label>Apartment</Label>
            </Flex>
            <Flex gap="13px" align="center">
               <RadioButton /> <Label>House</Label>
            </Flex>
         </Flex>
         <Flex margin="23px 0 0 0" gap="20px">
            <Label>
               Max of Guests
               <Input
                  isValid={errors?.maxOfQuests && !isValid}
                  {...input.maxOfQuests}
                  placeholder="0"
                  type="number"
               />
               <ErrorMessage>
                  {errors?.maxOfQuests ? errors.maxOfQuests.message : ''}
               </ErrorMessage>
            </Label>
            <Label>
               Price
               <Input
                  isValid={errors?.price && !isValid}
                  {...input.price}
                  placeholder="0 $"
                  type="number"
               />
               <ErrorMessage>
                  {errors?.price ? errors.price.message : ''}
               </ErrorMessage>
            </Label>
         </Flex>
         <Br />
         <Br />
         <Label>
            Title
            <Input
               isValid={errors?.title && !isValid}
               {...input.title}
               width="100%"
            />
            <ErrorMessage>
               {errors?.title ? errors.title.message : ''}
            </ErrorMessage>
         </Label>
         <Br />
         <Br />
         <Label>
            Description of listing
            <TextArea
               isValid={errors?.description && !isValid}
               {...input.description}
               width="100%"
            />
            <ErrorMessage>
               {errors?.description ? errors.description.message : ''}
            </ErrorMessage>
         </Label>
         <Br />
         <Br />
         <Label>
            Region
            <Input
               isValid={errors?.region && !isValid}
               {...input.region}
               width="100%"
               placeholder="Please, select the region"
            />
            <ErrorMessage>
               {errors?.region ? errors.region.message : ''}
            </ErrorMessage>
         </Label>
         <Br />
         <Br />
         <Label>
            Address
            <Input
               isValid={errors?.address && !isValid}
               {...input.address}
               width="100%"
               placeholder="Please, select the region"
            />
            <ErrorMessage>
               {errors?.address ? errors.address.message : ''}
            </ErrorMessage>
         </Label>
         <Br />
         <Br />
         <Label>
            Town / Province
            <Input
               isValid={errors?.townProvince && !isValid}
               {...input.townProvince}
               width="100%"
            />
            <ErrorMessage>
               {errors?.townProvince ? errors.townProvince.message : ''}
            </ErrorMessage>
         </Label>
         <Flex margin="23px 0 0 0" justify="end">
            <Button width="200px">submit</Button>
         </Flex>
      </FormContainer>
   )
}
const FormContainer = styled.form`
   max-width: 610px;
   width: 100%;
   margin: 0 auto;
   padding: 40px 0;
   ${media.tablet`
       padding:40px 17px;
   `}
`
const Label = styled.label`
   font-family: 'Inter';
   font-weight: 500;
   font-size: 16px;
   color: #363636;
   display: flex;
   flex-direction: column;
   gap: 20px;
`
const Br = styled.br``
const GlobalStyle = createGlobalStyle`
body {
  background:#f7f7f7;
}
`
const ErrorMessage = styled.p`
   font-family: 'Inter';
   font-size: 14px;
   color: tomato;
`
export default BookForm
