/* eslint-disable no-plusplus */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect, useCallback } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import RadioButton from '../UI/buttons/RadioButton'
import Flex from '../UI/ui-for-positions/Flex'
import Button from '../UI/buttons/Button'
import ImagePicker from '../UI/image-picker/ImagePicker'
import Title from '../UI/typography/Title'
import Text from '../UI/typography/Text'
import Input from '../UI/text-fields/Input'
import TextArea from '../UI/text-fields/TextArea'
import media from '../../utils/helpers/media'
import Select from '../UI/select/Select'
import { getOneListing, listingActions } from '../../store/listingSlice'
import Spinner from '../UI/loader/Spinner'
import { useParams } from 'react-router-dom'
import { getImagesAndIds } from '../../utils/helpers/general'

let isDelete = false

const BookForm = ({ isUpdate, onSubmit }) => {
   const dispatch = useDispatch()
   const { homeId: id } = useParams()
   const { listing, region } = useSelector((state) => state)
   const [selectedImages, setSelectedImages] = useState({
      images: [],
      files: [],
   })
   const { isLoading, listing: oneListing } = listing
   const { regions } = region
   const {
      reset,
      register,
      setValue,
      formState: { errors, isValid, isSubmitted },
      handleSubmit,
   } = useForm({
      defaultValues: {
         type: '',
         regionId: '',
      },
   })
   const input = {
      maxNumberOfGuests: {
         ...register('maxNumberOfGuests', {
            required: '🛑 Obligatory field',
         }),
      },
      price: {
         ...register('price', {
            required: '🛑 Obligatory field',
         }),
      },
      title: {
         ...register('title', {
            required: '🛑 Obligatory field',
         }),
      },
      description: {
         ...register('description', {
            required: '🛑 Obligatory field',
         }),
      },
      town: {
         ...register('town', {
            required: '🛑 Obligatory field',
         }),
      },
      address: {
         ...register('address', {
            required: '🛑 Obligatory field',
         }),
      },
      regionId: {
         ...register('regionId', {
            required: '🛑 Obligatory field',
         }),
      },
      type: {
         ...register('type', {
            required: '🛑 Obligatory field',
         }),
      },
   }
   const onDrop = (file) => {
      const img = URL.createObjectURL(file[0])
      const { files, images } = selectedImages
      setSelectedImages({
         images: [...images, { img, id: files.length }],
         files: [...files, { file: file[0], id: files.length }],
      })
   }

   const deleteImgHandler = (id) => {
      const { files, images } = selectedImages
      setSelectedImages({
         ...selectedImages,
         images: images.filter((image) => image.id !== id),
         files: files.filter((file) => file.id !== id),
      })

      if (isUpdate) dispatch(listingActions.deleteImageListing(id))
      isDelete = true
   }

   const changeRadionButtonHandler = (e) =>
      setValue('type', e.target.value, { shouldValidate: true })

   const changeSelectHandler = (regionId) =>
      setValue('regionId', regionId, { shouldValidate: true })

   const { imageIds } = getImagesAndIds(oneListing || null)

   const resetForm = useCallback((reset) => {
      setSelectedImages({ images: [], files: [] })
      reset()
   })

   const submitHandler = (data, e) => {
      e.stopPropagation()
      onSubmit({ ...data, images: imageIds || [] }, selectedImages.files, () =>
         resetForm(reset)
      )
      isDelete = false
   }
   const images = useCallback(() => {
      if (oneListing?.images?.length) {
         return getImagesAndIds(oneListing).images
      }
   })

   useEffect(() => {
      if (oneListing && !isDelete) {
         setValue('title', oneListing?.title)
         setValue('description', oneListing?.description)
         setValue('address', oneListing?.address)
         setValue('town', oneListing?.town)
         setValue('price', oneListing?.price)
         setValue('maxNumberOfGuests', oneListing?.maxNumberOfGuests)
         setValue('type', oneListing?.type)
         setValue('regionId', oneListing?.region?.id)
         setSelectedImages({ ...selectedImages, images: images() || [] })
      }
   }, [oneListing])

   useEffect(() => {
      if (isUpdate) dispatch(getOneListing(id))
      return () => {
         dispatch(listingActions.clearListing())
      }
   }, [])

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
            files={selectedImages?.images}
         />
         <Br />
         <ErrorMessage>
            {isSubmitted ? errors.images?.message : ''}
         </ErrorMessage>
         <Br />
         <Title>Home type</Title>
         <Flex margin="10px 0 0 0" gap="50px">
            <Flex gap="13px" align="center">
               <RadioButton
                  {...input.type}
                  value="APARTMENT"
                  onChange={changeRadionButtonHandler}
               />
               <Label>Apartment</Label>
            </Flex>
            <Flex gap="13px" align="center">
               <RadioButton
                  {...input.type}
                  onChange={changeRadionButtonHandler}
                  value="HOUSE"
               />
               <Label>House</Label>
            </Flex>
         </Flex>
         <ErrorMessage>{errors?.type ? errors.type.message : ''}</ErrorMessage>
         <Flex margin="23px 0 0 0" gap="20px">
            <Label>
               Max of Guests
               <Input
                  isValid={errors?.maxNumberOfGuests && !isValid}
                  {...input.maxNumberOfGuests}
                  placeholder="0"
                  type="number"
               />
               <ErrorMessage>
                  {errors?.maxNumberOfGuests
                     ? errors.maxNumberOfGuests.message
                     : ''}
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
         <Label>Region</Label>
         <Flex margin="15px 0 0 0">
            <Select
               {...input.regionId}
               data={regions}
               isValid={errors?.regionId && !isValid}
               width="100%"
               name="Please, select the region"
               onChange={changeSelectHandler}
               value="id"
               label="title"
               defaultValue={oneListing?.region?.title || ' '}
            />
         </Flex>
         <Br />
         <ErrorMessage>
            {errors?.regionId ? errors.regionId.message : ''}
         </ErrorMessage>
         <Br />
         <Br />
         <Label>
            Town / Province
            <Input
               isValid={errors?.town && !isValid}
               {...input.town}
               width="100%"
            />
            <ErrorMessage>
               {errors?.town ? errors.town.message : ''}
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
            />
            <ErrorMessage>
               {errors?.address ? errors.address.message : ''}
            </ErrorMessage>
         </Label>
         <Flex margin="23px 0 0 0" justify="end">
            <Button disabled={isLoading} width="200px">
               {isLoading ? <Spinner /> : 'submit'}
            </Button>
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
   text-transform: uppercase;
   ${media.mobile`
      font-size :10px;
   `}
`
export default BookForm
