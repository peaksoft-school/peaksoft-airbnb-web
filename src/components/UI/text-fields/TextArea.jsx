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
   border: 1px solid #c4c4c4;
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
      border: 1px solid #828282;
   }
   :active {
      border: 1px solid #828282;
   }
   :focus {
      -webkit-box-shadow: 0px 0px 5px rgba(97, 110, 117, 0.75);
      -moz-box-shadow: 0px 0px 5px rgba(102, 116, 124, 0.75);
      box-shadow: 0px 0px 5px rgba(79, 90, 97, 0.75);
   }
`
export default TextArea
