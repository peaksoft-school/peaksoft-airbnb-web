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
import { getRegions } from '../../store/regionSlice'
import { addListing, uploadImageListing } from '../../store/listingSlice'

const BookForm = () => {
   const dispatch = useDispatch()
   const { regions } = useSelector((state) => state.region)
   const { imagesId } = useSelector((state) => state.listing)
   const [regionNames, setRegionNames] = useState([])
   const [formIsValid, setFormIsValid] = useState(false)
   const [error, setError] = useState({
      errorImage: null,
      errorHomeType: null,
      errorRegion: null,
   })
   const [values, setValues] = useState({
      images: [],
      regionId: '',
      homeType: '',
   })
   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
   } = useForm({ mode: 'onChange' })
   const input = {
      maxNumberOfGuests: {
         ...register('maxNumberOfGuests', {
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
      town: {
         ...register('town', {
            required: 'Obligatory field',
         }),
      },
      address: {
         ...register('address', {
            required: 'Obligatory field',
         }),
      },
   }
   const onDrop = (files) => {
      const img = URL.createObjectURL(files[0])
      setValues({
         ...values,
         images: [...values.images, { img, id: Math.random().toString() }],
      })
      dispatch(uploadImageListing(files[0]))
   }
   const deleteImgHandler = (id) => {
      setValues({
         ...values,
         images: values.images.filter((el) => el.id !== id),
      })
   }
   const changeRadionButtonHandler = (e) => {
      setValues({ ...values, homeType: e.target.value })
   }

   const changeSelectHandler = (regionId) => {
      setValues({ ...values, regionId })
   }
   useEffect(() => {
      if (
         values.homeType !== '' &&
         values.regionId !== '' &&
         values.images.length > 0
      ) {
         setFormIsValid(true)
      } else {
         setFormIsValid(false)
      }
   }, [values])
   const submitHandler = (data) => {
      if (formIsValid) {
         dispatch(
            addListing({
               ...data,
               regionId: values.regionId,
               type: values.homeType,
               images: imagesId,
               price: Number(data.price),
               maxNumberOfGuests: Number(data.maxNumberOfGuests),
            })
         )
         reset({
            // maxNumberOfGuests: '',
            // price: '',
            // town: '',
            // description: '',
            // address: '',
            // title: '',
         })
      }
   }
   const onError = () => {
      if (values.images.length === 0 && !values.homeType && !values.regionId) {
         setError({
            errorImage: 'add at least one photo',
            errorHomeType: 'Obligatory field',
            errorRegion: 'Obligatory field',
         })
      } else if (values.images.length === 0 && !values.homeType) {
         setError({
            errorImage: 'add at least one photo',
            errorHomeType: 'Obligatory field',
            errorRegion: '',
         })
      } else if (!values.regionId && !values.homeType) {
         setError({
            errorImage: '',
            errorHomeType: 'Obligatory field',
            errorRegion: 'Obligatory field',
         })
      } else if (!values.regionId && values.images.length === 0) {
         setError({
            errorImage: 'add at least one photo',
            errorHomeType: '',
            errorRegion: 'Obligatory field',
         })
      } else if (!values.regionId) {
         setError({
            errorImage: '',
            errorHomeType: '',
            errorRegion: 'Obligatory field',
         })
      } else if (values.images.length === 0) {
         setError({
            errorImage: 'add at least one photo',
            errorHomeType: '',
            errorRegion: '',
         })
      } else if (!values.homeType) {
         setError({
            errorImage: '',
            errorHomeType: 'Obligatory field',
            errorRegion: '',
         })
      } else {
         setError({
            errorImage: '',
            errorHomeType: '',
            errorRegion: '',
         })
      }
   }
   useEffect(() => {
      dispatch(getRegions())
   }, [])
   useEffect(() => {
      setRegionNames(
         regions.map((el) => {
            return { label: el.title, value: el.id }
         })
      )
   }, [regions])
   return (
      <FormContainer>
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
            files={values.images}
         />
         <ErrorMessage>{error && error.errorImage}</ErrorMessage>
         <Br />
         <Title>Home type</Title>
         <Flex margin="10px 0 0 0" gap="50px">
            <Flex gap="13px" align="center">
               <RadioButton
                  value="APARTMENT"
                  onChange={changeRadionButtonHandler}
               />
               <Label>Apartment</Label>
            </Flex>
            <Flex gap="13px" align="center">
               <RadioButton
                  onChange={changeRadionButtonHandler}
                  value="HOUSE"
               />{' '}
               <Label>House</Label>
            </Flex>
         </Flex>
         <ErrorMessage>{error && error.errorHomeType}</ErrorMessage>
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
               data={regionNames}
               width="100%"
               name="Please, select the region"
               onChange={changeSelectHandler}
            />
         </Flex>

         <ErrorMessage>{error && error.errorRegion}</ErrorMessage>
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
            <Button
               onClick={handleSubmit(submitHandler, onError)}
               width="200px"
            >
               submit
            </Button>
         </Flex>
      </FormContainer>
   )
}
const FormContainer = styled.div`
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
