import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import Input from '../UI/text-fields/Input'

const InputSearch = () => {
   const [searchInput, setSearchInput] = useState('')
   const { pathname } = useLocation()

   let search = (
      <>
         <SearchIconWrapper>
            <SearchIconStyled />
         </SearchIconWrapper>
         <Search
            placeholder="search"
            onChange={(e) => setSearchInput(e.target.value)}
         />
      </>
   )

   if (pathname === '/main') {
      search = (
         <DivInput>
            <SearchIconStyled />
            <InputSearchMain
               placeholder="Region, city , apartment, house..."
               onChange={(e) => setSearchInput(e.target.value)}
               value={searchInput}
            />
         </DivInput>
      )
   }
   return search
}

const SearchIconWrapper = styled.div`
   transform: translate(40px, 2px);
`

const DivInput = styled.div`
   max-width: 725px;
   width: 100%;
   height: 42px;
   margin: 0 auto;
   background-color: white;
   display: flex;
   align-items: center;
   margin-top: 100px;
   & img {
      width: 18.62px;
      height: 18.62px;
      margin: 0 15px 0 15px;
      color: #7d7d7d;
   }
`
const InputSearchMain = styled.input`
   width: 100%;
   height: 34px;
   border: none;
   font-size: 17px;
   outline: none;
   color: #2c2c2c;
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
export default InputSearch
