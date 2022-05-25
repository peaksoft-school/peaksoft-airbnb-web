/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Text from '../../../components/UI/typography/Text'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import SelectsForFilter from '../../../components/selects-for-filter/SelectsForFilter'
import Cards from './Cards'
import Tag from './Tags'
import Pagination from '../../../components/pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { getListings } from '../../../store/listingSlice'
import { useLocation, useSearchParams } from 'react-router-dom'
import LoadingPage from '../../../components/UI/loader/LoadingPage'
import {
   getDataFromLocalStorage,
   getSomeGiven,
   paramsSet,
} from '../../../utils/helpers/general'
import { getRegions } from '../../../store/bookingSlice'
import Title from '../../../components/UI/typography/Title'

const Region = () => {
   const [params, setParams] = useSearchParams()
   const { state } = useLocation()
   const dispatch = useDispatch()
   const { listing, region } = useSelector((state) => state)
   const { listings, searchValue, isLoading } = listing
   const { regions } = region
   const homeType = params.get('type')
   const price = params.get('price')
   const popular = params.get('popular')
   const page = Number(params.get('page'))
   const regionsIds = getDataFromLocalStorage('regions')

   const [pagination, setPagination] = useState(page || 1)
   const [sort, setSort] = useState({
      popular: popular || '',
      price: price || '',
   })
   const [filter, setFilter] = useState({
      regionIds: (state && [state]) || regionsIds || [],
      type: homeType || '',
   })

   const filteredRegionIds = (id) => {
      const filteredRegions = filter.regionIds.filter(
         (regionId) => regionId !== id
      )
      setFilter({ ...filter, regionIds: filteredRegions })
   }

   const clearFilteredType = () => setFilter({ ...filter, type: '' })

   const clearSortPrice = () => setSort({ ...sort, price: '' })

   const clearSortPopular = () => setSort({ ...sort, popular: '' })

   const clearAllFilterAndSortHandler = () => {
      setFilter({ regionIds: [], type: '' })
      setSort({ popular: '', price: '' })
   }

   const paginationHandler = (event, value) => {
      setPagination(value)
   }

   useEffect(() => {
      const filterBy = {}
      const sortBy = {}
      if (searchValue) filterBy.search = searchValue

      if (filter.regionIds.length > 0) filterBy.regionIds = filter.regionIds

      if (filter.type) filterBy.type = filter.type

      if (sort.popular) sortBy.popular = sort.popular

      if (sort.price) sortBy.price = sort.price

      paramsSet(pagination, 'page', setParams, params)
      paramsSet(searchValue, 'search', setParams, params)
      paramsSet(sort.price, 'price', setParams, params)
      paramsSet(sort.popular, 'popular', setParams, params)
      paramsSet(filter.type, 'type', setParams, params)
      dispatch(getListings({ pagination, filterBy, sortBy }))
   }, [filter, sort, searchValue, pagination])

   useEffect(() => {
      dispatch(getRegions())
   }, [])

   let content = <Title>TOTAL</Title>

   if (searchValue !== '') {
      content = (
         <Title>
            <Text>Search for :</Text> "{searchValue}"
         </Title>
      )
   }
   if (!searchValue && filter.regionIds.length > 0) {
      content =
         filter.regionIds.length > 0 &&
         filter.regionIds.map((region) => (
            <Title key={region} uppercase>
               {regions.length && getSomeGiven(region, regions, 'id').title}
            </Title>
         ))
   }
   return (
      <Container>
         <GlobalStyle />
         <Flex width="100%" align="center" gap="10px" wrap="wrap">
            <Flex align="center" gap="5px">
               {content}
               <Text>({listings.total})</Text>
            </Flex>
            <SelectsForFilter
               regionIds={filter.regionIds}
               total={listings.total}
               setSort={setSort}
               setFilter={setFilter}
               filter={filter}
               sort={sort}
            />
         </Flex>

         <Flex wrap="wrap" align="center" margin="40px 0" gap="13px">
            {filter.regionIds.map((regionId) => (
               <Tag
                  key={regionId}
                  onClick={() => filteredRegionIds(regionId)}
                  content={
                     regions.length &&
                     getSomeGiven(regionId, regions, 'id').title
                  }
                  dark
               />
            ))}
            {filter.type && (
               <Tag onClick={clearFilteredType} content={filter.type} />
            )}
            {sort.price && (
               <Tag onClick={clearSortPrice} content={sort.price} />
            )}
            {sort.popular && (
               <Tag onClick={clearSortPopular} content={sort.popular} />
            )}
            <ClearAll onClick={clearAllFilterAndSortHandler}>
               Clear all
            </ClearAll>
         </Flex>
         {(isLoading && <LoadingPage />) || <Cards listings={listings.data} />}

         <Flex margin="80px 0 140px 0" width="100%" justify="center">
            <Pagination
               onChange={paginationHandler}
               count={Math.ceil(listings.total / 16)}
               page={pagination}
            />
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
