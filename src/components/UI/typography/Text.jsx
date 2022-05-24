import React from 'react'
import styled from 'styled-components'

const Text = (props) => {
   return <TextStyled {...props}>{props.children}</TextStyled>
}
const TextStyled = styled.p`
   display: inline;
   font-family: 'Inter';
   font-weight: 400;
   font-size: ${({ size, feedback }) => (feedback && '16px') || size || '14px'};
   line-height: 130%;
   color: ${({ feedback, color }) =>
      feedback ? '#646464' : color || '#828282'};
`
export default Text
