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
} from '../../../utils/helpers/general'
import { getRegions } from '../../../store/bookingSlice'

const Region = () => {
   const [params, setParams] = useSearchParams()
   const { state } = useLocation()
   const dispatch = useDispatch()
   const { listing, region } = useSelector((state) => state)
   const { listings, isLoading } = listing
   const { regions } = region
   const homeType = params.get('type')
   const price = params.get('price')
   const popular = params.get('popular')
   const page = params.get('page')
   const [pagination, setPagination] = useState(Number(page) || 1)
   const [sort, setSort] = useState({
      popular: popular || '',
      price: price || '',
   })
   const [filter, setFilter] = useState({
      regionIds: (state && [state]) || [],
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
   const paginationHandler = (page) => setPagination(page)

   useEffect(() => {
      const filterBy = {}
      const sortBy = {}
      const queryParams = {}
      if (filter.regionIds.length > 0) {
         filterBy.regionIds = filter.regionIds
      }
      if (filter.type) {
         filterBy.type = filter.type
         queryParams.type = filter.type
      }
      if (sort.popular) {
         sortBy.popular = sort.popular
         queryParams.popular = sort.popular
      }
      if (sort.price) {
         sortBy.price = sort.price
         queryParams.price = sort.price
      }
      dispatch(getListings({ filterBy, sortBy, pagination }))
      setParams({ page: pagination, ...queryParams })
   }, [filter, sort, pagination])

   useEffect(() => {
      dispatch(getRegions())
      setFilter({ ...filter, regionIds: getDataFromLocalStorage('regions') })
   }, [])

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
               onChange={(e) => paginationHandler(e.target.innerText)}
               count={Math.ceil(listings.total / 16)}
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
