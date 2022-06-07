/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import styled from 'styled-components'
import { BsFillGeoAltFill } from 'react-icons/bs'

const ToggleCheckbox = (props) => {
   return (
      <Switch className="switch-holder">
         <SwitchLabel className="switch-label">
            <i className="fa fa-bluetooth-b" />
            <BsFillGeoAltFill />
         </SwitchLabel>
         <div className="switch-toggle">
            <SwitchInput {...props} type="checkbox" id="bluetooth" />
            <label className="label" htmlFor="bluetooth" />
         </div>
      </Switch>
   )
}
const Switch = styled.div`
   width: 100px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   color: #21253e;
   font-size: 20px;
   input + .label {
      position: relative;
      display: inline-block;
      width: 90px;
      height: 40px;
      border-radius: 20px;
      margin: 0;
      margin-left: 20px;
      cursor: pointer;
      box-shadow: inset -8px -8px 15px rgba(255, 255, 255, 0.6),
         inset 10px 10px 10px rgba(0, 0, 0, 0.25);
   }
   input + .label::before {
      font-family: 'Inter';
      position: absolute;
      content: 'OFF';
      font-size: 13px;
      text-align: center;
      line-height: 25px;
      top: 8px;
      left: 8px;
      width: 35px;
      height: 25px;
      border-radius: 20px;
      background-color: #eeeeee;
      box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5),
         3px 3px 5px rgba(0, 0, 0, 0.25);
      transition: 0.3s ease-in-out;
   }
`
const SwitchLabel = styled.label`
   padding: 0 20px 0 10px i {
      margin-right: 5px;
   }
`
const SwitchInput = styled.input`
   position: absolute;
   opacity: 0;
   z-index: -2;
   :checked + .label::before {
      left: 50%;
      content: 'ON';
      color: #fff;
      background-color: #2a2746;
      box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5), 3px 3px 5px #191a39;
   }
`

export default ToggleCheckbox
