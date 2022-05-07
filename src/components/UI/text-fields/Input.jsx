import { forwardRef } from 'react'
import styled from 'styled-components'

const Input = forwardRef((props, ref) => {
   return <InputStyled ref={ref} {...props} />
})

const InputStyled = styled.input`
   width: ${({ width }) => width || '100%'};
   padding: 10px 8px;
   border-radius: 2px;
   color: #c4c4c4;
   border: ${({ isValid }) =>
      isValid ? '1px solid tomato' : '1px solid #c4c4c4'};
   font-size: 16px;
   font-weight: 400;
   outline: none;
   transition: 0.2s;
   ::placeholder {
      color: #c4c4c4;
   }
   :hover {
      border: ${({ isValid }) =>
         isValid ? '1px solid tomato' : '1px solid #828282'};
   }
   :active {
      border: 1px solid #828282;
   }
   :focus {
      box-shadow: ${({ isValid }) =>
         isValid
            ? ' 0px 0px 5px tomato'
            : ' 0px 0px 5px rgba(79, 90, 97, 0.75)'};
   }
`
export default Input
