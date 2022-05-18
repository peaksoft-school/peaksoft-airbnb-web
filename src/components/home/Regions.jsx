import styled from 'styled-components'
import Chui from '../../assets/images/Chui.png'
import Batken from '../../assets/images/Batken.png'
import Jalalabat from '../../assets/images/Jalalabat.png'
import Naryn from '../../assets/images/Naryn.png'
import Issykkul from '../../assets/images/Issyk-kul.png'
import Talas from '../../assets/images/Talas.png'
import Osh from '../../assets/images/Osh.png'
import Bishkek from '../../assets/images/Bishkek.png'
import media from '../../utils/helpers/media'
import Flex from '../UI/ui-for-positions/Flex'

const Regions = () => {
   return (
      <Choice>
         <Flex direction="column" width="100%">
            <h2>REGION IN KYRGYSTAN</h2>
            <p>
               You can visit the site any day and be sure that you will find
               everything for a great vacation.
            </p>
         </Flex>
         <Group1>
            <Group2>
               <ImgChui>
                  <Title>Chui</Title>
               </ImgChui>
               <div>
                  <Group2>
                     <ImgBatken>
                        <Title>Batken</Title>
                     </ImgBatken>
                     <ImgJalalabat>
                        <Title>Jalalabat</Title>
                     </ImgJalalabat>
                  </Group2>
                  <ImgNaryn>
                     <Title>Naryn</Title>
                  </ImgNaryn>
               </div>
            </Group2>
            <Group2>
               <div>
                  <Group2>
                     <ImgIssykkul>
                        <Title>Issyk-kul</Title>
                     </ImgIssykkul>
                     <ImgTalas>
                        <Title>Talas</Title>
                     </ImgTalas>
                  </Group2>
                  <ImgBishkek>
                     <Title>Bishkek</Title>
                  </ImgBishkek>
               </div>
               <ImgOsh>
                  <Title>Osh</Title>
               </ImgOsh>
            </Group2>
         </Group1>
      </Choice>
   )
}

const Title = styled.h3`
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

const Choice = styled.div`
   max-width: 1262px;
   margin: 0 auto;
   ${media.tablet`
      width:100%;
      padding:0 20px;
   `}
   & h2 {
      margin: 150px 0 0 10px;
      color: #363636;
      font-family: Inter;
      font-size: 20px;
      text-transform: uppercase;
   }
   & p {
      margin: 12px 0 45px 10px;
      color: #363636;
      font-size: 16px;
      font-family: Inter;
      font-style: normal;
      width: 100%;
   }
`
const Group1 = styled.div`
   flex-direction: column;
   text-align: center;
   width: 100%;
`

const Group2 = styled.div`
   display: flex;
   ${media.tablet`
   flex-direction: column;
   `}
`

const ImgChui = styled.div`
   position: relative;
   margin: 10px;
   max-width: 505px;
   width: 100%;
   height: 621px;
   background: url(${Chui});
   animation-duration: 3s;
   animation-name: slideinleft;
   animation-iteration-count: 1;
   @keyframes slideinleft {
      from {
         margin-right: 1000px;
      }

      to {
         margin: 10px;
      }
   }
   ${media.tablet`
      margin-left:0;
      width: 100%;
      height: 232px;
      background-repeat:no-repeat;
      background-size:cover;
   `}
   & :hover {
      opacity: 0.95;
   }
`

const ImgBatken = styled.div`
   position: relative;
   margin: 10px;
   width: 347px;
   height: 301px;
   background: url(${Batken});
   animation-duration: 3s;
   animation-name: slideintop;
   animation-iteration-count: 1;
   @keyframes slideintop {
      from {
         margin-top: -1000px;
      }

      to {
         margin: 10px;
      }
   }
   ${media.tablet`
      margin-left:0;
      width: 100%;
      height: 232px;
      background-repeat:no-repeat;
      background-size:cover;
   `}
   & :hover {
      opacity: 0.95;
   }
`

const ImgJalalabat = styled.div`
   position: relative;
   margin: 10px;
   width: 347px;
   height: 301px;
   background: url(${Jalalabat});
   animation-duration: 3s;
   animation-name: slideinrigth;
   animation-iteration-count: 1;
   @keyframes slideinrigth {
      from {
         margin-left: 1000px;
      }

      to {
         margin: 10px;
      }
   }
   ${media.tablet`
   margin-left:0;
      width: 100%;
      height: 232px;
      background-repeat:no-repeat;
      background-size:cover;
   `}
   & :hover {
      opacity: 0.95;
   }
`

const ImgNaryn = styled.div`
   position: relative;
   margin: 10px;
   max-width: 715px;
   width: 100%;
   height: 299px;
   background: url(${Naryn});
   animation-duration: 3s;
   animation-name: slideinbottom;
   animation-iteration-count: 1;
   @keyframes slideinbottom {
      from {
         margin-top: 1000px;
      }

      to {
         margin: 10px;
      }
   }
   ${media.tablet`
      width: 100%;
      margin-left:0;
      height: 232px;
      background-repeat:no-repeat;
      background-size:cover;
   `}
   & :hover {
      opacity: 0.95;
   }
`

const ImgIssykkul = styled.div`
   position: relative;
   margin: 10px;
   width: 347px;
   height: 302px;
   background: url(${Issykkul});
   animation-duration: 3s;
   animation-name: slideinleft;
   animation-iteration-count: 1;
   ${media.tablet`
   margin-left:0;
      width: 100%;
      height: 232px;
      background-repeat:no-repeat;
      background-size:cover;
   `}
   & :hover {
      opacity: 0.95;
   }
`

const ImgTalas = styled.div`
   position: relative;
   margin: 10px;
   width: 347px;
   height: 302px;
   background: url(${Talas});
   animation-duration: 3s;
   animation-name: slideintop;
   animation-iteration-count: 1;
   ${media.tablet`
      width: 100%;
      margin-left:0;
      height: 232px;
      background-repeat:no-repeat;
      background-size:cover;
   `}
   & :hover {
      opacity: 0.95;
   }
`

const ImgOsh = styled.div`
   position: relative;
   margin: 10px;
   max-width: 505px;
   width: 100%;
   height: 621px;
   background: url(${Osh});
   animation-duration: 3s;
   animation-name: slideinrigth;
   animation-iteration-count: 1;
   ${media.tablet`
   margin-left:0;
      width: 100%;
      height: 232px;
      background-repeat:no-repeat;
      background-size:cover;

   `}
   & :hover {
      opacity: 0.95;
   }
`

const ImgBishkek = styled.div`
   position: relative;
   margin: 10px;
   max-width: 715px;
   width: 100%;
   height: 299px;
   background: url(${Bishkek});
   animation-duration: 3s;
   animation-name: slideinrigth;
   animation-iteration-count: 1;
   ${media.tablet`
   margin-left:0;
      width: 100%;
      height: 232px;
      background-repeat:no-repeat;
      background-size:cover;
   `}
   & :hover {
      opacity: 0.95;
   }
`

export default Regions
