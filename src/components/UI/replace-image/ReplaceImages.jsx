import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from '../ui-for-positions/Flex'

const ReplaceImages = ({ dataSlider }) => {
   const [selectedImg, setSelectedImg] = useState(dataSlider[0])

   const [filterImg, setFilterImg] = useState(
      dataSlider.filter((img) => img.id !== selectedImg.id)
   )

   const imgHandler = (id, data) => {
      setSelectedImg(data)
      setFilterImg(dataSlider.filter((img) => img.id !== id))
   }
   return (
      <Container>
         <Flex width="100%" gap="20px">
            <img src={selectedImg.img} alt="Selected" />
         </Flex>
         <FlexImages>
            {filterImg.map((data) => (
               // <Image
               //    img={data.img}
               //    key={data.id}
               //    onClick={() => imgHandler(data.id, data)}
               // />
               <Img
                  key={data.id}
                  src={data.img}
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
   /* margin: auto; */
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;

   & img {
      max-width: 600px;
      width: 100%;
      height: auto;
      aspect-ratio: 15/13;
      object-fit: cover;
   }
`
const Img = styled.img`
   min-width: 100px;
   width: 100%;
   min-height: 100px;
   height: auto;
   /* aspect-ratio: 20/9; */
   object-fit: cover;
`
// const Image = styled.div`
//    max-width: 196px;
//    width: 100%;
//    padding: 20px;
//    height: auto;
//    /* max-height: 137px; */

//    background-image: url(${({ img }) => img});
//    background-size: cover;
//    object-fit: cover;
//    object-position: bottom;
// `

export default ReplaceImages
