import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Title from '../../../components/UI/typography/Title'
import geo from '../../../assets/icons/IconGeo.svg'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import star from '../../../assets/icons/Star.svg'
import media from '../../../utils/helpers/media'

const PopularHouse = () => {
   const homes = [
      {
         id: 1,
         url: 'https://media.architecturaldigest.com/photos/59f1e7eab56ff84bcaa873e7/master/w_4600,h_3067,c_limit/Oregon%20-%20Courtesy%20CIRE_Luxe%20Platinum%20Properties.jpg',
         main: 'Asman guest house',
         geo: '723510 Osh Muzurbek Alimbekov 9/7',
         money: 26,
         star: 4.4,
      },
      {
         id: 2,
         url: 'https://res.akamaized.net/domain/image/upload/t_web/c_crop,h_658,w_1024,x_0,y_110/c_fill,w_1200,h_630/v1637126360/10_Wentworth_St_Dover_Heights_NSW_1_1_okrvos.jpg',
         main: 'Asman guest house',
         geo: '723510 Osh Muzurbek Alimbekov 9/7',
         money: 53,
         star: 4.6,
      },
      {
         id: 3,
         url: 'https://i.pinimg.com/originals/21/70/34/217034611f44eaa0e2782da4263006cd.jpg',
         main: 'Asman guest house',
         geo: '723510 Osh Muzurbek Alimbekov 9/7',
         money: 48,
         star: 4.9,
      },
   ]

   return (
      <Container>
         <Flex justify="space-between" width="98%" margin="170px 0 0 0">
            <Title size="20px" uppercase color="#363636" weight="700">
               Popular House
            </Title>
            <LinkStyled to="/">View all</LinkStyled>
         </Flex>
         <TextMain>
            Helping you make the best decisions in buying, selling, & renting
            your last minute locations.
         </TextMain>
         <MainDiv>
            {homes.map((home) => {
               return (
                  <HomeDiv key={home.id}>
                     <DivHouse>
                        <ImgHomeInDiv src={home.url} alt="home" />
                        <DivStar>
                           <img src={star} alt="star" />
                           <h3>{home.star}</h3>
                        </DivStar>
                     </DivHouse>
                     <MainTitle>{home.main}</MainTitle>
                     <Flex>
                        <ImgGeo src={geo} alt="geo" />
                        <AdressTitle>{home.geo}</AdressTitle>
                     </Flex>
                     <Flex>
                        <PriceTitle>${home.money}</PriceTitle>
                        <AdressTitle>/ day</AdressTitle>
                     </Flex>
                  </HomeDiv>
               )
            })}
         </MainDiv>
      </Container>
   )
}

const Container = styled.div`
   max-width: 1262px;
   width: 100%;
   margin: 0 auto;
   padding: 1rem;
`

const MainDiv = styled.div`
   display: flex;
   ${media.tablet`
       flex-direction: column;
   `}
`

const LinkStyled = styled(Link)`
   color: #363636;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   border-bottom: 1px solid #363636;
`

const HomeDiv = styled.div`
   margin: 60px 20px 0 0;
   ${media.tablet`
       margin: 16px 0 20px 0;
   `}
`

const DivStar = styled.div`
   padding: 0.2em 1em;
   background: rgba(52, 52, 52, 0.5);
   border-radius: 2px;
   text-align: center;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: 0;
   right: 0;
   margin: 20px;
   & h3 {
      display: inline;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
      margin-left: 5px;
   }
   & img {
      width: 13.5px;
      height: 12.5px;
      margin-top: 5px;
   }
`

const TextMain = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   color: #363636;
   margin-top: 60px;
   ${media.tablet`
      margin-top: 16px;
   `}
`

const DivHouse = styled.div`
   max-width: 410px;
   width: 100%;
   position: relative;
   ${media.tablet`
       max-width: 700px;
       width: 100%;
   `}
   ${media.mobile`
       max-width: 410px;
       width: 100%
   `}
`

const ImgHomeInDiv = styled.img`
   max-width: 410px;
   width: 100%;
   height: 484px;
   object-fit: cover;
   ${media.tablet`
       max-width: 700px;
       width: 100%;
   `}
   ${media.mobile`
       max-width: 360px;
       width: 100%;
       height: 321px
   `}
`

const ImgGeo = styled.img`
   margin: 16px 0 0 0;
`

const MainTitle = styled.h3`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 18px;
   line-height: 22px;
   color: #363636;
   margin-top: 16px;
`

const AdressTitle = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #757575;
   margin: 16px 0 0 4px;
`

const PriceTitle = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   color: #363636;
   margin: 16px 2px 0 0;
`

export default PopularHouse
