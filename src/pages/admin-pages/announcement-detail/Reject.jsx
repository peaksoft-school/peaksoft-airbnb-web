import { useState } from 'react'
import styled from 'styled-components'
import Title from '../../../components/UI/typography/Title'
import Modal from '../../../components/UI/modal/Modal'
import TextArea from '../../../components/UI/text-fields/TextArea'

import Flex from '../../../components/UI/ui-for-positions/Flex'
import CancelButton from '../../../components/UI/buttons/CancelButton'
// import Button from '../../../components/UI/buttons/Button'
import PositionedSnackbar from '../../../components/UI/snackbar/Snackbar'

const Rejects = ({ onClose, isVisible = true }) => {
   //    const [files, setFiles] = useState([])
   const [value, setValue] = useState('')

   //    const onDrop = (file) => {
   //       const img = URL.createObjectURL(file[0])
   //       setFiles([...files, { img, id: Date.now() }])
   //    }

   //    const removePhotosHandler = (id) => {
   //       setFiles(files.filter((element) => element.id !== id))
   //    }

   const textAreaChangeHandler = (e) =>
      setValue({ ...value, feedbackDescription: e.target.value })
   //    const changeRatingHandler = (ratingValue) =>
   //       setValue({ ...value, rating: ratingValue })
   return (
      <Modal width="474px" onClose={onClose} isVisible={isVisible}>
         <ContainerReject>
            <Flex justify="center" margin="0 0 20px 0">
               <Title>REJECT</Title>
            </Flex>

            <TextArea
               placeholder="Write the reason for your rejection"
               onChange={textAreaChangeHandler}
               value={value.feedbackDescription}
            />

            <Flex margin="20px 0 0 0" width="100%" gap="50px" justify="end">
               <CancelButton width="100px" />
               {/*  <Button>ACCEPT</Button> */} <PositionedSnackbar />
            </Flex>
         </ContainerReject>
      </Modal>
   )
}
const ContainerReject = styled.div`
   /* width: 474px; */
   /* height: 259px; */
   /* max-width: 700px; */
`

export default Rejects
