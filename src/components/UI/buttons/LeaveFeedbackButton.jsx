import React from 'react'
import styled from 'styled-components'

const LeaveFeedbackButton = (props) => {
   return <FeedbackStyled {...props}>LEAVE FEEDBACK</FeedbackStyled>
}

const FeedbackStyled = styled.button`
   width: 100%;
   color: #828282;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 8px 16px;
   gap: 10px;
   font-family: 'Inter';
   background-color: #e5e5e5;
   border: 1px solid #828282;
   transition: 0.2s;
   cursor: pointer;
   :hover {
      border: 1px solid #828282;
   }
   :active {
      border: 1px solid #828282;
      background: #dd8a08;
   }
`
export default LeaveFeedbackButton
