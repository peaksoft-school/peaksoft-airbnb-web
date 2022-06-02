import { Box, Rating, Typography } from '@mui/material'
import React from 'react'

const RatingFeedBack = React.forwardRef(({ onChange, value }, ref) => {
   return (
      <Box
         sx={{
            '& > legend': { mt: 2 },
         }}
      >
         <Typography component="legend" color="#828282" marginBottom="10px">
            Rate
         </Typography>
         <Rating
            ref={ref}
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
               onChange(newValue)
            }}
         />
      </Box>
   )
})

export default RatingFeedBack
