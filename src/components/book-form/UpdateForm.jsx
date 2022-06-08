/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react'
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
import {
   getOneListing,
   listingActions,
   uploadImageListing,
} from '../../store/listingSlice'
import uuid from 'react-uuid'
import Spinner from '../UI/loader/Spinner'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getImageFullUrl } from '../../utils/helpers/general'

const BookForm = () => {
   const navigate = useNavigate()
   const { pathname } = useLocation()
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
   const onDrop = (files) => {
      const img = URL.createObjectURL(files[0])
      setSelectedImages({
         images: [...selectedImages.images, { img, id: uuid() }],
         files: [...selectedImages.files, files[0]],
      })
   }
   const deleteImgHandler = (index) =>
      setSelectedImages({
         ...selectedImages,
         images: selectedImages.images.filter((image, i) => i !== index),
         files: selectedImages.files.filter((file, i) => i !== index),
      })

   const changeRadionButtonHandler = (e) =>
      setValue('type', e.target.value, { shouldValidate: true })

   const changeSelectHandler = (regionId) =>
      setValue('regionId', regionId, { shouldValidate: true })

   const navigateAfterSuccessUpload = () => navigate('/main/regions')

   const isUpdate = pathname !== '/submit-an-ad'

   const submitHandler = (data, e) => {
      e.stopPropagation()
      const listing = {
         dataListing: {
            ...data,
            price: Number(data.price),
            maxNumberOfGuests: Number(data.maxNumberOfGuests),
         },
         imagesListing: selectedImages.files,
         navigateAfterSuccessUpload,
         id,
         isUpdate,
      }
      dispatch(uploadImageListing(listing))

      setSelectedImages({
         images: [],
         files: [],
      })
   }
   const images = () => {
      if (oneListing) {
         return oneListing?.images?.map((el) => {
            return { img: getImageFullUrl(el.image.smallImagePath), id: el.id }
         })
      }
      return selectedImages.images
   }
   useEffect(() => {
      if (oneListing) {
         setValue('title', oneListing?.title)
         setValue('description', oneListing?.description)
         setValue('address', oneListing?.address)
         setValue('town', oneListing?.town)
         setValue('price', oneListing?.price)
         setValue('maxNumberOfGuests', oneListing?.maxNumberOfGuests)
         setValue('type', oneListing?.type)
         setValue('regionId', oneListing?.region?.id)
         setSelectedImages({ ...selectedImages, images: images() })
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
               defaultValue=""
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
            <Button width="200px">{isLoading ? <Spinner /> : 'submit'}</Button>
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