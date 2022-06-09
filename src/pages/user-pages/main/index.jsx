import styled from 'styled-components'
import BackgroundMain from '../../../assets/images/piotr-burzynski-wvc9E16vIYY-unsplash.jpg'
import Regions from './Regions'
import media from '../../../utils/helpers/media'
import Apartments from './Apartments'
import PopularHouse from './PopularHouse'
import InputSearchMainPage from '../../../components/search-bar/InputSearchMainPage'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
   getPopularApartmemts,
   getTheLastestListings,
} from '../../../store/popularsSlice'

const MainPage = () => {
   const dispatch = useDispatch()
   const { popularApartments, theLastestListings } = useSelector(
      (state) => state.populars
   )
   const filterBy = { type: 'APARTMENT' }

   useEffect(() => {
      dispatch(
         getPopularApartmemts({
            filterBy,
            sortBy: { popular: 'DESC' },
            limit: 7,
         })
      )
      dispatch(
         getTheLastestListings({ sortBy: { createdAt: 'DESC' }, limit: 7 })
      )
   }, [])

   console.log(popularApartments)

   return (
      <Container>
         <MainPages>
            <div>
               <h1>FIND A PLACE YOU WILL LOVE TO STAY AT</h1>
               <InputSearchMainPage />
            </div>
         </MainPages>
         <Regions />
         <Apartments listings={popularApartments.data} />
         <PopularHouse />
         <Apartments listings={theLastestListings.data} lastest />
      </Container>
   )
}

const Container = styled.div`
   width: 100%;
   margin: 0 auto;
`

const MainPages = styled.div`
   width: 100%;
   display: grid;
   align-items: center;
   background: url(${BackgroundMain}) no-repeat;
   background-size: cover;
   background-position: center;
   background-attachment: fixed;
   min-height: ${`${window.innerHeight}px`};
   text-align: center;
   ${media.tablet`
   padding-left:20px;
   padding-right:20px;
   text-align:center;
   `}
   ${media.mobile`
      
   `}

   & h1 {
      font-family: 'Jenriv Titling';
      font-style: normal;
      font-weight: 400;
      font-size: 39px;
      line-height: 38px;
      text-transform: uppercase;
      color: #ffffff;
      ${media.tablet`
       font-size:26px;
     `}
   }
`

export default MainPage
