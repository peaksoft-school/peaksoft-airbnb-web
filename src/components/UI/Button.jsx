import styled from 'styled-components'

const Button = (props) => {
   return <ButtonStyled {...props}>Default{props.children}</ButtonStyled>
}

const ButtonStyled = styled.button`
   border: 1px solid #dd8a08;
   width: ${({ width }) => width || '153px'};
   border-radius: 2px;
   padding: 8px 16px;
   background: ${({ outline }) => (outline ? 'white' : '#dd8a08')};
   border-radius: 2px;
   font-family: 'Inter', sans-serif;
   font-weight: 500;
   font-size: ${({ size }) => size || '14px'};
   line-height: 17px;
   text-transform: uppercase;
   color: ${({ outline }) => (outline ? '#DD8A08' : '#F7F7F7')};
   transition: 0.2s;
   cursor: pointer;
   :hover {
      background: #bb7200;
      color: #f7f7f7;
   }
   :active {
      background: #f2b75b;
      color: #f7f7f7;
   }
   :disabled {
      background: #c4c4c4;
      cursor: not-allowed;
   }
`

export default Button
