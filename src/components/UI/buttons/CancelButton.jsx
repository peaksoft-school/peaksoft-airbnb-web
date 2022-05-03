import styled from 'styled-components'

const CancelButton = (props) => {
   return <CancelStyled {...props}>{props.children}</CancelStyled>
}
const CancelStyled = styled.button`
   border: none;
   padding: 8px 16px;
   font-family: 'Inter';
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   text-transform: uppercase;
   background: #ffffff;
   color: #828282;
   cursor: pointer;
   :active {
      color: #363636;
   }
`
export default CancelButton
