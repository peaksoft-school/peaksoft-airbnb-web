import styled from 'styled-components'
import Title from '../UI/typography/Title'
import Flex from '../UI/ui-for-positions/Flex'

const UserCart = () => {
   return (
      <Wrapper>
         <Div />
         <Flex>
            <Title color="#646464" className="text">
               Name: <strong>Медер Медербеков</strong>
            </Title>
         </Flex>
         <Flex>
            <Title color="#646464">
               Contact: <strong>mederbekov@gmail.com</strong>
            </Title>
         </Flex>
         <Flex>
            <Title className="logout" color="#FF4B4B;">
               Log out
            </Title>
         </Flex>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   margin-top: 50px;
   max-width: 372px;
   width: 100%;
   height: 285px;
   padding: 2rem;
   background-color: #f1f1f1;
   border: 1px solid #c4c4c4;
   border-radius: 16px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   position: relative;
   strong {
      color: #202020;
   }
   .logout {
      position: absolute;
      left: 3.5rem;
   }
`
const Div = styled.div`
   border-radius: 95px;
   background: #266bd3;
   width: 89px;
   height: 89px;
   color: #ffffff;
   padding: 26px;
`
export default UserCart
