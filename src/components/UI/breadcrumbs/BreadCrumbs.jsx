import { Breadcrumbs } from '@mui/material'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import Title from '../typography/Title'

export const BreadCrumbs = ({ pathsArray }) => {
   const pathsHistory = pathsArray.slice(0, pathsArray.length)
   const crumbs = pathsHistory.map((crumb, index) => {
      const isLast = index === pathsArray.length - 1
      return isLast ? (
         <LastPathStyle color="black" key={crumb.path}>
            {crumb.name}
         </LastPathStyle>
      ) : (
         <LinkStyleControl to={crumb.path} key={crumb.path}>
            {crumb.name}
         </LinkStyleControl>
      )
   })
   return (
      <StyledCrumbs aria-label="breadcrumbs" separator="/">
         {crumbs}
      </StyledCrumbs>
   )
}
const StyledCrumbs = styled(Breadcrumbs)`
   display: flex;
   align-items: center;
   text-align: center;
   font-size: 14px;
   margin: 15px 0 20px 0;
`
const LinkStyleControl = styled(Link)`
   display: block;
   text-transform: lowercase;
   color: ${({ color }) => color || 'gray'};
   letter-spacing: 0.02em;
   font-family: sans-serif;
   font-family: 'Inter';
   font-size: 15px;
   color: #c4c4c4;
   ::first-letter {
      text-transform: uppercase;
   }
`
const LastPathStyle = styled(Title)`
   text-transform: lowercase;
   font-size: 15px;
   letter-spacing: 0.02em;
   font-family: sans-serif;
   letter-spacing: 0.02em;
   font-family: sans-serif;
   font-family: 'Inter';
   font-size: 14px;
   ::first-letter {
      text-transform: uppercase;
   }
`
