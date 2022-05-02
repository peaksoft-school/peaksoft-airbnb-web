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
   @media (max-width: 770px) {
      width: ${(props) => props.widthTab || ''};
      display: flex;
      flex-direction: ${(props) => props.directionTab || 'row'};
      align-items: ${(props) => props.alignTab || ''};
      justify-content: ${(props) => props.justifyTab || 'stetch'};
      flex-wrap: ${(props) => props.wrapTab || 'nowrap'};
      gap: ${(props) => props.gapTab || '0px'};
      margin: ${({ marginTab }) => marginTab || '0'};
   }
   @media (max-width: 425px) {
      width: ${(props) => props.widthMob || ''};
      display: flex;
      flex-direction: ${(props) => props.directionMob || 'row'};
      align-items: ${(props) => props.alignMob || ''};
      justify-content: ${(props) => props.justifyMob || ''};
      flex-wrap: ${(props) => props.wrapMob || 'nowrap'};
      gap: ${(props) => props.gapMob || '0px'};
      margin: ${({ marginMob }) => marginMob || '0'};
   }
`

const Flex = (props) => {
   return <StyledFlex {...props} />
}

export default Flex
