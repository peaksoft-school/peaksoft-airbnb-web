import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { listingActions } from '../../store/listingSlice'
import Input from '../UI/text-fields/Input'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import useDebounce from '../../hooks/useDebounce'
import Flex from '../UI/ui-for-positions/Flex'
import media from '../../utils/helpers/media'

let blockedUseEffect = true
const SearchInputRegionsPage = () => {
   const dispatch = useDispatch()
   const debounceSearch = useDebounce(sendDataToStore, 600)

   function sendDataToStore() {
      const filterBy = { search }
      return dispatch(listingActions.saveSearchValue({ ...filterBy }))
   }
   const { searchValue } = useSelector((state) => state.listing)
   const [search, setSearch] = useState(searchValue)

   const inputChangeHandler = (e) => {
      setSearch(e.target.value)
   }

   useEffect(() => {
      if (blockedUseEffect) {
         blockedUseEffect = false
      }
      debounceSearch()
   }, [debounceSearch])

   return (
      <Container>
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
      </Container>
   )
}
const Container = styled(Flex)`
   width: 100%;
   align-items: center;
   ${media.tablet`
      width : 100%;
   `}
`
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
