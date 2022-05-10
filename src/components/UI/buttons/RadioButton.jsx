import React from 'react'
import styled from 'styled-components'

const RadioButton = (props) => {
   return (
      <RadioBtn>
         <input type="radio" name="hause" {...props} />
         <span />
      </RadioBtn>
   )
}
const RadioBtn = styled.label`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-wrap: nowrap;
   margin: 12px 0;
   cursor: pointer;
   position: relative;
   input {
      opacity: 0;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
   }
   span {
      width: 16px;
      height: 16px;
      border: 1px solid #c4c4c4;
      border-radius: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   span::before,
   span::after {
      content: '';
      width: inherit;
      height: inherit;
      border-radius: inherit;
      position: absolute;
      transform: scale(0);
   }
   span:before {
      background: #dd8a08;
      opacity: 0;
      transition: 0.3s;
   }
   span::after {
      background: #dd8a08;
      opacity: 0.4;
      transition: 0.6s;
   }
   input:checked + span::before {
      opacity: 1;
      transform: scale(0.7);
   }
   input:hover + span,
   input:focus + span {
      border: 1px solid #c4c4c4;
   }

   input:hover + span:before,
   input:focus + span:before {
      background: #dd8a08;
   }

   input:focus + span::after,
   input:active + span::after {
      opacity: 0.1;
      transform: scale(2.6);
   }
`

export default RadioButton
