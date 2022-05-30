/* eslint-disable import/named */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import SelectsForFilter from '../../../components/selects-for-filter/SelectsForFilter'
import AllHousingCards from './AllHousingCards'
import AdminTag from './AdminTag'
import Pagination from '../../../components/pagination/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { getListings } from '../../../store/listingSlice'
import { useLocation, useSearchParams } from 'react-router-dom'
import LoadingPage from '../../../components/UI/loader/LoadingPage'
import Title from '../../../components/UI/typography/Title'
import {
   getDataFromLocalStorage,
   getSomeGiven,
} from '../../../utils/helpers/general'
import { getRegions } from '../../../store/regionSlice'
import { LISTING_STATUSES } from '../../../utils/constants/general'

const AllHousing = () => {
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
   const regionsIds = getDataFromLocalStorage('regions')
   const [pagination, setPagination] = useState(Number(page) || 1)
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

   const paginationHandler = (event, value) => setPagination(value)

   useEffect(() => {
      const filterBy = {
         status: LISTING_STATUSES.ACCEPTED,
      }
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
   }, [])

   return (
      <Container>
         <Flex width="100%" justify="space-between">
            <Flex margin="55px 0px 40px 0">
               <Title size="19px">ALL HOUSING</Title>
            </Flex>
            <Flex margin="46px 0 40px 0">
               <SelectsForFilter
                  regionIds={filter.regionIds}
                  total={listings.total}
                  setSort={setSort}
                  setFilter={setFilter}
                  filter={filter}
                  sort={sort}
               />
            </Flex>
         </Flex>
         <Flex
            wrap="wrap"
            align="center"
            gap="13px"
            width="100%"
            margin="0 20px 0 0"
         >
            {filter.regionIds.map((regionId) => (
               <AdminTag
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
               <AdminTag onClick={clearFilteredType} content={filter.type} />
            )}
            {sort.price && (
               <AdminTag onClick={clearSortPrice} content={sort.price} />
            )}
            {sort.popular && (
               <AdminTag onClick={clearSortPopular} content={sort.popular} />
            )}
         </Flex>
         {(isLoading && <LoadingPage width="210px" height="270px" />) || (
            <AllHousingCards listings={listings.data} />
         )}

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
   max-width: 1350px;
   width: 100%;
   margin: 0 auto;
   padding: 100px 12px 0px 12px;
   @media (max-width: 400px) {
      padding: 100px 25px;
   }
`

export default AllHousing
