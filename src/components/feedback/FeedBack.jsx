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

const FeedBack = ({ onClose, isVisible }) => {
   const [files, setFiles] = useState([])
   const [value, setValue] = useState({
      feedbackDescription: '',
      rating: 0,
      photosFeedback: null,
   })

   const onDrop = (file) => {
      const img = URL.createObjectURL(file[0])
      setFiles([...files, { img, id: Date.now() }])
   }

   const removePhotosHandler = (id) => {
      setFiles(files.filter((element) => element.id !== id))
   }

   const textAreaChangeHandler = (e) =>
      setValue({ ...value, feedbackDescription: e.target.value })
   const changeRatingHandler = (ratingValue) =>
      setValue({ ...value, rating: ratingValue })
   return (
      <Modal width="720px" onClose={onClose} isVisible={isVisible}>
         <ContainerFeedBack>
            <Flex justify="center" margin="0 0 20px 0">
               <Title>LEAVE FEEDBACK</Title>
            </Flex>
            <Flex gap="20px" align="center">
               <ImagePicker
                  onDrop={onDrop}
                  files={files}
                  deleteHandler={removePhotosHandler}
               />
            </Flex>
            <RatingFeedBack value={value.rating} onChange={changeRatingHandler}>
               RATE
            </RatingFeedBack>
            <Flex margin="10px 0 10px 0">
               <Title color="#828282" width="74px" height="19px">
                  Feedback
               </Title>
            </Flex>
            <TextArea
               placeholder="Share your impressions about this place"
               onChange={textAreaChangeHandler}
               value={value.feedbackDescription}
            />

            <Flex margin="20px 0 0 0" width="100%" gap="50px" justify="end">
               <CancelButton width="100px" />
               <Button>PUBLIC</Button>
            </Flex>
         </ContainerFeedBack>
      </Modal>
   )
}
const ContainerFeedBack = styled.div`
   max-width: 700px;
`

export default FeedBack
