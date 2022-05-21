import { useState } from 'react'
import styled from 'styled-components'
import Avatar from '@mui/material/Avatar'
import Text from '../../../components/UI/typography/Text'
import Title from '../../../components/UI/typography/Title'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import PositionedSnackbar from '../../../components/UI/snackbar/Snackbar'
import Button from '../../../components/UI/buttons/Button'
import media from '../../../utils/helpers/media'
import ReplaceImages from '../../../components/UI/replace-image/ReplaceImages'
import first from '../../../assets/images/InnerImage5.jpg'
import second from '../../../assets/images/InnerImage2.jpg'
import third from '../../../assets/images/InnerImage3.jpg'
import fourth from '../../../assets/images/InnerImage4.jpg'
import Feedback from './Feedback'

const dataSlider = [
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
]
const UserHomeDetails = () => {
   const [blocked, setBlocked] = useState(false)

   return (
      <Wrapper>
         <Flex align="center" gap="6px" margin="86px 0 0 0 ">
            <Text size="17">Announcement</Text>
            <Title>/</Title>
            <Title>Name</Title>
         </Flex>
         <Flex margin="30px 0 30px 0">
            <Title size="20px">NAME</Title>
         </Flex>
         <Container>
            <LeftContent>
               <ReplaceImages dataSlider={dataSlider} />
            </LeftContent>
            <RightContent>
               <Flex direction="column">
                  <Flex gap="14px">
                     <Tag>Apartement</Tag>
                     <Tag>2 Guests</Tag>
                  </Flex>
                  <Flex direction="column" margin="8px" gap="20px">
                     <Flex direction="column" gap="10px">
                        <Title>Name of hotel</Title>
                        <Text>12 Morris Ave, Toronto, ON, CA</Text>
                     </Flex>
                     <Text color="#363636">
                        The hotel will provide guests with air-conditioned rooms
                        offering a desk, a kettle, a fridge, a minibar, a safety
                        deposit box, a flat-screen TV and a shared bathroom with
                        a shower. At Garden Hotel & SPA the rooms have bed linen
                        and towels.
                     </Text>
                  </Flex>
                  <Flex gap="16px" margin="32px 0 0 0 " align="center">
                     <Avatar />
                     <Flex direction="column">
                        <Title>Anna Annova</Title>
                        <Text>anna@gmail.com</Text>
                     </Flex>
                  </Flex>
                  <Flex gap="10px" margin="40px 0 40px 0 " align="center">
                     <Button className="btn" width="196px" outline>
                        DELETE
                     </Button>

                     <Button
                        width="196px"
                        className="btn"
                        onClick={() => setBlocked(!blocked)}
                     >
                        {blocked ? 'Blocked' : 'Unblocked'}
                     </Button>
                     {blocked ? (
                        <PositionedSnackbar
                           message="Moderation successfully dfja;sldjflk;adsj djflk;asdlk;fjd"
                           title="Acceptedfbvnfbvnfvjdjfvjdfbvjdf :)"
                           severity="success"
                           open={blocked}
                           onClose={() => setBlocked(false)}
                           delay={blocked}
                        />
                     ) : (
                        <PositionedSnackbar
                           message="Mfdfdfdfddffdfdf"
                           title="UnBlocked :)"
                           severity="success"
                           open={blocked}
                           onClose={() => setBlocked(false)}
                           delay={blocked}
                        />
                     )}
                  </Flex>
               </Flex>
            </RightContent>
         </Container>

         <Feedback />
      </Wrapper>
   )
}
const LeftContent = styled(Flex)`
   width: 50%;

   ${media.desktop`
      width:100%;
   `}
`
const RightContent = styled(Flex)`
   width: 50%;
   ${media.desktop`
      width:100%;
   `}
`
const Container = styled(Flex)`
   width: 100%;
   gap: 68px;
   ${media.desktop`
       flex-direction:column;
       align-items:center;
      
   `}
`
const Wrapper = styled.div`
   max-width: 1290px;
   padding: 5rem;
   width: 100%;
   ${media.mobile`
   padding:0.5rem;
  
   `}

   .btn {
      ${media.tablet`
      max-width: 167px;
      width: 100%;
       padding:8px 10px;
   `}
   }
`
const Tag = styled.span`
   background: #fff0f6;
   border: 1px solid #ffcbe0;
   padding: 6px 8px;
   font-family: 'Inter';
`

export default UserHomeDetails
