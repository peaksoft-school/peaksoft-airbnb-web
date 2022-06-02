import React, { useState } from 'react'
import styled from 'styled-components'
import { mergePhotosLinksIntoServerBaseUrl } from '../../utils/helpers/general'
import Backdrop from '../UI/modal/BackDrop'

const ModalImage = ({ images = [] }) => {
   const [selectedImage, setSelectedImage] = useState(null)
   return (
      <ImageStyle>
         {images.map((image) => (
            <img
               className="img"
               onClick={() =>
                  setSelectedImage(
                     mergePhotosLinksIntoServerBaseUrl(
                        image.image.largeImagePath
                     )
                  )
               }
               key={image.id}
               src={mergePhotosLinksIntoServerBaseUrl(
                  image.image.smallImagePath
               )}
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
   gap: 2px;
   margin-top: 20px;
   .img {
      width: 70px;
      height: 70px;
      object-fit: cover;
   }
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
