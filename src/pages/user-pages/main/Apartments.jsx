import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import geo from '../../../assets/icons/IconGeo.svg'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import Title from '../../../components/UI/typography/Title'
import prev from '../../../assets/icons/PrevButton.svg'
import next from '../../../assets/icons/NextButton.svg'
import media from '../../../utils/helpers/media'
import prevBlack from '../../../assets/icons/PrevButtonBlack.svg'
import nextBlack from '../../../assets/icons/NextButtonBlack.svg'
import { getImageFullUrl } from '../../../utils/helpers/general'

const Apartments = ({ listings = [], lastest }) => {
   const [homeIndex, setHomeIndex] = useState(0)
   const [secondHomeIndex, setSecondHomeIndex] = useState(1)
   const [thirdHomeIndex, setThirdHomeIndex] = useState(2)
   const apartments = listings[homeIndex]
   const secondApartments = listings[secondHomeIndex]
   const thirdApartments = listings[thirdHomeIndex]
   const homeLenght = listings.length - 1
   const [animation, setAnimation] = useState(false)

   const nextChangeHandler = () => {
      setAnimation(!animation)
      if (homeIndex >= 0) {
         setHomeIndex(homeIndex + 1)
      }
      if (homeIndex === homeLenght) {
         setHomeIndex(0)
      }
      if (secondHomeIndex >= 0) {
         setSecondHomeIndex(secondHomeIndex + 1)
      }
      if (secondHomeIndex === homeLenght) {
         setSecondHomeIndex(0)
      }
      if (thirdHomeIndex >= 0) {
         setThirdHomeIndex(thirdHomeIndex + 1)
      }
      if (thirdHomeIndex === homeLenght) {
         setThirdHomeIndex(0)
      }
   }

   const prevChangeHandler = () => {
      if (homeIndex >= 1) {
         setHomeIndex(homeIndex - 1)
      }
      if (homeIndex === 0) {
         setHomeIndex(homeLenght)
      }
      if (secondHomeIndex >= 1) {
         setSecondHomeIndex(secondHomeIndex - 1)
      }
      if (secondHomeIndex === 0) {
         setSecondHomeIndex(homeLenght)
      }
      if (thirdHomeIndex >= 1) {
         setThirdHomeIndex(thirdHomeIndex - 1)
      }
      if (thirdHomeIndex === 0) {
         setThirdHomeIndex(homeLenght)
      }
   }
   const search = !lastest
      ? '?popular=Popular&type=APARTMENT'
      : '?popular=The lastest'

   return (
      <Background lastest={lastest}>
         <Container id="apartment" lastest={lastest}>
            <Flex justify="space-between" width="98%" margin="170px 0 60px 0">
               <Title
                  lastest={lastest}
                  size="20px"
                  uppercase
                  color={lastest ? '#363636' : '#FFFF'}
               >
                  Popular Apartments
               </Title>
               <StyledLink
                  lastest={lastest}
                  to={{
                     pathname: '/main/regions',
                     search,
                  }}
               >
                  View All
               </StyledLink>
            </Flex>
            <Flex width="100%" margin="0 0 170px 0">
               <Apart>
                  <MainApartment animation={animation} gap="40px">
                     <HomeImg
                        src={getImageFullUrl(
                           apartments?.images?.[0]?.image?.largeImagePath
                        )}
                        alt="home"
                     />
                     <div>
                        <TitleHeader lastest={lastest}>
                           {apartments?.title}
                        </TitleHeader>
                        <TitleApartment lastest={lastest}>
                           {apartments?.description}
                        </TitleApartment>
                        <DivAddress>
                           <ImgGeo src={geo} alt="iconGeo" />
                           <TitleAdress>{apartments?.address}</TitleAdress>
                        </DivAddress>
                        <StyledLink
                           lastest={lastest}
                           to={`/main/regions/${apartments?.id}`}
                        >
                           Read More
                        </StyledLink>
                     </div>
                  </MainApartment>
                  <Flex direction="column">
                     <Flex>
                        <ImgHome1
                           animation={animation}
                           src={getImageFullUrl(
                              secondApartments?.images?.[0]?.image
                                 ?.largeImagePath
                           )}
                           alt="page"
                        />
                        <ImgHome2
                           animation={animation}
                           src={getImageFullUrl(
                              thirdApartments?.images?.[0]?.image
                                 ?.largeImagePath
                           )}
                           alt="page"
                        />
                     </Flex>
                     <FlexButton>
                        <ButtonSlide
                           lastest={lastest}
                           onClick={prevChangeHandler}
                        >
                           <img src={lastest ? prevBlack : prev} alt="prev" />
                        </ButtonSlide>
                        <SpanLength lastest={lastest}>{`${homeIndex + 1}/${
                           listings.length
                        }`}</SpanLength>
                        <ButtonSlide onClick={nextChangeHandler}>
                           <img src={lastest ? nextBlack : next} alt="next" />
                        </ButtonSlide>
                     </FlexButton>
                  </Flex>
               </Apart>
            </Flex>
         </Container>
      </Background>
   )
}
export const Background = styled.div`
   margin: 0 auto;
   background: ${({ lastest }) => (lastest ? 'none' : '#4f7755')};
   overflow: hidden;
`
const Container = styled.div`
   max-width: 1262px;
   width: 100%;
   margin: 0 auto;
   padding: 1rem;
`
export const MainApartment = styled(Flex)`
   ${media.tablet`
      flex-direction: column;
   `}
   animation: ${({ animation }) => (animation ? 'yes 3s' : 'no 3s')};
   @keyframes yes {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
   @keyframes no {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
`

export const FlexButton = styled.div`
   display: flex;
   margin: 80px 0 0 17px;
   align-items: center;
   gap: 25px;
   ${media.tablet`
      width:100%;
      justify-content:center;
      margin: 80px 0 0 0;
   `}
`

export const ButtonSlide = styled.button`
   border: none;
   background: transparent;
   cursor: pointer;
`

export const DivAddress = styled.div`
   display: flex;
   margin: 0 0 34.57px 0;
`

export const SpanLength = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: ${({ lastest }) => (lastest ? '#363636' : '#FFFFFF')};
`

export const Apart = styled.div`
   display: flex;
   ${media.desktop`
      flex-direction: column; 
   `}
`

export const StyledLink = styled(Link)`
   font-family: 'Inter';
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   text-decoration-line: underline;
   color: ${({ lastest }) => (lastest ? '#8A8A8A' : '#ffbe58')};
   border-bottom: ${({ lastest }) => (lastest ? '#8A8A8A' : '#ffbe58')};
`

export const HomeImg = styled.img`
   max-width: 525px;
   width: 100%;
   height: 456px;
   object-fit: cover;
   ${media.tablet`
      max-width: 720px;
      width: 100%;
      height: 420px;
   `}
   ${media.mobile`
      max-width: 390px;
      width: 100%;
      height: 250px;
   `}
`
export const ImgHome1 = styled.img`
   max-width: 224px;
   width: 100%;
   height: 317px;
   object-fit: cover;
   margin: 0 0 0 20px;
   ${media.desktop`
      width: 0px;
      height: 0px;
      display:none;
   `}
   animation: ${({ animation }) => (animation ? 'yes 3s' : 'no 3s')};
   @keyframes yes {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
   @keyframes no {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
`

export const ImgHome2 = styled.img`
   max-width: 224px;
   width: 100%;
   height: 317px;
   object-fit: cover;
   margin: 0 -130px 0 20px;
   ${media.desktop`
      width: 0px;
      height: 0px;
      display:none;
   `}
   animation: ${({ animation }) => (animation ? 'yes 3s' : 'no 3s')};
   @keyframes yes {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
   @keyframes no {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
`

export const ImgGeo = styled.img`
   max-width: 10.5px;
   width: 100%;
   height: 14px;
   color: #97c69e;
   margin: 1px 9.75px 0 0;
   ${media.tablet`
   `}
`

export const TitleAdress = styled.p`
   font-family: Inter;
   font-style: normal;
   color: #97c69e;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
`

export const TitleHeader = styled.h2`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   color: ${({ lastest }) => (lastest ? '#363636' : '#FFFFFF')};
   margin: 75px 0 28px 0;
   ${media.tablet`
      margin: 8px 0 28px 0;
   `}
`

export const TitleApartment = styled.p`
   max-width: 300px;
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   letter-spacing: 0.4px;
   color: ${({ lastest }) => (lastest ? '#6A6A6A' : '#FFFFFF')};
   margin: 0 50px 7.44px 0;
   ${media.tablet`
      margin: 0 6px 7.44px 0;
      max-width: 700px;
      width: 100%;
   `}
   ${media.desktop`
      max-width: 800px;
      width: 95%;
   `}
`

export default Apartments
