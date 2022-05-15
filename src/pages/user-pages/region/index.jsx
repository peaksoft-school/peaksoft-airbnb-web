import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Text from '../../../components/UI/typography/Text'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import SelectsForFilter from '../../../components/selects-for-filter/SelectsForFilter'
import Cards from './Cards'
import Tag from './Tags'
import Pagination from '../../../components/pagination/Pagination'

const Region = () => {
   const [valueSelects, setValueSelects] = useState([])

   const changeSelectHandler = (valueSelect) =>
      setValueSelects([...valueSelects, valueSelect])

   const changeForFilterMobileVersion = (event) => {
      const { value, checked } = event.target
      if (checked) setValueSelects([...valueSelects, value])
      else setValueSelects(valueSelects.filter((item) => item !== value))
   }
   return (
      <Container>
         <GlobalStyle />
         <SelectsForFilter
            onChange={changeSelectHandler}
            onChangeMobileVersion={changeForFilterMobileVersion}
         />
         <Flex wrap="wrap" align="center" margin="40px 0" gap="10px">
            <Tag content="Appartment" dark />
            <Tag content="Popular" />
            <ClearAll>Clear all</ClearAll>
         </Flex>
         <Cards />
         <Flex margin="80px 0 140px 0" width="100%" justify="center">
            <Pagination count={10} />
         </Flex>
      </Container>
   )
}
const Container = styled.div`
   padding: 1rem;
   max-width: 1260px;
   margin: 0 auto;
   width: 100%;
`

const ClearAll = styled(Text)`
   text-decoration: underline;
   cursor: pointer;
`
const GlobalStyle = createGlobalStyle`
   body{
      background: #f7f7f7;
   }
`

export default Region
