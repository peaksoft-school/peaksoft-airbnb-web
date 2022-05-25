/* eslint-disable jsx-a11y/no-static-element-interactions */
import styled from 'styled-components'
import { useState } from 'react'
import Title from '../../../components/UI/typography/Title'
import media from '../../../utils/helpers/media'
import Feedbacks from './Feedbacks'
import first from '../../../assets/images/Feadback1.jpg'
import second from '../../../assets/images/Feadback2.jpg'
import third from '../../../assets/images/Feedback3.jpg'
import fourth from '../../../assets/images/Feedback4.jpg'
import Flex from '../../../components/UI/ui-for-positions/Flex'

const Feedback = () => {
   const Comments = [
      {
         images: [
            {
               id: 'uuidv1',
               img: first,
            },
            {
               id: 'uuidv2',
               img: second,
            },
            {
               id: 'uuidv3',
               img: third,
            },
            {
               id: 'uuidv4',
               img: fourth,
            },
         ],
         id: Math.random().toString(),
         users: 'Anna Niko',
         value: 4,
         data: 'bjhdhjbd djchshjd dsjchvshdj nsdjhsdf jsdhsjhdf sdjhdjhhdsj jsdhgjhfjhvjh sdjhjhdghjs sdjhbdjhb nsdhgsdjh sjdhfv sdjhvsd djsh sdjh djhvsd sdjhvdc jshdv sdhjv sdjhfv sdjv sdhv sdv sdgfv sdg',
         date: '20.05.2022',
         like: '6',
         dislike: '4',
      },
      {
         images: [
            {
               id: 'uuidv1',
               img: first,
            },
            {
               id: 'uuidv2',
               img: second,
            },
            {
               id: 'uuidv3',
               img: third,
            },
            {
               id: 'uuidv4',
               img: fourth,
            },
         ],
         id: Math.random().toString(),
         users: 'Anna Niko',
         value: 4,
         data: 'bjhdhjbd djchshjd dsjchvshdj nsdjhsdf jsdhsjhdf sdjhdjhhdsj jsdhgjhfjhvjh sdjhjhdghjs sdjhbdjhb nsdhgsdjh sjdhfv sdjhvsd djsh sdjh djhvsd sdjhvdc jshdv sdhjv sdjhfv sdjv sdhv sdv sdgfv sdg',
         date: '20.05.2022',
         like: '6',
         dislike: '4',
      },
      {
         images: [
            {
               id: 'uuidv1',
               img: first,
            },
            {
               id: 'uuidv2',
               img: second,
            },
            {
               id: 'uuidv3',
               img: third,
            },
            {
               id: 'uuidv4',
               img: fourth,
            },
         ],
         id: Math.random().toString(),
         users: 'Anna Niko',
         value: 4,
         data: 'bjhdhjbd djchshjd dsjchvshdj nsdjhsdf jsdhsjhdf sdjhdjhhdsj jsdhgjhfjhvjh sdjhjhdghjs sdjhbdjhb nsdhgsdjh sjdhfv sdjhvsd djsh sdjh djhvsd sdjhvdc jshdv sdhjv sdjhfv sdjv sdhv sdv sdgfv sdg',
         date: '20.05.2022',
         like: '6',
         dislike: '4',
      },
      {
         images: [
            {
               id: 'uuidv1',
               img: first,
            },
            {
               id: 'uuidv2',
               img: second,
            },
            {
               id: 'uuidv3',
               img: third,
            },
            {
               id: 'uuidv4',
               img: fourth,
            },
         ],
         id: Math.random().toString(),
         users: 'Anna Niko',
         value: 4,
         data: 'bjhdhjbd djchshjd dsjchvshdj nsdjhsdf jsdhsjhdf sdjhdjhhdsj jsdhgjhfjhvjh sdjhjhdghjs sdjhbdjhb nsdhgsdjh sjdhfv sdjhvsd djsh sdjh djhvsd sdjhvdc jshdv sdhjv sdjhfv sdjv sdhv sdv sdgfv sdg',
         date: '20.05.2022',
         like: '6',
         dislike: '4',
      },
      {
         images: [
            {
               id: 'uuidv1',
               img: first,
            },
            {
               id: 'uuidv2',
               img: second,
            },
            {
               id: 'uuidv3',
               img: third,
            },
            {
               id: 'uuidv4',
               img: fourth,
            },
         ],
         id: Math.random().toString(),
         users: 'Anna Niko',
         value: 4,
         data: 'bjhdhjbd djchshjd dsjchvshdj nsdjhsdf jsdhsjhdf sdjhdjhhdsj jsdhgjhfjhvjh sdjhjhdghjs sdjhbdjhb nsdhgsdjh sjdhfv sdjhvsd djsh sdjh djhvsd sdjhvdc jshdv sdhjv sdjhfv sdjv sdhv sdv sdgfv sdg',
         date: '20.05.2022',
         like: '6',
         dislike: '4',
      },
      {
         images: [
            {
               id: 'uuidv1',
               img: first,
            },
            {
               id: 'uuidv2',
               img: second,
            },
            {
               id: 'uuidv3',
               img: third,
            },
            {
               id: 'uuidv4',
               img: fourth,
            },
         ],
         id: Math.random().toString(),
         users: 'Anna Niko',
         value: 4,
         data: 'bjhdhjbd djchshjd dsjchvshdj nsdjhsdf jsdhsjhdf sdjhdjhhdsj jsdhgjhfjhvjh sdjhjhdghjs sdjhbdjhb nsdhgsdjh sjdhfv sdjhvsd djsh sdjh djhvsd sdjhvdc jshdv sdhjv sdjhfv sdjv sdhv sdv sdgfv sdg',
         date: '20.05.2022',
         like: '6',
         dislike: '4',
      },
      {
         images: [
            {
               id: 'uuidv1',
               img: first,
            },
            {
               id: 'uuidv2',
               img: second,
            },
            {
               id: 'uuidv3',
               img: third,
            },
            {
               id: 'uuidv4',
               img: fourth,
            },
         ],
         id: Math.random().toString(),
         users: 'Anna Niko',
         value: 4,
         data: 'bjhdhjbd djchshjd dsjchvshdj nsdjhsdf jsdhsjhdf sdjhdjhhdsj jsdhgjhfjhvjh sdjhjhdghjs sdjhbdjhb nsdhgsdjh sjdhfv sdjhvsd djsh sdjh djhvsd sdjhvdc jshdv sdhjv sdjhfv sdjv sdhv sdv sdgfv sdg',
         date: '20.05.2022',
         like: '6',
         dislike: '4',
      },
   ]
   const [showMore, setShowMore] = useState(false)
   return (
      <Container>
         <Title>FEEDBACK</Title>
         {Comments.map((el) => (
            <Feedbacks
               key={el.id}
               avatar={el.avatar}
               users={el.users}
               value={el.value}
               data={el.data}
               date={el.date}
               like={el.like}
               dislike={el.dislike}
               images={el.images}
            />
         ))}
         <Flex align="center" justify="center" margin="35px 0 0 0 ">
            <Title className="showMore" onClick={() => setShowMore(!showMore)}>
               {showMore ? 'Show less' : 'Show  more'}
            </Title>
         </Flex>
      </Container>
   )
}
const Container = styled.div`
   max-width: 580px;
   width: 100%;
   ${media.mobile`
   padding:0.5rem;
  
   `}
   margin-top: 60px;
   .showMore {
      text-decoration-line: underline;
   }
`
export default Feedback
