import React from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { ReactComponent as IconImagePicker } from '../../assets/icons/imagePickerIcon.svg'

function ImagePicker({ onDrop }) {
   const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: 'image/*',
   })
   return (
      <ImagePickerStyled {...getRootProps()}>
         <input {...getInputProps()} type="file" />
         <IconImagePicker />
      </ImagePickerStyled>
   )
}
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
`

export default ImagePicker
