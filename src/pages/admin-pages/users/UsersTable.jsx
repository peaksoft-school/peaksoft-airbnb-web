import styled from 'styled-components'
import {
   Table,
   TableBody,
   TableCell,
   tableCellClasses,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'
import DeleteIcon from '../../../assets/icons/Action.svg'
import Title from '../../../components/UI/typography/Title'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import media from '../../../utils/helpers/media'

const StyledTableCell = styled(TableCell)(() => ({
   [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#646464',
      color: 'white',
      fontSize: 14,
   },
   [`&.${tableCellClasses.body}`]: {
      border: 0,
      fontSize: 14,
      color: '#363636',
   },
}))

const StyledTableRow = styled(TableRow)(() => ({
   '&:nth-of-type(odd)': {
      background: '#E5E5E5',
   },
   '&:hover': {
      backgroundColor: '#D8D8D8',
   },
}))
const UsersTable = (props) => {
   const deleteHandler = (id) => {
      props.delete(id)
   }
   return (
      <Container>
         <Flex margin="0 0 20px 0">
            <Title uppercase size="20px">
               Users
            </Title>
         </Flex>
         <Table>
            <Head>
               <TableRow>
                  <StyledTableCell>№</StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Contact</StyledTableCell>
                  <StyledTableCell>Booking</StyledTableCell>
                  <StyledTableCell>Announcement</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
               </TableRow>
            </Head>
            <Body>
               {props.users.map((user, index) => (
                  <StyledTableRow key={user.id}>
                     <TableNumber>{index + 1}</TableNumber>
                     <TableName>{user.name}</TableName>
                     <TableContact>{user.contact}</TableContact>
                     <TableBooking>{user.booking}</TableBooking>
                     <TableAnnouncement>{user.announcement}</TableAnnouncement>
                     <StyledTableCell
                        onClick={() => deleteHandler(user.id)}
                        align="center"
                     >
                        <img src={DeleteIcon} alt="action" />
                     </StyledTableCell>
                  </StyledTableRow>
               ))}
            </Body>
         </Table>
      </Container>
   )
}

export default UsersTable

const Container = styled(TableContainer)`
   max-width: 1300px;
   width: 98px;
   margin: 0 auto;
   padding: 130px 16px 0 16px;
`

const Head = styled(TableHead)`
   min-width: 780px;
`

const Body = styled(TableBody)`
   min-width: 780px;
`

const TableNumber = styled(StyledTableCell)`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   ${media.mobile`
        font-size: 16px;
        line-height: 19px;
   `}
`

const TableName = styled(StyledTableCell)`
   min-width: 210px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   ${media.mobile`
        font-size: 16px;
        line-height: 19px;
   `}
`

const TableContact = styled(StyledTableCell)`
   min-width: 210px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   ${media.mobile`
        font-size: 16px;
        line-height: 19px;
   `}
`

const TableBooking = styled(StyledTableCell)`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   ${media.mobile`
        font-size: 16px;
        line-height: 19px;
   `}
`

const TableAnnouncement = styled(StyledTableCell)`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   ${media.mobile`
        font-size: 16px;
        line-height: 19px;
   `}
`
