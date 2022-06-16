import { useState } from 'react'
// import { Text } from 'gestalt'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import geo from '../../../assets/icons/IconGeo.svg'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import Title from '../../../components/UI/typography/Title'
import prev from '../../../assets/icons/PrevButtonBlack.svg'
import next from '../../../assets/icons/NextButtonBlack.svg'
import media from '../../../utils/helpers/media'
import {
   Apart,
   ButtonSlide,
   DivGeo,
   FlexButton,
   HomeImg,
   ImgGeo,
   ImgHome1,
   ImgHome2,
   MainApartment,
   TitleGeo,
} from './styles'

const Lastest = () => {
   const users = [
      {
         id: 1,
         url: 'https://media-cdn.tripadvisor.com/media/photo-s/15/35/2f/a0/orchid-homes.jpg',
         header: 'First Apartments',
         geo: '723510 Osh Muzurbek Alimbekov 9/7',
         title: "Join the number 14 in her quest to find a seesaw friend! Young readers will explore place value, learning how different values in the ens and ones will change a number's value in different ways. ",
      },
      {
         id: 2,
         url: 'https://assets.architecturaldigest.in/photos/60083df0e6e1f64740189237/master/pass/Vadodara-homes-interior-design-photos-1366x768.jpg',
         header: 'Second Apartments',
         geo: '723510 Talas Talas Begaliev 9/7',
         title: 'Our interactive book clubs will cause your child to fall in love with reading and grow as a reader. During each book club, your child will study an engaging childrens book and learn phonics, vocabulary, and comprehension skills while having fun!',
      },
      {
         id: 3,
         url: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/3e1f6c64c370266c6df162d846c3d4ee32f28beafd7b46c860493d76c4e1ee8a._RI_.jpg',
         header: 'Third Apartments',
         geo: '723510 Bishkek Azamat Ismailov 9/7',
         title: "Join the number 14 in her quest to find a seesaw friend! Young readers will explore place value, learning how different values in the ens and ones will change a number's value in different ways. ",
      },
   ]

   const [homeIndex, setHomeIndex] = useState(0)
   const [secondHomeIndex, setSecondHomeIndex] = useState(1)
   const [thirdHomeIndex, setThirdHomeIndex] = useState(2)
   const apartments = users[homeIndex]
   const secondApartments = users[secondHomeIndex]
   const thirdApartments = users[thirdHomeIndex]
   const homeLenght = users.length - 1
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

   return (
      <Background>
         <Container id="thelastest">
            <Flex justify="space-between" width="98%" margin="130px 0 60px 0">
               <Title size="20px" uppercase color="#363636;">
                  The Lastest
               </Title>
               <StyledLink to="/">View All</StyledLink>
            </Flex>
            <Flex width="100%" margin="0 0 170px 0">
               <Apart>
                  <MainApartment animation={animation} gap="40px">
                     <HomeImg src={apartments.url} alt="home" />
                     <div>
                        <TitleHeader>{apartments.header}</TitleHeader>
                        <TitleApartment>{apartments.title}</TitleApartment>
                        <DivGeo>
                           <ImgGeo src={geo} alt="iconGeo" />
                           <TitleGeo>{apartments.geo}</TitleGeo>
                        </DivGeo>
                        <StyledLink2 to="/">Read More</StyledLink2>
                     </div>
                  </MainApartment>
                  <Flex direction="column">
                     <Flex>
                        <ImgHome1 src={secondApartments.url} alt="page" />
                        <ImgHome2 src={thirdApartments.url} alt="page" />
                     </Flex>
                     <FlexButton>
                        <ButtonSlide onClick={prevChangeHandler}>
                           <img src={prev} alt="prev" />
                        </ButtonSlide>
                        <SpanLength>{`${homeIndex + 1}/${
                           users.length
                        }`}</SpanLength>
                        <ButtonSlide onClick={nextChangeHandler}>
                           <img src={next} alt="next" />
                        </ButtonSlide>
                     </FlexButton>
                  </Flex>
               </Apart>
            </Flex>
         </Container>
      </Background>
   )
}

const Background = styled.div`
   margin: 0 auto;
   overflow: hidden;
`

const Container = styled.div`
   max-width: 1262px;
   width: 100%;
   margin: 0 auto;
   padding: 1rem;
`

const StyledLink = styled(Link)`
   font-family: 'Inter';
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   text-decoration-line: underline;
   color: #363636;
   border-bottom: #363636;
`

const StyledLink2 = styled(Link)`
   font-family: 'Inter';
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   text-decoration-line: underline;
   color: #8a8a8a;
   border-bottom: #8a8a8a;
`

const SpanLength = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #363636;
`

const TitleHeader = styled.h2`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   color: #363636;
   margin: 75px 0 28px 0;
   ${media.tablet`
            margin: 8px 0 28px 0;
         `}
`

const TitleApartment = styled.p`
   max-width: 300px;
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   letter-spacing: 0.4px;
   color: #6a6a6a;
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

export default Lastest
