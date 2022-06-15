import { Breadcrumbs, Link, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { useLocation } from 'react-router-dom'

export const BreadCrumbs = (props) => {
   const { pathname } = useLocation()
   const paths = pathname.split('/').filter((x) => x)
   const pathsHistory = props.pathsArray.slice(0, paths.length)
   const crumbs = pathsHistory.map((crumb, index) => {
      const crumbHref = `/${paths.slice(0, index + 1).join('/')}`
      const isLast = index === paths.length - 2
      return isLast ? (
         <LastPathStyle color="black" key={crumb.path}>
            {crumb.name}
         </LastPathStyle>
      ) : (
         <LinkStyleControl underline="hover" href={crumbHref} key={crumb.path}>
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
   letter-spacing: 0.02em;
   font-family: sans-serif;
   margin-left: 20px;
`
const LinkStyleControl = styled(Link)`
   color: ${({ color }) => color || 'gray'};
`
const LastPathStyle = styled(Typography)`
   font-size: 14px;
   letter-spacing: 0.02em;
   font-family: sans-serif;
`
