import React from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { ReactComponent as IconImagePicker } from '../../../assets/icons/imagepicker.svg'
import Flex from '../ui-for-positions/Flex'
import Text from '../typography/Text'
import Title from '../typography/Title'

function ImagePicker({ onDrop, files, deleteHandler }) {
   const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: 'image/*',
   })
   return (
      <Flex align="center" gap="16px">
         <Flex gap="5px" wrap="wrap">
            {files.map((img) => (
               <GroupImg>
                  <Image key={img} src={img.img} />
                  <DeleteBtn onClick={() => deleteHandler(img.id)}>
                     DELETE
                  </DeleteBtn>
               </GroupImg>
            ))}
            {files.length < 4 && (
               <ImagePickerStyled {...getRootProps()}>
                  <input {...getInputProps()} type="file" />
                  <IconImagePicker />
               </ImagePickerStyled>
            )}
         </Flex>
         {files.length === 0 && (
            <Flex direction="column">
               <Title color="#266BD3">Add photos to the review</Title>
               <Text>
                  it will become more noticeable and even more useful. You can
                  upload up to 4 potos
               </Text>
            </Flex>
         )}
      </Flex>
   )
}
const DeleteBtn = styled.button`
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.2);
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   border: none;
   color: whitesmoke;
   cursor: pointer;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   display: none;
`
const GroupImg = styled.div`
   width: 100px;
   height: 100px;
   position: relative;
   cursor: pointer;
   :hover ${DeleteBtn} {
      display: block;
   }
`
const Image = styled.img`
   width: 100%;
   height: 100%;
   @media (max-width: 425px) {
      width: 60px;
      height: 60px;
   }
`
const ImagePickerStyled = styled.div`
   width: 100px;
   height: 100px;
   background: #f3f3f3;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   :hover {
      background: #f3f3f3;
      border: 1px solid #c4c4c4;
   }
   @media (max-width: 425px) {
      width: 60px;
      height: 60px;
   }
`
export default ImagePicker
