import React from 'react'
import styled from 'styled-components'

const Centered = (props) => {
   return <CenterStyled>{props.children}</CenterStyled>
}
const CenterStyled = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`

export default Centered
