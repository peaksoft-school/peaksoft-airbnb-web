/* eslint-disable array-callback-return */
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
import { getTitle } from '../../../utils/helpers/general'

const Region = () => {
   const [params, setParams] = useSearchParams()
   const filterByParams = JSON.parse(params.get('filterBy'))
   const { state } = useLocation()
   const dispatch = useDispatch()
   const { listing, region } = useSelector((state) => state)
   const { listings, isLoading } = listing
   const { regions } = region
   const [pagination, setPagination] = useState(1)
   const [sort, setSort] = useState({
      popular: [],
      price: '',
   })
   const [filter, setFilter] = useState({
      regionIds:
         (state && [state]) ||
         (filterByParams && filterByParams.regionIds) ||
         [],
      type: (filterByParams && filterByParams.type) || '',
   })
   console.log(filterByParams)
   const clearFilteredType = () => {
      setFilter({ ...filter, type: '' })
   }
   const clearSortPrice = () => {
      setSort({ ...sort, price: '' })
   }
   const clearFilteredRegionIds = (id) => {
      const filteredRegions = filter.regionIds.filter(
         (regionId) => regionId !== id
      )
      setFilter({ ...filter, regionIds: filteredRegions })
   }
   const clearAllFilterAndSortHandler = () => {
      setFilter({ regionIds: [], type: '' })
      setSort({ popular: [], price: '' })
   }
   useEffect(() => {
      const filterBy = {}
      const sortBy = {}
      const params = {
         page: Number(pagination) || 1,
      }
      if (filter.regionIds.length > 0) {
         filterBy.regionIds = filter.regionIds
      }
      if (filter.type) {
         filterBy.type = filter.type
      }
      if (sort.popular.length > 0) {
         sortBy.popular = sort.popular
      }
      if (sort.price) {
         sortBy.price = sort.price
      }
      if (Object.values(filterBy).length > 0) {
         params.filterBy = JSON.stringify(filterBy)
      }
      if (Object.values(sortBy).length > 0) {
         params.sortBy = JSON.stringify(sortBy)
      }
      dispatch(getListings({ params }))
      setParams(params)
   }, [filter, sort, pagination])
   return (
      <Container>
         <GlobalStyle />
         <SelectsForFilter
            regionIds={filter.regionIds}
            total={listings.total}
            setSort={setSort}
            setFilter={setFilter}
            filter={filter}
            sort={sort}
         />
         <Flex wrap="wrap" align="center" margin="40px 0" gap="13px">
            {filter.regionIds.map((regionId) => (
               <Tag
                  key={regionId}
                  onClick={() => clearFilteredRegionIds(regionId)}
                  content={getTitle(regionId, regions)}
                  dark
               />
            ))}
            {filter.type && (
               <Tag onClick={clearFilteredType} content={filter.type} />
            )}
            {sort.price && (
               <Tag onClick={clearSortPrice} content={sort.price} />
            )}
            <ClearAll onClick={clearAllFilterAndSortHandler}>
               Clear all
            </ClearAll>
         </Flex>
         {(isLoading && <LoadingPage />) || <Cards listings={listings.data} />}

         <Flex margin="80px 0 140px 0" width="100%" justify="center">
            <Pagination
               onChange={(e) => setPagination(e.target.innerText)}
               count={Math.ceil(listings.total / 12)}
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
