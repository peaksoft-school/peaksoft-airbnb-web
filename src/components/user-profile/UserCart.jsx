import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import Title from '../UI/typography/Title'
import Flex from '../UI/ui-for-positions/Flex'
import media from '../../utils/helpers/media'
import { modalActions } from '../../store/modalSlice'

const UserCart = () => {
   const { user } = useSelector((state) => state.auth)
   const dispatch = useDispatch()
   return (
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
         <Flex>
            <LogOut onClick={() => dispatch(modalActions.showLogoutModal())}>
               Log out
            </LogOut>
         </Flex>
      </Wrapper>
   )
}
const LogOut = styled(Title)`
   position: absolute;
   left: 0;
   bottom: 0;
   margin: 2em;
   color: #ff4b4b;
   transition: 0.2;
   cursor: pointer;
   :hover {
      color: #bd3434;
   }
`

const Wrapper = styled.div`
   margin-top: 50px;
   width: 372px;
   height: 285px;
   padding: 2rem;
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
export default UserCart
