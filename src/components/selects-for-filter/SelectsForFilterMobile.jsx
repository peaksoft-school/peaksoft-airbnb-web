/* eslint-disable import/no-unresolved */
import React from 'react'
import styled from 'styled-components'
import Drawer from '../UI/drawer/Drawer'
import Title from '../UI/typography/Title'
import Text from '../UI/typography/Text'
import Flex from '../UI/ui-for-positions/Flex'
import RadioButton from '../UI/buttons/RadioButton'
import Grid from '../UI/ui-for-positions/Grid'
import Checkbox from '../UI/checkbox/Checkbox'
import {
   SORT_BY_POPULAR,
   SORT_BY_PRICE,
   SORT_BY_TYPE,
} from '../../utils/constants/general'
import { useSelector } from 'react-redux'
import Location from '../location/Location'

const SelectsForFilterMobile = ({
   setFilter,
   setSort,
   filter,
   sort,
   ...props
}) => {
   const { regions } = useSelector((state) => state.region)
   const changeSelectRegionIdHandler = (e) => {
      const { value, checked } = e.target
      if (checked)
         setFilter({ ...filter, regionIds: [...filter.regionIds, value] })
      else
         setFilter({
            ...filter,
            regionIds: filter.regionIds.filter((region) => region !== value),
         })
   }
   const changeSelectTypeHandler = (e) =>
      setFilter({ ...filter, type: e.target.value })

   const changeSelectPriceHandler = (e) =>
      setSort({ ...sort, price: e.target.value })

   const changeSelectPopularHandler = (e) =>
      setSort({ ...sort, popular: e.target.value })

   const clearAllFilterAndSortHandler = () => {
      setFilter({ regionIds: [], type: '' })
      setSort({ popular: '', price: '' })
   }
   return (
      <Drawer {...props}>
         <Flex
            align="center"
            justify="space-between"
            width="80%"
            margin="10px 0 30px 0"
         >
            <Title size="19px">Filter</Title>
            <ClearAll onClick={clearAllFilterAndSortHandler}>
               Clear all
            </ClearAll>
         </Flex>
         <Flex gap="12px" direction="column">
            <Flex width="100%" margin="20px 0">
               <Location />
            </Flex>
            <Title>Sort by</Title>
            <Flex margin="0 0 20px 0" direction="column">
               {SORT_BY_POPULAR.map((el) => (
                  <Label key={el.label}>
                     <RadioButton
                        checked={el.value === sort.popular}
                        value={el.value}
                        onChange={changeSelectPopularHandler}
                        name="popular"
                     />
                     {el.label}
                  </Label>
               ))}
            </Flex>
            <Title>Price</Title>
            <Flex margin="0 0 20px 0" direction="column">
               {SORT_BY_PRICE.map((el) => (
                  <Label id="price" key={el.label}>
                     <RadioButton
                        checked={el.value === sort.price}
                        value={el.value}
                        onChange={changeSelectPriceHandler}
                        name="price"
                        id="price"
                     />
                     {el.label}
                  </Label>
               ))}
            </Flex>
            <Title>Type</Title>
            <Flex margin="0 0 20px 0" direction="column">
               {SORT_BY_TYPE.map((el) => (
                  <Label key={el.label}>
                     <RadioButton
                        checked={el.value === filter.type}
                        value={el.value}
                        onChange={changeSelectTypeHandler}
                        name="type"
                     />
                     {el.label}
                  </Label>
               ))}
            </Flex>
            <Title>Region</Title>
            <Grid gap="15px" columns="1fr 1fr">
               {regions.map((el) => (
                  <Label key={el.id}>
                     <Checkbox
                        checked={filter.regionIds.some(
                           (element) => element === el.id
                        )}
                        value={el.id}
                        onChange={changeSelectRegionIdHandler}
                     />
                     {el.title}
                  </Label>
               ))}
            </Grid>
         </Flex>
      </Drawer>
   )
}
const ClearAll = styled(Text)`
   text-decoration: underline;
   cursor: pointer;
`
const Label = styled.label`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   display: flex;
   align-items: center;
   gap: 10px;
`
export default SelectsForFilterMobile
