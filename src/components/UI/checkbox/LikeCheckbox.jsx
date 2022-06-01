import React from 'react'
import styled from 'styled-components'
import like from '../../../assets/icons/like.svg'
import likeChecked from '../../../assets/icons/likeChecked.svg'

const LikeCheckbox = ({ ...props }) => {
   return (
      <Label>
         <LikeInput {...props} type="checkbox" />
         <Span />
      </Label>
   )
}

const Span = styled.span`
   position: absolute;
   top: 0;
   left: 0;
   height: 25px;
   width: 25px;
   background: url(${like});
   background-repeat: no-repeat;
   background-size: contain;
   transition: 0.3s;
   :active {
      width: 27px;
      height: 27px;
   }
`
const LikeInput = styled.input`
   position: absolute;
   opacity: 0;
   cursor: pointer;
   height: 0;
   width: 0;
   transition: 0.3s;
   :checked ~ ${Span} {
      background: url(${likeChecked});
      background-repeat: no-repeat;
      background-size: contain;
   }
   :checked ~ ${Span}:checked {
      width: 27px;
      height: 27px;
   }
`
const Label = styled.label`
   display: block;
   position: relative;
   padding-left: 35px;
   margin-bottom: 12px;
   cursor: pointer;
   font-size: 22px;
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
   display: flex;
   justify-content: center;
   align-items: center;
`
export default LikeCheckbox
