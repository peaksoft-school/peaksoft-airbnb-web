import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { createTheme, ThemeProvider } from '@mui/material'
import action from '../../../assets/icons/Action.svg'
import Title from '../../../components/UI/typography/Title'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#646464',
      color: theme.palette.common.white,
      fontSize: 14,
   },
   [`&.${tableCellClasses.body}`]: {
      border: 0,
      fontSize: 16,
   },
}))
const customTheme = createTheme({
   palette: {
      main: '#E5E5E5',
      hover: ' #D8D8D8',
   },
})

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   '&:nth-of-type(odd)': {
      color: '#363636',
      background: theme.palette.main,
   },
   '&:hover': {
      backgroundColor: theme.palette.hover,
   },
}))

const users = [
   {
      id: 1,
      name: 'Daniar Almazbekov',
      contact: 'daniar@gmail.com',
      booking: 2,
      announcement: 4,
   },
   {
      id: 2,
      name: 'Daniar Almazbekov',
      contact: 'daniar@gmail.com',
      booking: 2,
      announcement: 5,
   },
   {
      id: 3,
      name: 'Daniar Almazbekov',
      contact: 'daniar@gmail.com',
      booking: 2,
      announcement: 4,
   },
   {
      id: 4,
      name: 'Daniar Almazbekov',
      contact: 'daniar@gmail.com',
      booking: 2,
      announcement: 4,
   },
   {
      id: 5,
      name: 'Daniar Almazbekov',
      contact: 'daniar@gmail.com',
      booking: 2,
      announcement: 4,
   },
]

export default function Users() {
   const [usersData, setUsersData] = useState(users)

   const actionHandler = (id) => {
      setUsersData(usersData.filter((el) => el.id !== id))
   }
   return (
      <ThemeProvider theme={customTheme}>
         <TableContainer
            sx={{
               width: '97%',
               margin: '0 auto',
               minWidth: '810px',
               padding: '10px',
            }}
         >
            <Title uppercase>Users</Title>
            <Table>
               <TableHead>
                  <TableRow>
                     <StyledTableCell>№</StyledTableCell>
                     <StyledTableCell>Name</StyledTableCell>
                     <StyledTableCell>Contact</StyledTableCell>
                     <StyledTableCell>Booking</StyledTableCell>
                     <StyledTableCell>Announcement</StyledTableCell>
                     <StyledTableCell align="center">Action</StyledTableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {usersData.map((user, index) => (
                     <StyledTableRow key={user.id}>
                        <StyledTableCell>{index + 1}</StyledTableCell>
                        <StyledTableCell>{user.name}</StyledTableCell>
                        <StyledTableCell>{user.contact}</StyledTableCell>
                        <StyledTableCell>{user.booking}</StyledTableCell>
                        <StyledTableCell>{user.announcement}</StyledTableCell>
                        <StyledTableCell
                           onClick={() => actionHandler(user.id)}
                           align="center"
                        >
                           <img src={action} alt="action" />
                        </StyledTableCell>
                     </StyledTableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </ThemeProvider>
   )
}
