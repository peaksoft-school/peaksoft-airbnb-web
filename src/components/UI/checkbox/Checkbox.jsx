import React from 'react'
import styled from 'styled-components'

const Checkbox = (props) => {
   return (
      <Label>
         <input {...props} id="cbx" type="checkbox" className="invisible" />
         <div className="checkbox">
            <svg width="20px" height="20px" viewBox="0 0 20 20">
               <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z" />
               <polyline points="4 11 8 15 16 6" />
            </svg>
         </div>
      </Label>
   )
}
const Label = styled.label`
   user-select: none;
   cursor: pointer;
   height: 22px;
   margin-bottom: 0;
   input:checked + .checkbox {
      border-color: #dd8a08;
   }
   input:checked + .checkbox svg path {
      fill: #dd8a08;
   }
   input:checked + .checkbox svg polyline {
      stroke-dashoffset: 0;
   }
   :hover .checkbox svg path {
      stroke-dashoffset: 0;
   }
   .checkbox {
      position: relative;
      top: 2px;
      float: left;
      margin-right: 8px;
      width: 20px;
      height: 20px;
      border: 2px solid #c8ccd4;
      border-radius: 3px;
   }
   .checkbox svg {
      position: absolute;
      top: -2px;
      left: -2px;
   }
   .checkbox svg path {
      fill: none;
      stroke: #dd8a08;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 71px;
      stroke-dashoffset: 71px;
      transition: all 0.6s ease;
   }
   .checkbox svg polyline {
      fill: none;
      stroke: #fff;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-dasharray: 18px;
      stroke-dashoffset: 18px;
      transition: all 0.3s ease;
   }
   > span {
      pointer-events: none;
      vertical-align: middle;
   }

   .cntr {
      position: absolute;
      top: 45%;
      left: 0;
      width: 100%;
      text-align: center;
   }

   .invisible {
      position: absolute;
      z-index: -1;
      width: 0;
      height: 0;
      opacity: 0;
   }
`

export default Checkbox
