import { useState } from 'react'
import styled from 'styled-components'
import Title from '../UI/typography/Title'
import RatingFeedBack from './RatingFeedBack'
import Modal from '../UI/modal/Modal'
import ImagePicker from '../UI/image-picker/ImagePicker'
import TextArea from '../UI/text-fields/TextArea'
import Flex from '../UI/ui-for-positions/Flex'
import CancelButton from '../UI/buttons/CancelButton'
import Button from '../UI/buttons/Button'
import uuid from 'react-uuid'
import { useDispatch, useSelector } from 'react-redux'
import { uploadImageFeedback } from '../../store/feedbackSlice'
import { useParams, useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Alert } from '@mui/material'
import Spinner from '../UI/loader/Spinner'

const FeedBack = ({ onClose, isVisible }) => {
   const [, setParams] = useSearchParams()
   const { house } = useParams()
   const dispatch = useDispatch()
   const { isLoading } = useSelector((state) => state.feedback)
   const [selectedImages, setSelectedImages] = useState({
      images: [],
      files: [],
   })
   const [ratingValue, setRatingValue] = useState(0)
   const {
      handleSubmit,
      setValue,
      register,
      reset,
      formState: { errors, isValid },
   } = useForm({
      defaultValues: {
         rating: 0,
      },
   })

   const feedback = {
      comment: {
         ...register('comment', {
            required: 'Obligatory field',
         }),
      },
      rating: {
         ...register('rating', {
            required: false,
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

   const removePhotosHandler = (index) => {
      setSelectedImages({
         ...selectedImages,
         images: selectedImages.images.filter((image, i) => i !== index),
         files: selectedImages.files.filter((file, i) => i !== index),
      })
   }

   const changeRatingHandler = (value) => {
      setValue('rating', value)
      setRatingValue(value)
   }

   const submitFeedbackHandler = (dataFeedback) => {
      const feedbackSuccess = () => {
         reset({ comment: '', rating: 0 })
         setSelectedImages({
            images: [],
            files: [],
         })
         setParams('')
         setRatingValue(0)
      }
      dispatch(
         uploadImageFeedback({
            dataFeedback,
            imagesFeedback: selectedImages.files,
            id: house,
            feedbackSuccess,
         })
      )
   }
   const isValidate = errors?.comment && !isValid
   return (
      <Modal width="720px" onClose={onClose} isVisible={isVisible}>
         <ContainerFeedBack>
            {isValidate && (
               <Alert className="alert" severity="error">
                  {errors?.comment?.message}
               </Alert>
            )}
            <Flex justify="center" margin="0 0 20px 0">
               <Title>LEAVE FEEDBACK</Title>
            </Flex>
            <Flex gap="20px" align="center">
               <ImagePicker
                  onDrop={onDrop}
                  files={selectedImages.images}
                  deleteHandler={removePhotosHandler}
               />
            </Flex>
            <RatingFeedBack
               {...feedback.rating}
               value={ratingValue}
               onChange={changeRatingHandler}
            />
            <Flex margin="10px 0 10px 0">
               <Title color="#828282" width="74px" height="19px">
                  Feedback
               </Title>
            </Flex>
            <TextArea
               isValid={isValidate}
               {...feedback.comment}
               placeholder="Share your impressions about this place"
            />

            <Flex margin="20px 0 0 0" width="100%" gap="50px" justify="end">
               <CancelButton width="100px" onClick={onClose} />
               <Button onClick={handleSubmit(submitFeedbackHandler)}>
                  {isLoading ? <Spinner /> : 'PUBLIC'}
               </Button>
            </Flex>
         </ContainerFeedBack>
      </Modal>
   )
}
const ContainerFeedBack = styled.div`
   max-width: 700px;
   .alert {
      position: absolute;
      width: 100%;
      top: -46px;
      left: 0;
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

export default FeedBack
