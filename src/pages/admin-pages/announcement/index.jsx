import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Cards from './Cards'
import { getListings } from '../../../store/listingSlice'
import LoadingPage from '../../../components/UI/loader/LoadingPage'
import { LISTING_STATUSES } from '../../../utils/constants/general'
import Pagination from '../../../components/pagination/Pagination'

const Announcement = () => {
   const dispatch = useDispatch()
   const { listings, isLoading } = useSelector((state) => state.listing)
   const { PENDING } = LISTING_STATUSES
   const { total } = listings
   const [params, setParams] = useSearchParams()
   const page = params.get('page')
   const [pagination, setPagination] = useState(Number(page) || 1)
   useEffect(() => {
      dispatch(
         getListings({
            filterBy: { status: PENDING },
            sortBy: { isViewed: 'ASC' },
            pagination,
         })
      )
      setParams({ page: pagination })
   }, [pagination])
   const paginationHandler = (event, value) => setPagination(value)
   const countOfPages = total / 12
   return (
      <WrapperContainer>
         <TitleApplication>Announcement</TitleApplication>
         <Flex>
            <ContainerList>
               <Flex width="100%" gap="13px" wrap="wrap">
                  {(isLoading && (
                     <LoadingPage width="210px" height="270px" />
                  )) || <Cards listings={listings.data} />}
               </Flex>
            </ContainerList>
         </Flex>
         <Flex
            align="center"
            justify="center"
            margin="20px 0 120px 0"
            width="100%"
         >
            {countOfPages > 1 && (
               <Pagination
                  onChange={paginationHandler}
                  count={Math.ceil(countOfPages)}
                  page={pagination}
               />
            )}
         </Flex>
      </WrapperContainer>
   )
}
const TitleApplication = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   margin: 25px 0;
   text-transform: uppercase;
   color: #000000;
`
const WrapperContainer = styled.div`
   max-width: 1660px;
   width: 100%;
   margin: 0 auto;
   padding: 130px 10px 10px 10px;
`

const ContainerList = styled.div`
   max-width: 1660px;
   width: 100%;
   padding-bottom: 8rem;
`

export default Announcement
