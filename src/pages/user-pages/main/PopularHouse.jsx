import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Title from '../../../components/UI/typography/Title'
import geo from '../../../assets/icons/IconGeo.svg'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import star from '../../../assets/icons/Star.svg'
import media from '../../../utils/helpers/media'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListings } from '../../../store/listingSlice'
import { getImageFullUrl } from '../../../utils/helpers/general'

const PopularHouse = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { listings } = useSelector((state) => state.listing)

   const filterBy = { type: 'HOUSE' }
   const sortBy = { popular: 'DESC' }

   useEffect(() => {
      dispatch(getListings({ filterBy, sortBy, limit: 3 }))
   }, [])

   const navigateToDetailListing = (id) => {
      navigate(`/main/regions/${id}`)
   }
   return (
      <Container>
         <Flex justify="space-between" width="98%" margin="170px 0 0 0">
            <Title size="20px" uppercase color="#363636" weight="700">
               Popular House
            </Title>
            <LinkStyled
               to={{
                  pathname: '/main/regions',
                  search: '?popular=Popular&type=HOUSE',
               }}
            >
               View all
            </LinkStyled>
         </Flex>
         <TextMain>
            Helping you make the best decisions in buying, selling, & renting
            your last minute locations.
         </TextMain>
         <MainDiv>
            {listings?.data?.map((home) => {
               return (
                  <HomeDiv key={home.id}>
                     <DivHouse onClick={() => navigateToDetailListing(home.id)}>
                        <ImgHomeInDiv
                           src={getImageFullUrl(
                              home?.images[0]?.image?.largeImagePath
                           )}
                           alt="home"
                        />
                        <DivStar>
                           <img src={star} alt="star" />
                           <h3>{home.rating}</h3>
                        </DivStar>
                     </DivHouse>
                     <MainTitle>{home.title}</MainTitle>
                     <Flex>
                        <ImgGeo src={geo} alt="geo" />
                        <AdressTitle>{home.address}</AdressTitle>
                     </Flex>
                     <Flex>
                        <PriceTitle>${home.price}</PriceTitle>
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
