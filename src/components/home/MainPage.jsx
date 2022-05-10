import styled from 'styled-components'
import BackgroundMain from '../../assets/images/PageMain.png'
import frame from '../../assets/icons/Frame.svg'
import Regions from './Regions'

const MainPage = () => {
   return (
      <Container>
         <MainPages>
            <div>Layout</div>
            <h1>FIND A PLACE YOULL LOVE TO STAY AT</h1>
            <DivInput>
               <img src={frame} alt="find" />
               <Input placeholder="Region, city , apartment, house..." />
            </DivInput>
         </MainPages>
         <Regions />
      </Container>
   )
}

const Container = styled.div`
   width: 100%;
   margin: 0 auto;
`

const MainPages = styled.div`
   width: 100%;
   background: url(${BackgroundMain}) no-repeat;
   background-size: cover;
   background-position: center;
   background-attachment: fixed;
   height: 820px;
   text-align: center;

   & h1 {
      font-family: 'Jenriv Titling';
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 48px;
      text-transform: uppercase;
      margin-top: 349px;
      color: #ffffff;
      /* width: 712px; */
   }
`

const Input = styled.input`
   width: 830px;
   height: 34px;
   border: none;
   font-size: 17px;
   outline: none;
`

const DivInput = styled.div`
   width: 725px;
   height: 42px;
   margin: 0 auto;
   background-color: white;
   display: flex;
   align-items: center;
   margin-top: 100px;
   & img {
      width: 25px;
      height: 25px;
      margin: 0 15px 0 15px;
   }
   & Input {
      width: 720px;
      height: 40px;
   }
`

export default MainPage
