import * as React from 'react'
import styled from 'styled-components'
import { Pagination as MuiPagination } from '@mui/material'

const Paginations = (props) => {
   let content
   if (props.count !== 0) {
      content = <StyledPagination {...props} />
   }
   return content
}

const StyledPagination = styled(MuiPagination)`
   width: 350px;
   height: 22px;
   .MuiButtonBase-root {
      color: #bdbdbd;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
   }
   .MuiPaginationItem-root {
      &:hover {
         background-color: transparent;
      }
   }
   .Mui-selected {
      color: #dd8a08;
      background-color: transparent !important;
   }
   .MuiPaginationItem-icon {
      color: #dd8a08;
      width: 30px;
      height: 30px;
   }
`
export default Paginations
