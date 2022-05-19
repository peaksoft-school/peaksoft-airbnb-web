import styled from 'styled-components'
import BackgroundMain from '../../assets/images/PageMain.png'
import frame from '../../assets/icons/Frame.svg'
import Regions from './Regions'
import Flex from '../UI/ui-for-positions/Flex'
import media from '../../utils/helpers/media'
import Apartments from './Apartments'
import PopularHouse from './PopularHouse'
import Lastest from './Lastest'

const MainPage = () => {
   return (
      <Container>
         <MainPages>
            <Flex align="center" justify="center" direction="column">
               <h1>FIND A PLACE YOU WILL LOVE TO STAY AT</h1>
               <DivInput>
                  <img src={frame} alt="find" />
                  <Input placeholder="Region, city , apartment, house..." />
               </DivInput>
            </Flex>
         </MainPages>
         <Regions />
         <Apartments />
         <PopularHouse />
         <Lastest />
      </Container>
   )
}

const Container = styled.div`
   width: 100%;
   /* max-width: 1440px; */
   margin: 0 auto;
`

const MainPages = styled.div`
   padding-top: 349px;
   width: 100%;
   background: url(${BackgroundMain}) no-repeat;
   background-size: cover;
   background-position: center;
   background-attachment: fixed;
   height: 820px;
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
      font-size: 40px;
      line-height: 48px;
      text-transform: uppercase;
      color: #ffffff;
      ${media.tablet`
       font-size:26px;
     `}
   }
`

const Input = styled.input`
   width: 100%;
   height: 34px;
   border: none;
   font-size: 17px;
   outline: none;
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

export default MainPage
