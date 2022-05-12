import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
// import Title from '../../../components/UI/typography/Title'
import { IoMdClose } from 'react-icons/io'
import Text from '../../../components/UI/typography/Text'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import SelectsForFilter from './SelectsForFilter'

const Region = () => {
   return (
      <Container>
         <GlobalStyle />
         <SelectsForFilter />
         <Flex align="center" margin="40px 0" gap="10px">
            <Tag>
               Popular
               <IoMdClose />
            </Tag>
            <Tag dark>
               Appartment
               <IoMdClose />
            </Tag>
            <ClearAll>Clear all</ClearAll>
         </Flex>
      </Container>
   )
}
const Container = styled.div`
   padding: 1rem;
   max-width: 1200px;
   margin: 0 auto;
   width: 100%;
`
const Tag = styled.div`
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
const ClearAll = styled(Text)`
   text-decoration: underline;
   cursor: pointer;
`
const GlobalStyle = createGlobalStyle`
   body{
      background: #f1f1f1;
   }
`

export default Region
