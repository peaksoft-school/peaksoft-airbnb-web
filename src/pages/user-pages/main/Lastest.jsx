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
      // console.log(animation)
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
         <Container>
            <Flex justify="space-between" width="98%" margin="130px 0 60px 0">
               <Title size="20px" uppercase color="#363636;">
                  The Lastest
               </Title>
               <StyledLink to="/">View All</StyledLink>
            </Flex>
            <Flex width="100%" margin="0 0 170px 0">
               <Apart animation={animation}>
                  <MainApartment
                     animation={animation}
                     // align="center"
                     gap="40px"
                  >
                     <HomeImg
                        animation={animation}
                        src={apartments.url}
                        alt="home"
                     />
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
                        {/* <ImgHome
                                 animation={animation}
                                 image={secondApartments.url}
                                 apartment={apartments.url}
                                 alt="page"
                              /> */}
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
const MainApartment = styled(Flex)`
   ${media.tablet`
            flex-direction: column;
            /* text-align: center; */
         `}
   animation: ${({ animation }) =>
      animation
         ? 'yes cubic-bezier(.25,.46,.45,.94) 0.7s'
         : 'no ease-in-out 0.7s'};

   @keyframes yes {
      /* 0% {
               transform: translate(0, 0);
            }
            30% {
               opacity: 0;
               transform: translate(-50rem, 0);
            }
            70% {
               opacity: 0;
               transform: translate(0, 0);
            }
            80% {
               opacity: 0;
               transform: translate(55.3rem, 0);
            }
            100% {
               opacity: 1;
               transform: translate(0, 0);
            } */
      0% {
         transform: translate(0, 0);
      }
      100% {
         opacity: 0;
         transform: translate(-50rem, 0);
      }
   }
   @keyframes no {
      0% {
         transform: translate(0, 0);
      }
      100% {
         opacity: 0;
         transform: translate(-50rem, 0);
      }
   }
`

const FlexButton = styled.div`
   display: flex;
   margin: 80px 0 0 0;
   align-items: center;
   gap: 25px;
   ${media.tablet`
      width:100%;
      justify-content:center;
   `}
`

const ButtonSlide = styled.button`
   border: none;
   background: none;
   margin-left: 20px;
   cursor: pointer;
`

const DivGeo = styled.div`
   display: flex;
   margin: 0 0 34.57px 0;
   /* ${media.tablet`
            margin-bottom: 34.57px;
            text-align: center;
         `} */
`

const SpanLength = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   margin: 2.6px 5.5px 0 25.5px;
`

const Background = styled.div`
   margin: 0 auto;
   overflow: hidden;
`
const Container = styled.div`
   max-width: 1262px;
   width: 100%;
   margin: 0 auto;
   padding: 1rem;
   /* overflow: hidden; */
`

const Apart = styled.div`
   display: flex;
   ${media.desktop`
            flex-direction: column; 
         `}
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

const HomeImg = styled.img`
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
            max-width: 370px;
            width: 100%;
            height: 250px;
         `}
`
const ImgHome1 = styled.img`
   max-width: 224px;
   width: 100%;
   height: 317px;
   object-fit: cover;
   margin: 0 0 0 20px;
   ${media.desktop`
            width: 0px;
            height: 0px;
         `}
`

const ImgHome2 = styled.img`
   max-width: 224px;
   width: 100%;
   height: 317px;
   object-fit: cover;
   margin: 0 -100px 0 20px;
   ${media.desktop`
            width: 0px;
            height: 0px;
         `}
`

const ImgGeo = styled.img`
   max-width: 10.5px;
   width: 100%;
   height: 14px;
   color: #97c69e;
   margin: 1px 9.75px 0 0;
   ${media.tablet`
         `}
`

const TitleGeo = styled.p`
   font-family: Inter;
   font-style: normal;
   color: #97c69e;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
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
   /* max-width: 280px; */
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #6a6a6a;
   letter-spacing: 0.4px;
   margin: 0 50px 7.44px 0;
   ${media.tablet`
       margin: 0 6px 7.44px 0;
   `}
`
// const ImgHome = styled.div`
//    width: 224px;
//    height: 317px;
//    background: url(${({ image }) => image});
//    background-size: cover;
//    /* object-fit: cover; */
//    animation: ${({ animation }) =>
//       animation
//          ? 'yess cubic-bezier(.25,.46,.45,.94) 0.7s'
//          : 'nos ease-in-out 0.7s'};
//    @keyframes nos {
//       0% {
//          transform: translate(0, 0);
//          background: url(${({ apartment }) => apartment});
//       }
//       100% {
//          /* opacity: 0; */
//          background: url(${({ image }) => image});
//          transform: translate(-38rem, 0);
//          width: 500px;
//          height: 430px;
//       }
//    }
// `

export default Lastest
