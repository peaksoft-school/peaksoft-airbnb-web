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
import { useDispatch } from 'react-redux'
import { uploadImageFeedback } from '../../store/feedbackSlice'
import { useParams } from 'react-router-dom'

const FeedBack = ({ onClose, isVisible }) => {
   const { house } = useParams()
   const dispatch = useDispatch()
   const [selectedImages, setSelectedImages] = useState({
      images: [],
      files: [],
   })

   const [value, setValue] = useState({
      comment: '',
      rating: 0,
   })

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

   const textAreaChangeHandler = (e) =>
      setValue({ ...value, comment: e.target.value })
   const changeRatingHandler = (ratingValue) =>
      setValue({ ...value, rating: ratingValue })

   const submitFeedbackHandler = () => {
      dispatch(
         uploadImageFeedback({
            dataFeedback: value,
            imagesFeedback: selectedImages.files,
            id: house,
         })
      )
   }
   return (
      <Modal width="720px" onClose={onClose} isVisible={isVisible}>
         <ContainerFeedBack>
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
               value={value.rating}
               onChange={changeRatingHandler}
            />
            <Flex margin="10px 0 10px 0">
               <Title color="#828282" width="74px" height="19px">
                  Feedback
               </Title>
            </Flex>
            <TextArea
               placeholder="Share your impressions about this place"
               onChange={textAreaChangeHandler}
               value={value.comment}
            />

            <Flex margin="20px 0 0 0" width="100%" gap="50px" justify="end">
               <CancelButton width="100px" onClose={onClose} />
               <Button onClick={submitFeedbackHandler}>PUBLIC</Button>
            </Flex>
         </ContainerFeedBack>
      </Modal>
   )
}
const ContainerFeedBack = styled.div`
   max-width: 700px;
`

export default FeedBack
