import styled from 'styled-components'
import { /* useDispatch, */ useSelector } from 'react-redux'
import Title from '../../../components/UI/typography/Title'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import media from '../../../utils/helpers/media'
import Button from '../../../components/UI/buttons/Button'
import { useLocation } from 'react-router-dom'

const AdminUserCard = () => {
   const { user } = useSelector((state) => state.auth)
   const { pathname } = useLocation()

   const visibleAllBlockedButton =
      pathname === '/users/:userId/my-announcements'

   return (
      <ContainerWrapper>
         <Wrapper>
            <Avatar>
               <img src={user.avatar} alt="" />
            </Avatar>
            <Flex>
               <Title color="#646464" className="text">
                  Name: <strong>{user.name}</strong>
               </Title>
            </Flex>
            <Flex>
               <Title color="#646464" className="text">
                  Contact: <strong>{user.email}</strong>
               </Title>
            </Flex>
         </Wrapper>
         {visibleAllBlockedButton && (
            <Button className="buttonStyle">Block all Announcement</Button>
         )}
      </ContainerWrapper>
   )
}
const ContainerWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
   border-radius: 16px;
   ${media.mobile`
   width:100%;
   `}
   strong {
      color: #202020;
   }
   .buttonStyle {
      width: 292px;
      padding: 10px 16px;
      margin-top: 40px;
   }
`

const Wrapper = styled.div`
   margin-top: 50px;
   width: 350px;
   padding: 1.5rem 1rem;
   background-color: #f1f1f1;
   border: 1px solid #c4c4c4;
   border-radius: 16px;
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
   ${media.mobile`
   width:100%;
   `}
   strong {
      color: #202020;
   }
   .text {
      display: flex;
      gap: 10px;
      margin-top: 10px;
      ${media.mobile`
      font-size:16px;
   `}
   }
`
const Avatar = styled.div`
   border-radius: 50%;
   background: #266bd3;
   width: 89px;
   height: 89px;
   color: #ffffff;
   margin-bottom: 20px;
   img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
   }
`
export default AdminUserCard
