import { useMemo } from 'react'
import { shallowEqual } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { paramsSet } from '../utils/helpers/general'

const useMemoizedListingFiltersAndSortings = () => {
   const [params, setParams] = useSearchParams()

   const memoizeFiltersAndSortings = useMemo(() => {
      const filterBy = { status: 'ACCEPTED' }
      const sortBy = {}
      let prevFilters

      return (sort, filter, pagination, location, searchValue) => {
         const filters = {
            ...sort,
            ...filter,
            location,
            searchValue,
            pagination,
         }
         if (location || searchValue) filterBy.search = searchValue || location
         else delete filterBy.search

         if (filter.regionIds.length > 0) filterBy.regionIds = filter.regionIds
         else delete filterBy.regionIds

         if (filter.type) filterBy.type = filter.type
         else delete filterBy.type

         if (sort.popular) sortBy.popular = sort.popular
         else delete sortBy.popular

         if (sort.price) sortBy.price = sort.price
         else delete sortBy.price

         if (shallowEqual(filters, prevFilters)) return false
         prevFilters = filters
         paramsSet(pagination, 'page', setParams, params)
         if (searchValue !== undefined)
            paramsSet(searchValue, 'search', setParams, params)
         paramsSet(sort.price, 'price', setParams, params)
         paramsSet(sort.popular, 'popular', setParams, params)
         paramsSet(filter.type, 'type', setParams, params)
         if (location !== undefined)
            paramsSet(location, 'location', setParams, params)

         return { filterBy, sortBy, pagination }
      }
   }, [])

   return {
      memoizeFiltersAndSortings,
   }
}

export default useMemoizedListingFiltersAndSortings
