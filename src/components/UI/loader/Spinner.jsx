import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Loading } from '../../../assets/icons/Loading.svg'

const Spinner = (props) => {
   return <StyledLoading {...props} />
}
const StyledLoading = styled(Loading)`
   & path {
      fill: ${({ dark }) => (dark ? 'black' : 'white')};
   }
   animation: LOADING linear 1s infinite;
   @keyframes LOADING {
      from {
         transform: rotate(0deg);
      }
      to {
         transform: rotate(360deg);
      }
   }
`
export default Spinner
