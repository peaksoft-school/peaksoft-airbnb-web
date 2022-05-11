import styled from 'styled-components'
import Title from '../UI/typography/Title'
import Flex from '../UI/ui-for-positions/Flex'

const Profile = () => {
   return (
      <Wrapper>
         <Div>M</Div>
         <Flex>
            <Title width="49px" height="19px" color="#646464">
               Name:
            </Title>
         </Flex>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   max-width: 372px;
   width: 100%;
   height: 285px;
   padding: 1rem;
   background-color: #e5e5e5;
   border: 1px solid #c4c4c4;
   border-radius: 16px;
   box-sizing: border-box;
`
const Div = styled.div`
   border-radius: 150px;
   background: #266bd3;
   width: 89px;
   height: 89px;
   position: relative;
   left: 7rem;
   top: 30px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 38px;
   line-height: 46px;
   /* identical to box height */

   text-transform: uppercase;

   color: #ffffff;
`
export default Profile
