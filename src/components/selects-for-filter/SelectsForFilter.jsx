import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Select from '../UI/select/Select'
import Text from '../UI/typography/Text'
import Title from '../UI/typography/Title'
import Flex from '../UI/ui-for-positions/Flex'
import media from '../../utils/helpers/media'
import { ReactComponent as MenuFilter } from '../../assets/icons/filtermenu.svg'
import SelectsForFilterMobile from './SelectsForFilterMobile'
import {
   SORT_BY_POPULAR,
   SORT_BY_PRICE,
   SORT_BY_TYPE,
} from '../../utils/constants/general'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getRegions } from '../../store/regionSlice'

const SelectsForFilter = ({
   selectRegion,
   selectType,
   selectPrice,
   selectPopular,
   onChangeMobileVersion,
}) => {
   const dispatch = useDispatch()
   const [showDrawer, setShowDrawer] = useState(false)
   const [regionsId, setRegionsId] = useState([])
   const { regions } = useSelector((state) => state.region)
   const { region } = useParams()
   useEffect(() => {
      dispatch(getRegions())
   }, [])
   useEffect(() => {
      setRegionsId([{ title: 'All', id: 'All' }, ...regions])
   }, [regions])
   return (
      <>
         <SelectsForFilterMobile
            isVisible={showDrawer}
            onClose={() => setShowDrawer(false)}
            onChange={onChangeMobileVersion}
         />
         <Flex wrap="wrap" align="center" justify="space-between" width="100%">
            <Title uppercase>
               {region} <Text>(45)</Text>
            </Title>
            <FilterMenu onClick={() => setShowDrawer(true)}>
               <Text size="16px">Filter</Text>
               <MenuFilter />
            </FilterMenu>
            <ContainerSelects>
               <Select
                  width="270px"
                  onChange={(value) => selectRegion(value)}
                  data={regionsId}
                  name="Sort by"
                  value="id"
                  label="title"
               />
               <Select
                  width="270px"
                  onChange={(value) => selectType(value)}
                  data={SORT_BY_TYPE}
                  name="Filter by home type"
                  value="value"
                  label="label"
               />
               <Select
                  width="270px"
                  onChange={(value) => selectPopular(value)}
                  data={SORT_BY_POPULAR}
                  name="Sort by"
                  value="value"
                  label="label"
               />
               <Select
                  width="270px"
                  onChange={(value) => selectPrice(value)}
                  data={SORT_BY_PRICE}
                  name="Filter by price"
                  value="value"
                  label="label"
               />
            </ContainerSelects>
         </Flex>
      </>
   )
}
const ContainerSelects = styled(Flex)`
   align-items: center;
   gap: 15px;
   flex-wrap: wrap;
   ${media.tablet`
     display:none;
  `}
`
const FilterMenu = styled.div`
   padding: 10px 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   border: 1px solid #c4c4c4;
   border-radius: 2px;
   cursor: pointer;
   opacity: 0.8;
   gap: 20px;
   display: none;
   :hover {
      opacity: 1;
   }
   ${media.tablet`
     display:block;
     display:flex;
  `}
`
export default SelectsForFilter
