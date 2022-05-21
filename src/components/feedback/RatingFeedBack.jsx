import { Box, Rating, Typography } from '@mui/material'

const RatingFeedBack = ({ onChange, value, children }) => {
   return (
      <Box
         sx={{
            '& > legend': { mt: 2 },
         }}
      >
         <Typography component="legend" color="#828282" marginBottom="10px">
            {children}
         </Typography>
         <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
               onChange(newValue)
            }}
         />
      </Box>
   )
}

export default RatingFeedBack
