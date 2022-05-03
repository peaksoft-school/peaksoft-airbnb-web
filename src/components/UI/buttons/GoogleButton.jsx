import styled from 'styled-components'
import { ReactComponent as GoogleSvg } from '../../../assets/icons/google.svg'
import Title from '../typography/Title'

const GoogleButton = (props) => {
   return (
      <GoogleStyled {...props}>
         <GoogleSvg />
         <Title size="18px" weight="bold">
            {props.children}
         </Title>
      </GoogleStyled>
   )
}

const GoogleStyled = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 18.5px;
   padding: 10px 158px;
   width: 100%;
   height: 50px;
   border: 1px solid #c4c4c4;
   border-radius: 8px;
   background-color: #ffffff;
   transition: 0.2s;
   :hover {
      border: 1px solid #828282;
   }
   :active {
      background: rgba(196, 196, 196, 0.2);
      border: 1px solid #828282;
   }
`

export default GoogleButton
