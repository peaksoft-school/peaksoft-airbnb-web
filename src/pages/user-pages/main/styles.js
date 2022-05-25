import media from '../../../utils/helpers/media'
import styled from 'styled-components'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import { Link } from 'react-router-dom'

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

export const DivGeo = styled.div`
   display: flex;
   margin: 0 0 34.57px 0;
`

export const SpanLength = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #ffffff;
`
export const Container = styled.div`
   max-width: 1262px;
   width: 100%;
   margin: 0 auto;
   background: #4f7755;
   padding: 1rem;
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
   color: #ffbe58;
   border-bottom: #ffbe58;
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
   `}
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
   `}
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

export const TitleGeo = styled.p`
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
   color: #ffffff;
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
   color: #f7f7f7;
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
