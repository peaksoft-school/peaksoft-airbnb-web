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
import { useSelector } from 'react-redux'
import { getSomeGiven, saveToLocalStorage } from '../../utils/helpers/general'

const SelectsForFilter = ({ total, setFilter, setSort, filter, sort }) => {
   const [showDrawer, setShowDrawer] = useState(false)
   const [regionsId, setRegionsId] = useState([])
   const { regions } = useSelector((state) => state.region)

   const examinationValue = (id) => {
      return filter.regionIds.some((item) => item === id)
   }
   const changeSelectRegionIdHandler = (id) => {
      if (!examinationValue(id))
         setFilter({ ...filter, regionIds: [...filter.regionIds, id] })

      if (id === 'All') setFilter({ ...filter, regionIds: [] })
   }
   const changeSelectTypeHandler = (value) => {
      setFilter({ ...filter, type: value })
      if (value === 'All') setFilter({ ...filter, type: '' })
   }
   const changeSelectPriceHandler = (value) => {
      setSort({ ...sort, price: value })
      if (value === 'All') setSort({ ...sort, price: '' })
   }
   const changeSelectPopularHandler = (value) => {
      setSort({ ...sort, popular: value })
      if (value === 'All') setSort({ ...sort, popular: '' })
   }

   useEffect(() => {
      saveToLocalStorage('regions', filter.regionIds)
   }, [filter.regionIds])

   useEffect(() => {
      setRegionsId([{ title: 'All', id: 'All' }, ...regions])
   }, [regions])
   return (
      <>
         <SelectsForFilterMobile
            isVisible={showDrawer}
            onClose={() => setShowDrawer(false)}
            onChange={changeSelectRegionIdHandler}
            setSort={setSort}
            setFilter={setFilter}
            filter={filter}
            sort={sort}
         />
         <Flex
            gap="10px"
            wrap="wrap"
            align="center"
            justify="space-between"
            width="100%"
         >
            <Flex align="center" gap="5px">
               {(filter.regionIds.length > 0 &&
                  filter.regionIds.map((region) => (
                     <Title key={region} uppercase>
                        {regions.length &&
                           getSomeGiven(region, regions, 'id').title}
                     </Title>
                  ))) || <Title>TOTAL</Title>}
               <Text>({total})</Text>
            </Flex>
            <FilterMenu onClick={() => setShowDrawer(true)}>
               <Text size="16px">Filter</Text>
               <MenuFilter />
            </FilterMenu>
            <ContainerSelects>
               <Select
                  width="270px"
                  onChange={(value) => changeSelectRegionIdHandler(value)}
                  data={regionsId}
                  name="Filter by region"
                  value="id"
                  label="title"
               />
               <Select
                  width="270px"
                  onChange={(value) => changeSelectTypeHandler(value)}
                  data={SORT_BY_TYPE}
                  name="Filter by home type"
                  value="value"
                  label="label"
                  defaultValue={
                     getSomeGiven(filter.type, SORT_BY_TYPE, 'value').label ||
                     ''
                  }
               />
               <Select
                  width="270px"
                  onChange={(value) => changeSelectPopularHandler(value)}
                  data={SORT_BY_POPULAR}
                  name="Sort by"
                  value="value"
                  label="label"
                  defaultValue={
                     getSomeGiven(sort.popular, SORT_BY_POPULAR, 'value')
                        .label || ''
                  }
               />
               <Select
                  width="270px"
                  onChange={(value) => changeSelectPriceHandler(value)}
                  data={SORT_BY_PRICE}
                  name="Sort by price"
                  value="value"
                  label="label"
                  defaultValue={
                     getSomeGiven(sort.price, SORT_BY_PRICE, 'value').label ||
                     ''
                  }
               />
            </ContainerSelects>
         </Flex>
      </>
   )
}
const ContainerSelects = styled(Flex)`
   align-items: center;
   gap: 10px;
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
