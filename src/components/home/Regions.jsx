import styled from 'styled-components'
import Chui from '../../assets/images/Chui.png'
import Batken from '../../assets/images/Batken.png'
import Jalalabat from '../../assets/images/Jalalabat.png'
import Naryn from '../../assets/images/Naryn.png'
import Issykkul from '../../assets/images/Issyk-kul.png'
import Talas from '../../assets/images/Talas.png'
import Osh from '../../assets/images/Osh.png'
import Bishkek from '../../assets/images/Bishkek.png'

const Regions = () => {
   return (
      <Choice>
         <h2>REGION IN KYRGYSTAN</h2>
         <p>You can visit the site any day and be sure that you will find</p>
         <Group1>
            <div>
               <ImgChui>
                  <button>
                     <div />
                  </button>
               </ImgChui>
            </div>
            <div>
               <div>
                  <ImgBatken>
                     <button>
                        <div />
                     </button>
                  </ImgBatken>
                  <ImgJalalabat>
                     <button>
                        <div />
                     </button>
                  </ImgJalalabat>
               </div>
               <div>
                  <ImgNaryn>
                     <button>
                        <div />
                     </button>
                  </ImgNaryn>
               </div>
            </div>
         </Group1>
         <Group1>
            <div>
               <Group2>
                  <ImgIssykkul>
                     <button>
                        <div />
                     </button>
                  </ImgIssykkul>
                  <ImgTalas>
                     <button>
                        <div />
                     </button>
                  </ImgTalas>
               </Group2>
               <ImgBishkek>
                  <button>
                     <div />
                  </button>
               </ImgBishkek>
            </div>
            <div>
               <ImgOsh>
                  <button>
                     <div />
                  </button>
               </ImgOsh>
            </div>
         </Group1>
      </Choice>
   )
}

const Choice = styled.div`
   width: 1262px;
   margin: 0 auto;
   & button {
      border: none;
   }
   & h2 {
      margin: 10px;
      color: #363636;
      font-family: Inter;
      font-size: 20px;
      text-transform: uppercase;
   }
   & p {
      color: #363636;
      font-size: 16px;
      font-family: Inter;
      text-transform: uppercase;
   }
`
const Group1 = styled.div`
   display: flex;
   text-align: center;
   width: 1262px;
`

const Group2 = styled.div`
   display: flex;
`

const ImgChui = styled.div`
   margin: 10px;
   height: 621px;
   display: inline;
   & div {
      width: 505px;
      height: 621px;
      background: url(${Chui});
   }
   & :hover {
      opacity: 0.95;
   }
`

const ImgBatken = styled.div`
   margin: 10px;
   height: 301px;
   display: inline;
   & div {
      width: 347px;
      height: 301px;
      background: url(${Batken});
   }
   & :hover {
      opacity: 0.95;
   }
`

const ImgJalalabat = styled.div`
   margin: 10px;
   height: 301px;
   display: inline;
   & div {
      width: 347px;
      height: 301px;
      background: url(${Jalalabat});
   }
   & :hover {
      opacity: 0.95;
   }
`

const ImgNaryn = styled.div`
   margin: 16.5px 0 0 0;
   height: 299px;
   display: inline-block;
   & div {
      width: 715px;
      height: 299px;
      background: url(${Naryn});
   }
   & :hover {
      opacity: 0.95;
   }
`

const ImgIssykkul = styled.div`
   margin: 10px;
   /* display: inline; */
   height: 302px;
   & div {
      width: 347px;
      height: 302px;
      background: url(${Issykkul});
   }
   & :hover {
      opacity: 0.95;
   }
`

const ImgTalas = styled.div`
   margin: 10px;
   /* display: inline; */
   height: 302px;
   & div {
      width: 347px;
      height: 302px;
      background: url(${Talas});
   }
   & :hover {
      opacity: 0.95;
   }
`

const ImgOsh = styled.div`
   margin: 10px;
   /* display: inline; */
   height: 621px;
   & div {
      width: 505px;
      height: 621px;
      background: url(${Osh});
   }
   & :hover {
      opacity: 0.95;
   }
`

const ImgBishkek = styled.div`
   margin: 10px;
   height: 299px;
   & div {
      width: 715px;
      height: 299px;
      background: url(${Bishkek});
   }
   & :hover {
      opacity: 0.95;
   }
`

export default Regions
