import styled from 'styled-components'
// import { fetchApi } from '../../api/fetchApi'

const PopularApartments = () => {
   const pages = [
      {
         url: 'https://candbpublichouse.com/wp-content/uploads/2021/05/home-exterior-today-180726-tease_3f99937c609d875fece6a12af1594bd9-12.jpg',
         id: 1,
      },
      {
         url: 'https://www.brightonhomes-idaho.com/2020/wp-content/uploads/2020/03/Exterior_Home_Designs-600x400.jpg',
         id: 2,
      },
      {
         url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5OyQlgIpPkCTi2SeCwc9DV8Dss0Na9lSm9Pg6OzwvtR_meKfIbCAB0t_klFXmC_inC1c&usqp=CAU',
         id: 3,
      },
      {
         url: 'https://www.brightonhomes-idaho.com/2020/wp-content/uploads/2020/04/Firestone_Parade_Home_Front_2_Twilight-1024x1071.jpg',
         id: 4,
      },
      {
         url: 'https://i.insider.com/5df9268871a5ca09060e5707?width=700',
         id: 5,
      },
      {
         url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIu84P_3KIMZ2Iy6ovEKfXFoqiD5aP4QYE2Xs0Ih2PY6lKXJOesNHHl66aO0np5tdzUA&usqp=CAU',
         id: 6,
      },
      {
         url: 'https://cdn.tollbrothers.com/communities/masters/866/images-resized/Meadows-at-West-Highland_The-Blaire_front-exterior-5_920.jpg',
         id: 7,
      },
   ]

   return (
      <Apartments>
         <div>
            <h2>POPULAR APARTMENTS</h2>
            <P>View all</P>
         </div>
         <div>
            <HomePage src="" alt="apartments" />
            <h3>Aska Lara Resort & Spa Hotel</h3>
            <p>
               Popular Apartments View all Aska Lara Resort & Spa Hotel The Aska
               Lara Resort & Spa Hotel, which operates on an all-inclusive
               system, occupies 2 plots separated by a road. The hotel is
               located in the Lara district, 500 meters from the sea...
            </p>
            {pages.map((page) => (
               <LiPage>
                  <img src={page.url} alt="pages" />
               </LiPage>
            ))}
         </div>
      </Apartments>
   )
}

const Apartments = styled.div`
   width: 1440px;
   height: 880px;
   background: #4f7755;
   margin-top: 9rem;
   & h2 {
      font-size: 20px;
      color: white;
      font-family: Inter;
      font-weight: 500;
      display: inline;
   }
`
const P = styled.p`
   display: inline;
   color: #ffbe58;
   font-size: 16px;
`

const HomePage = styled.img`
   width: 525px;
   height: 456px;
`

const LiPage = styled.li`
   list-style: none;
   & img {
      width: 224px;
      height: 317px;
   }
`

export default PopularApartments
