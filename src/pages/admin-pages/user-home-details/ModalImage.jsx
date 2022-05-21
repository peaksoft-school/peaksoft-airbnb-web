import React, { useState } from 'react'
import styled from 'styled-components'
import Backdrop from '../../../components/UI/modal/BackDrop'

const ModalImage = ({ images }) => {
   const [selectedImage, setSelectedImage] = useState(null)
   return (
      <ImageStyle>
         {images.map((data) => (
            <img
               onClick={() => setSelectedImage(data.img)}
               key={data.id}
               src={data.img}
               alt="home"
            />
         ))}
         {selectedImage && (
            <SelectedImage
               src={selectedImage}
               onClick={() => setSelectedImage(false)}
            />
         )}
         {selectedImage && <Backdrop onClose={() => setSelectedImage(false)} />}
      </ImageStyle>
   )
}
const ImageStyle = styled.div`
   display: flex;
   gap: 10px;
   margin-top: 20px;
`
const SelectedImage = styled.img`
   width: 500px;
   height: 500px;
   object-fit: cover;
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 11;
`
export default ModalImage
