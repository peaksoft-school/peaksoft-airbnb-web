/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import styled from 'styled-components'
import BtnCarousel, { StyledButton } from './BtnCarousel'
import Flex from '../ui-for-positions/Flex'

export default function Slider({ dataSlider = [],...props }) {
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
         <Flex>
            {dataSlider.map((obj, index) => {
               return (
                  <div
                     key={obj.id}
                     className={
                        slideIndex === index + 1 ? 'slide active-anim' : 'slide'
                     }
                  >
                     <img src={obj.img} alt="" />
                  </div>
               )
            })}
            <BtnCarousel moveSlide={nextSlide} direction="next" />
            <BtnCarousel moveSlide={prevSlide} direction="prev" />

            <ContainerDots>
               {Array.from({ length: 4 }).map((item, index) => (
                  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                  <div
                     onClick={() => moveDot(index + 1)}
                     className={slideIndex === index + 1 ? 'dot active' : 'dot'}
                  />
               ))}
            </ContainerDots>
         </Flex>
      </ContainerSlider>
   )
}
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
   height: 191px;
   @media (max-width: 425px) {
      width: 100%;
   }
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
