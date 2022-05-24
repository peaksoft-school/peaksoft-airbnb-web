/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import styled from 'styled-components'
import { MdOutlineSearchOff } from 'react-icons/md'
import Flex from '../ui-for-positions/Flex'

const NotFound = () => {
   return (
      <Container>
         <Flex justify="center" direction="column" align="center" gap="12px">
            <MdOutlineSearchOff className="icon" fontSize={100} />
            <H1>nothing found</H1>
         </Flex>
      </Container>
   )
}
const H1 = styled.h1`
   font-size: 40px;
   text-transform: uppercase;
   font-family: 'Inter';
   @media (max-width: 500px) {
      font-size: 20px;
   }
`
const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   max-width: 1000px;
   width: calc(100% - 4rem);
   margin: 0 auto;
   color: #2a344d;
`
export default NotFound
