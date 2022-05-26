import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { listingActions } from '../../store/listingSlice'
import Input from '../UI/text-fields/Input'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'

let blockedUseEffect = true
const SearchInputRegionsPage = () => {
   const dispatch = useDispatch()

   const { searchValue } = useSelector((state) => state.listing)
   const [search, setSearch] = useState(searchValue)

   const inputChangeHandler = useCallback(
      (e) => {
         setSearch(e.target.value)
      },
      [search]
   )
   useEffect(() => {
      if (blockedUseEffect) {
         blockedUseEffect = false
         return
      }
      const timeOut = setTimeout(() => {
         const filterBy = { search }
         dispatch(listingActions.saveSearchValue({ ...filterBy }))
      }, 600)
      return () => {
         clearTimeout(timeOut)
      }
   }, [search])
   return (
      <FormUserSearch>
         <SearchIconWrapper>
            <SearchIconStyled />
         </SearchIconWrapper>
         <Search
            defaultValue={search}
            onChange={inputChangeHandler}
            placeholder="Search"
         />
      </FormUserSearch>
   )
}
const SearchIconWrapper = styled.div`
   transform: translateY(-50%);
   position: absolute;
   top: 55%;
   left: 15px;
`
const FormUserSearch = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   margin: 0 10px;
`
const Search = styled(Input)`
   width: 100%;
   margin: 0 10px 0 0;
   padding-left: 45px;
   font-family: 'Inter';
   color: #464666;
   :focus {
      box-shadow: -1px 3px 12px rgba(187, 195, 197, 0.6);
   }
`
const SearchIconStyled = styled(SearchIcon)`
   cursor: pointer;
`
export default SearchInputRegionsPage
