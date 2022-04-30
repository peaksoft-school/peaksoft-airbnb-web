import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.div`
   width: ${(props) => props.width || ''};
   display: grid;
   grid-template-columns: ${(props) => props.columns || '0fr'};
   align-items: ${(props) => props.align || 'stretch'};
   justify-content: ${(props) => props.justify || 'start'};
   grid-template-rows: ${(props) => props.rows || '0fr'};
   gap: ${(props) => props.gap || '0px'};
   margin: ${({ margin }) => margin || '0'};
`

const Grid = (props) => {
   return <StyledGrid {...props} />
}

export default Grid
