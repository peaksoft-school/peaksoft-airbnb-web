import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Flex from '../UI/ui-for-positions/Flex'
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import media from '../../utils/helpers/media'
import frame from '../../assets/icons/Frame.svg'
import { fetchApi } from '../../api/fetchApi'

const InputSearch = () => {
   // const [regions, setRegions] = useState([])
   const [search, setSearch] = useState('')
   const { pathname } = useLocation()

   const getRegions = () => {
      fetchApi()
   }
   useEffect(() => {
      getRegions()
   }, [])

   const changeSearchHandler = (event) => {
      setSearch(event.target.value)
   }

   // const filteredRegions = regions.filter((regions) => {
   //    return regions.name.toLowerCase().includes(search.toLocaleLowerCase())
   // })

   if (pathname === '/main') {
      return (
         <DivInput>
            <img src={frame} alt="find" />
            <Input
               placeholder="Region, city , apartment, house..."
               onChange={changeSearchHandler}
               value={search}
            />
         </DivInput>
      )
   }
   return (
      <FlexSearch justify="end" align="center">
         <SearchIconWrapper>
            <SearchIcon />
         </SearchIconWrapper>
         <Search placeholder="search" onChange={changeSearchHandler} />
      </FlexSearch>
   )
}

const SearchIconWrapper = styled.div`
   transform: translate(40px, 2px);
`

const FlexSearch = styled(Flex)`
   width: 100%;
   ${media.tablet`
   width:300rem;
   `}
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
const Input = styled.input`
   width: 100%;
   height: 34px;
   border: none;
   font-size: 17px;
   outline: none;
`
const Search = styled(Input)`
   width: 100%;
   margin: 0 10px 0 0;
   padding-left: 45px;
`
export default InputSearch
