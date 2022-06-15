import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const AntTabs = styled(Tabs)({
   width: '100%',
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

const ProjectTabs = ({ firstPath, secondPath }) => {
   const navigate = useNavigate()
   const { pathname } = useLocation()
   const [tabValue, setTabValue] = useState(0)

   const handleChange = (event, newValue) => {
      setTabValue(newValue)
   }
   const path = pathname.split('/').at(-1)
   const firstPathName = firstPath.split('/').at(-1)
   useEffect(() => {
      if (path === firstPathName) {
         setTabValue(0)
      } else {
         setTabValue(1)
      }
   }, [pathname])
   return (
      <Box sx={{ width: '100%' }}>
         <Box sx={{ bgcolor: 'none' }}>
            <AntTabs
               value={tabValue}
               onChange={handleChange}
               aria-label="ant example"
            >
               <AntTab
                  onClick={() => navigate(`${firstPath}`)}
                  label="Bookings"
               />
               <AntTab
                  onClick={() => navigate(`${secondPath}`)}
                  label="My announcement"
               />
            </AntTabs>
            <br />
         </Box>
      </Box>
   )
}

export default ProjectTabs
