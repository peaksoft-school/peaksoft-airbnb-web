import styled from 'styled-components'

const Button = (props) => {
   return <ButtonStyled {...props}>Default{props.children}</ButtonStyled>
}

const ButtonStyled = styled.button`
   border: none;
   width: ${({ width }) => width || '153px'};
   border-radius: 2px;
   padding: 10px 16px;
   background: #dd8a08;
   border-radius: 2px;
   font-family: 'Inter', sans-serif;
   font-weight: 500;
   font-size: ${({ size }) => size || '14px'};
   line-height: 17px;
   text-transform: uppercase;
   color: #f7f7f7;
   transition: 0.2s;
   cursor: pointer;
   :hover {
      background: #bb7200;
      :active {
         background: #f2b75b;
         :disabled {
            background: #c4c4c4;
            cursor: not-allowed;
         }
      }
   }
`

export default Button
