import { forwardRef } from 'react'
import styled from 'styled-components'

const TextArea = forwardRef((props, ref) => {
   return <TextAreaStyled ref={ref} {...props} />
})

const TextAreaStyled = styled.textarea`
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
   resize: none;
   font-family: 'Inter';
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
      border: ${({ isValid }) =>
         isValid ? '1px solid tomato' : '1px solid #ffffff'};
      box-shadow: ${({ isValid }) =>
         isValid
            ? '0 0 0 4px rgba(255, 8, 0, 0.5)'
            : '0 0 0 4px rgba(74, 72, 68, 0.5)'};
   }
`
export default TextArea
