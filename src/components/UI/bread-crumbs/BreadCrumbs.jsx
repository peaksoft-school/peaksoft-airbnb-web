import React from 'react'
import { Typography, Link, Breadcrumbs } from '@mui/material'

const clickHandler = (event) => {
   event.preventDefault()
   console.info('You clicked a breadcrumb.')
}

const BreadCrumbs = () => {
   return (
      <Breadcrumbs aria-label="breadcrumb">
         <Link color="inherit" href="/main" onClick={clickHandler}>
            Main
         </Link>
         <Link
            color="inherit"
            href="/main/:region/:house/"
            onClick={clickHandler}
         >
            House
         </Link>
         <Typography color="textPrimary">Profile</Typography>
      </Breadcrumbs>
   )
}

export default BreadCrumbs
