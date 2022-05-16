/* eslint-disable import/no-unresolved */
import * as React from 'react'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'

import Button from '../buttons/Button'

const PositionedSnackbar = () => {
   const [state, setState] = React.useState({
      open: false,
      vertical: 'top',
      horizontal: 'center',
   })

   const { vertical, horizontal, open } = state

   const handleClick = (newState) => () => {
      setState({ open: true, ...newState })
   }

   const handleClose = () => {
      setState({ ...state, open: false })
   }

   const buttons = (
      <Button
         onClick={handleClick({
            vertical: 'top',
            horizontal: 'center',
         })}
      >
         SEND
      </Button>
   )

   return (
      <div>
         {buttons}
         <Snackbar
            width="612px"
            height="48px"
            background="#F0FFF1"
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            // onClose={handleClose}
            message="Successfully sent :)"
            key={vertical + horizontal}
            action={
               <IconButton
                  aria-label="close"
                  color="inherit"
                  sx={{ p: 0.5 }}
                  onClick={handleClose}
               >
                  X
               </IconButton>
            }
         />
      </div>
   )
}
export default PositionedSnackbar
