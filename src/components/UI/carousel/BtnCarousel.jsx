/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'
import leftArrow from '../../../assets/icons/leftArrow.svg'
import rightArrow from '../../../assets/icons/rightArrow.svg'

export default function BtnCarousel({ direction, moveSlide }) {
   return (
      <StyledButton
         onClick={moveSlide}
         className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
      >
         <img src={direction === 'next' ? rightArrow : leftArrow} />
      </StyledButton>
   )
}

export const StyledButton = styled.button`
   border-radius: 50%;
   background: #f1f1f1;
   border: none;
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: 0.5s;
   cursor: pointer;
   opacity: 0;
`
