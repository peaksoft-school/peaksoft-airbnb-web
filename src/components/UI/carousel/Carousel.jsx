/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import styled from 'styled-components'
import BtnCarousel, { StyledButton } from './BtnCarousel'
import Flex from '../ui-for-positions/Flex'
import { mergePhotosLinksIntoServerBaseUrl } from '../../../utils/helpers/general'
import Title from '../typography/Title'
import { MdImageNotSupported } from 'react-icons/md'
import uuid from 'react-uuid'

export default function Slider({ dataSlider = [] }) {
   const [slideIndex, setSlideIndex] = useState(1)

   const nextSlide = () => {
      if (slideIndex !== dataSlider.length) {
         setSlideIndex(slideIndex + 1)
      } else if (slideIndex === dataSlider.length) {
         setSlideIndex(1)
      }
   }

   const prevSlide = () => {
      if (slideIndex !== 1) {
         setSlideIndex(slideIndex - 1)
      } else if (slideIndex === 1) {
         setSlideIndex(dataSlider.length)
      }
   }

   const moveDot = (index) => {
      setSlideIndex(index)
   }

   return (
      <ContainerSlider StyledButton={StyledButton}>
         {(dataSlider.length > 0 && (
            <Flex>
               {dataSlider.map((image, index) => {
                  return (
                     <div
                        key={index}
                        className={
                           slideIndex === index + 1
                              ? 'slide active-anim'
                              : 'slide'
                        }
                     >
                        <img
                           src={mergePhotosLinksIntoServerBaseUrl(
                              image.image.smallImagePath
                           )}
                           alt=""
                        />
                     </div>
                  )
               })}
               <BtnCarousel moveSlide={nextSlide} direction="next" />
               <BtnCarousel moveSlide={prevSlide} direction="prev" />

               <ContainerDots>
                  {Array.from({ length: dataSlider.length }).map(
                     (item, index) => (
                        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                        <div
                           key={uuid()}
                           onClick={() => moveDot(index + 1)}
                           className={
                              slideIndex === index + 1 ? 'dot active' : 'dot'
                           }
                        />
                     )
                  )}
               </ContainerDots>
            </Flex>
         )) || (
            <ContainerNotFoundPhotos>
               <Title color="#2e3443" uppercase>
                  <b>Not Found Photos</b>
               </Title>
               <MdImageNotSupported color="#2e3443" fontSize={50} />
            </ContainerNotFoundPhotos>
         )}
      </ContainerSlider>
   )
}
const ContainerNotFoundPhotos = styled(Flex)`
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
   flex-direction: column;
   border: 1px solid #999999;
   background: #f7f7f7;
`
const ContainerDots = styled.div`
   position: absolute;
   bottom: 10px;
   left: 50%;
   transform: translateX(-50%);
   display: flex;
   opacity: 0;
   transition: all 0.5s;
   display: flex;
   align-items: center;
   .dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      margin: 0 5px;
      background: #f7f7f7;
   }
   .dot.active {
      background: #ffbe58;
      width: 7px;
      height: 7px;
   }
`
const ContainerSlider = styled.div`
   width: 100%;
   height: 100%;
   position: relative;
   overflow: hidden;
   :hover {
      ${({ StyledButton }) => StyledButton} {
         opacity: 1;
      }
      ${ContainerDots} {
         opacity: 1;
      }
   }

   .slide {
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
      transition: opacity ease-in-out 0.4s;
   }
   .prev {
      top: 50%;
      left: 10px;
      transform: translateY(-60%);
      background-color: #828282;
      width: 30px;
      height: 30px;
      :hover {
         background-color: #ffbe58;
      }
   }

   .next {
      top: 50%;
      right: 10px;
      transform: translateY(-60%);
      background-color: #828282;
      width: 30px;
      height: 30px;
      :hover {
         background-color: #ffbe58;
      }
   }

   .slide img {
      min-width: 100%;
      height: 100%;
      object-fit: cover;
   }
   .active-anim {
      opacity: 1;
   }
`
