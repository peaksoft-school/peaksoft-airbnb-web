import styled from 'styled-components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getRegions } from '../../../store/regionSlice'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import { mergePhotosLinksIntoServerBaseUrl } from '../../../utils/helpers/general'

const Regions = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { regions } = useSelector((state) => state.region)

   const transitionToListingHandler = ({ id }) => {
      navigate(`/main/regions`, { state: id })
   }
   useEffect(() => {
      dispatch(getRegions())
   }, [])
   return (
      <Container>
         <Flex direction="column" width="100%">
            <Title>REGION IN KYRGYSTAN</Title>
            <Text>
               You can visit the site any day and be sure that you will find
               everything for a great vacation.
            </Text>
         </Flex>
         <ContainerRegions>
            {regions.map((el) => (
               <Region
                  key={el.id}
                  onClick={() =>
                     transitionToListingHandler({ title: el.title, id: el.id })
                  }
                  image={mergePhotosLinksIntoServerBaseUrl(
                     el.image.largeImagePath
                  )}
                  smallImage={mergePhotosLinksIntoServerBaseUrl(
                     el.image.smallImagePath
                  )}
                  className={el.title}
               >
                  <TitleRegion>{el.title}</TitleRegion>
               </Region>
            ))}
         </ContainerRegions>
      </Container>
   )
}
const Title = styled.h2`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;
   text-transform: uppercase;
   color: #363636;
`
const Text = styled.p`
   margin: 12px 0 45px 0;
   color: #363636;
   font-size: 16px;
   font-family: Inter;
   font-style: normal;
`
const Region = styled.div`
   background-color: #a23f3f;
   position: relative;
   transition: 0.2s;
   background: url(${({ image }) => image});
   background-size: cover;
   :hover {
      opacity: 0.9;
   }
   cursor: pointer;
   @media (max-width: 768px) {
      width: 100%;
      height: 400px;
   }
   @media (max-width: 428px) {
      width: 100%;
      height: 230px;
      background: url(${({ smallImage }) => smallImage});
      background-size: cover;
      background-repeat: no-repeat;
   }
`
const Container = styled.div`
   padding: 170px 15px;
   max-width: 1262px;
   margin: auto;
   background-color: #f7f7f7;
`
const ContainerRegions = styled.div`
   width: 100%;
   min-height: 1145px;
   display: grid;
   grid-template-columns: repeat(4, 0.5fr);
   grid-template-rows: repeat(4, 1.5fr);
   gap: 20px 20px;
   grid-auto-flow: column;
   -ms-grid-column-align: start;
   @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
   }
   .chui {
      grid-area: 1 / 1 / 3 / 3;
      grid-auto-rows: min-content;
   }

   .batken {
      grid-area: 1 / 3 / 2 / 4;
      grid-auto-columns: min-content;
   }

   .jalalabat {
      grid-area: 1 / 4 / 2 / 5;
   }

   .naryn {
      grid-area: 2 / 3 / 3 / 5;
   }

   .osh {
      grid-area: 3 / 3 / 5 / 5;
   }

   .issyk-kul {
      grid-area: 3 / 1 / 4 / 2;
   }

   .talas {
      grid-area: 3 / 2 / 4 / 3;
   }

   .bishkek {
      grid-area: 4 / 1 / 5 / 3;
   }
`
const TitleRegion = styled.h3`
   font-family: 'Inter';
   font-weight: 500;
   font-size: 16px;
   text-transform: uppercase;
   color: #ffffff;
   position: absolute;
   bottom: 0;
   left: 0;
   margin: 20px;
`

export default Regions
