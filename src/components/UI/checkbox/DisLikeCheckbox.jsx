import React from 'react'
import styled from 'styled-components'
import dislike from '../../../assets/icons/disLike.svg'
import likeChecked from '../../../assets/icons/dislikeChecked.svg'

const DisLikeCheckbox = ({ disabled, ...props }) => {
   return (
      <Label>
         <LikeInput disabled={disabled} {...props} type="checkbox" />
         <Span />
      </Label>
   )
}

const Span = styled.span`
   position: absolute;
   top: 0px;
   left: 0;
   height: 20px;
   width: 20px;
   background: url(${dislike});
   background-repeat: no-repeat;
   background-size: contain;
   transition: 0.3s;
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
   padding-left: 25px;
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
export default DisLikeCheckbox
