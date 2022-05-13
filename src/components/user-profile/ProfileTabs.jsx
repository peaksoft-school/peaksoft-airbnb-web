import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useState } from 'react'

const AntTabs = styled(Tabs)({
   borderBottom: '1px solid #e8e8e8',
   '& .MuiTabs-indicator': {
      backgroundColor: '#363636',
   },
})

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
   ({ theme }) => ({
      marginLeft: '10rem',
      textTransform: 'none',
      border: 'none',
      minWidth: 0,
      [theme.breakpoints.up('sm')]: {
         minWidth: 0,
      },
      fontWeight: theme.typography.fontWeightRegular,
      color: 'rgba(0, 0, 0, 0.85)',
      fontFamily: [
         '-apple-system',
         'BlinkMacSystemFont',
         '"Segoe UI"',
         'Roboto',
         '"Helvetica Neue"',
         'Arial',
         'sans-serif',
         '"Apple Color Emoji"',
         '"Segoe UI Emoji"',
         '"Segoe UI Symbol"',
         '"Inherit"',
      ].join(','),
      '&:hover': {
         color: '#363636',
         opacity: 1,
      },
      '&.Mui-selected': {
         color: '#363636',
         fontWeight: theme.typography.fontWeightMedium,
      },
   })
)

const ProfileTabs = () => {
   const [tabValue, setTabValue] = useState(0)

   const handleChange = (event, newValue) => {
      setTabValue(newValue)
   }

   return (
      <Box sx={{ width: '820px' }}>
         <Box sx={{ bgcolor: 'none' }}>
            <AntTabs
               value={tabValue}
               onChange={handleChange}
               aria-label="ant example"
            >
               <AntTab label="Bookings" />
               <AntTab label="My announcement" />
            </AntTabs>
         </Box>
      </Box>
   )
}

export default ProfileTabs
