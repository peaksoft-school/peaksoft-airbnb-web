import React, { useState } from 'react'
import styled from 'styled-components'
import { getImageFullUrl } from '../../../utils/helpers/general'
import Flex from '../ui-for-positions/Flex'

const ReplaceImages = ({ dataSlider = [] }) => {
   const [selectedImg, setSelectedImg] = useState(
      (dataSlider && dataSlider[0]) || null
   )

   const [filterImg, setFilterImg] = useState(
      dataSlider.length > 0 &&
         dataSlider.filter((img) => img.id !== selectedImg.id)
   )

   const imgHandler = (id, data) => {
      setSelectedImg(data)
      setFilterImg(dataSlider.filter((img) => img.id !== id))
   }
   return (
      <Container>
         <Flex width="100%" gap="20px">
            <img
               className="img"
               src={getImageFullUrl(
                  (selectedImg?.image && selectedImg.image.largeImagePath) || ''
               )}
               alt="Selected"
            />
         </Flex>
         <FlexImages>
            {Array.isArray(filterImg) &&
               filterImg.map((data) => (
                  <Img
                     key={data.id}
                     src={getImageFullUrl(data.image.largeImagePath)}
                     alt="dog"
                     onClick={() => imgHandler(data.id, data)}
                  />
               ))}
         </FlexImages>
      </Container>
   )
}
const FlexImages = styled(Flex)`
   gap: 20px;
   margin: 20px 0;
   @media (max-width: 600px) {
      gap: 13px;
      margin: 13px 0;
   }
`
const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;

   & .img {
      max-width: 600px;
      width: 100%;
      height: auto;
      aspect-ratio: 15/13;
      object-fit: cover;
      @media (max-width: 1000px) {
         min-width: 100%;
      }
   }
`
const Img = styled.img`
   min-width: 100px;
   width: 100%;
   min-height: 100px;
   height: auto;
   object-fit: cover;
`

export default ReplaceImages
