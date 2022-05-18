import * as React from 'react'
import { Snackbar as MuiSnackbar } from '@mui/material'
import styled from 'styled-components'
import imageХ from '../../../assets/icons/VectorX.svg'

const PositionedSnackbar = (props) => {
   setTimeout(() => {
      props.delay(false)
   }, 6000)
   return (
      <StyledSnackbar
         severity={props.severity}
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
         }}
         open={props.open}
         message={
            <span>
               {props.title}
               <br />
               <p>{props.message}</p>
            </span>
         }
         action={<img src={imageХ} alt="x-icon" onClick={props.onClose} />}
      />
   )
}

const StyledSnackbar = styled(MuiSnackbar)`
   .MuiSnackbarContent-root {
      width: 615px;
      background-color: ${({ severity }) =>
         severity === 'success' ? '#F0FFF1' : '#FFF1F0'};
      padding: 4px 28px;
      position: relative;
      top: auto;
      @media (max-width: 620px) {
         width: 100%;
      }
   }
   .MuiSnackbarContent-message {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #000000;

      p {
         font-family: 'Inter';
         font-style: normal;
         font-weight: 400;
         font-size: 14px;
         line-height: 17px;
         color: #646464;
         margin-top: 4px;
      }
   }
   .MuiSnackbarContent-action {
      width: 50px;
      height: 50px;
      position: absolute;
      top: -2px;
      right: 0;
   }
`
export default PositionedSnackbar
