import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
   getDataFromLocalStorage,
   saveToLocalStorage,
} from '../../utils/helpers/general'

const AntTabs = styled(Tabs)({
   maxWidth: '820px',
   borderBottom: '1px solid #C4C4C4',
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
      '@media(max-width:765px)': {
         margin: '0 auto',
      },
   })
)

const ProfileTabs = () => {
   const navigate = useNavigate()
   const [tabValue, setTabValue] = useState(
      getDataFromLocalStorage('tabs') || 0
   )

   const handleChange = (event, newValue) => {
      setTabValue(newValue)
   }

   // if (tabValue === 0) {
   //    navigate('/profile/bookings')
   // }
   // if (tabValue === 1) {
   //    navigate('/profile/my-announcements')
   // }

   useEffect(() => {
      saveToLocalStorage('tabs', tabValue)
      if (tabValue === 0) {
         navigate('/profile/bookings')
      }
      if (tabValue === 1) {
         navigate('/profile/my-announcements')
      }
   }, [tabValue])
   return (
      <Box sx={{ width: '100%' }}>
         <Box sx={{ bgcolor: 'none' }}>
            <AntTabs
               value={tabValue}
               onChange={handleChange}
               aria-label="ant example"
            >
               <AntTab label="Bookings" />
               <AntTab label="My announcement" />
            </AntTabs>
            <br />
         </Box>
      </Box>
   )
}

export default ProfileTabs
