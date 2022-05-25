import styled from 'styled-components'
import BackgroundMain from '../../../assets/images/PageMain.png'
import Regions from './Regions'
import media from '../../../utils/helpers/media'
import InputSearch from '../../../components/search-bar'
import Apartments from './Apartments'
import PopularHouse from './PopularHouse'

const MainPage = () => {
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
      {
         id: 4,
         url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/148789048.jpg?k=5b542b40845ba4263d2a26e7aef4fc6258a41c69ee5b15b08bc70c5f7948bb21&o=&hp=1',
         header: 'Four Apartments',
         geo: '723510 Bishkek Azamat Ismailov 9/7',
         title: 'Our interactive book clubs will cause your child to fall in love with reading and grow as a reader. During each book club, your child will study an engaging childrens book and learn phonics, vocabulary, and comprehension skills while having fun!',
      },
   ]
   return (
      <Container>
         <MainPages>
            <div>
               <h1>FIND A PLACE YOU WILL LOVE TO STAY AT</h1>
               <InputSearch />
            </div>
         </MainPages>
         <Regions />
         <Apartments users={users} />
         <PopularHouse />
         <Apartments users={users} lastest />
      </Container>
   )
}

const Container = styled.div`
   width: 100%;
   margin: 0 auto;
`

const MainPages = styled.div`
   width: 100%;
   display: grid;
   align-items: center;
   background: url(${BackgroundMain}) no-repeat;
   background-size: cover;
   background-position: center;
   background-attachment: fixed;
   min-height: ${`${window.innerHeight}px`};
   text-align: center;
   ${media.tablet`
   padding-left:20px;
   padding-right:20px;
   text-align:center;
   `}
   ${media.mobile`
      
   `}

   & h1 {
      font-family: 'Jenriv Titling';
      font-style: normal;
      font-weight: 400;
      font-size: 39px;
      line-height: 38px;
      text-transform: uppercase;
      color: #ffffff;
      ${media.tablet`
       font-size:26px;
     `}
   }
`

export default MainPage
