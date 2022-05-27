import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled.div`
   width: ${(props) => props.width || ''};
   display: flex;
   flex-direction: ${(props) => props.direction || 'row'};
   align-items: ${(props) => props.align || 'stretch'};
   justify-content: ${(props) => props.justify || 'stretch'};
   flex-wrap: ${(props) => props.wrap || 'nowrap'};
   gap: ${(props) => props.gap || '0px'};
   margin: ${({ margin }) => margin || '0'};
   height: ${({ height }) => height || ''};
`

const Flex = (props) => {
   return <StyledFlex {...props} />
}

export default Flex
