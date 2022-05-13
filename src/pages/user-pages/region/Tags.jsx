import React from 'react'
import { IoMdClose } from 'react-icons/io'
import styled from 'styled-components'

const Tag = (props) => {
   return (
      <TagStyled {...props}>
         {props.content}
         <IoMdClose />
      </TagStyled>
   )
}
const TagStyled = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 10px;
   cursor: pointer;
   background: ${({ dark }) => (dark ? '#C4C4C4' : 'rgba(214, 214, 214, 0.2)')};
   padding: 0.4rem 0.8rem;
   font-family: 'Inter';
   color: ${({ dark }) => (dark ? '#F7F7F7' : '#828282')};
   :hover {
      opacity: 0.7;
   }
`
export default Tag
