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
import { useLocation } from 'react-router-dom'
import LoadingPage from '../../../components/UI/loader/LoadingPage'

const Region = () => {
   const { state } = useLocation()
   const dispatch = useDispatch()
   const { listing, region } = useSelector((state) => state)
   const [pagination, setPagination] = useState(1)
   const [sort, setSort] = useState({
      popular: [],
      price: '',
   })
   const [filter, setFilter] = useState({
      regionIds: [state] || [],
      type: '',
   })
   const { listings, isLoading } = listing
   const { regions } = region

   const getTitle = (id) => {
      try {
         const region = regions.find((el) => el.id === id)
         return region && region.title
      } catch (error) {
         console.log(error.message)
      }
   }

   const examinationValue = (id) => {
      return filter.regionIds.some((item) => item === id)
   }

   const changeSelectRegionIdHandler = (id) => {
      if (!examinationValue(id)) {
         setFilter({
            ...filter,
            regionIds: [...filter.regionIds, id],
         })
      }
      if (id === 'All') {
         setFilter({
            ...filter,
            regionIds: [],
         })
      }
   }
   const changeSelectTypeHandler = (value) => {
      setFilter({
         ...filter,
         type: value,
      })
   }
   const changeSelectPriceHandler = (value) => {
      setSort({
         ...sort,
         price: value,
      })
      if (value === 'All') setSort({ ...sort, price: '' })
   }
   const changeSelectPopularHandler = () => {}

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
      dispatch(getListings({ sort, filter, pagination }))
   }, [filter, sort, pagination])
   return (
      <Container>
         <GlobalStyle />
         <SelectsForFilter
            selectRegion={changeSelectRegionIdHandler}
            selectType={changeSelectTypeHandler}
            selectPrice={changeSelectPriceHandler}
            selectPopular={changeSelectPopularHandler}
            // onChangeMobileVersion={changeForFilterMobileVersion}
         />
         <Flex wrap="wrap" align="center" margin="40px 0" gap="10px">
            {filter.regionIds.map((regionId) => (
               <Tag
                  key={regionId}
                  onClick={() => clearFilteredRegionIds(regionId)}
                  content={getTitle(regionId)}
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
               count={Math.ceil(listings.total / 4)}
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
