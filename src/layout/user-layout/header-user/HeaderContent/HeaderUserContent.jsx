import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../components/UI/buttons/Button'
import LogoAirBnb from '../../../../components/UI/Logo/LogoAirBnb'
import Flex from '../../../../components/UI/ui-for-positions/Flex'
import media from '../../../../utils/helpers/media'
import ContentForProfile from '../../content-for-profile/ContentForProfile'
// import { ReactComponent as SearchIcon } from '../../../../assets/icons/search.svg'
import Nav from '../../header-menu/Nav'
import NavBurger from '../../header-menu/NavBurger'
import InputSearch from '../../../../components/search-bar'

const HeaderUserContent = ({
   isAuthorized,
   showMenuHandler,
   showSignInWithGoogle,
}) => {
   const navigate = useNavigate()

   const loginHandler = () => showSignInWithGoogle()

   const navigateToForm = () => navigate('/submit-an-ad')
   return (
      <>
         <GlobaStyle />
         <Flex gap="83px" align="center" width="100%">
            <LogoAirBnb color="dark" />
            <Nav dark />
         </Flex>
         <FlexSearch justify="end" align="center">
            <InputSearch />
            {isAuthorized && (
               <Button onClick={navigateToForm} className="btnSubmit">
                  Submit an as
               </Button>
            )}
            <ContentForProfile isAuthorized={isAuthorized} />
            {!isAuthorized && (
               <Button onClick={loginHandler} className="btn" width="250px">
                  JOIN AS
               </Button>
            )}
            <NavBurger dark showMenuHandler={showMenuHandler} />
         </FlexSearch>
      </>
   )
}

const FlexSearch = styled(Flex)`
   width: 100%;
   ${media.tablet`
   width:300rem;
   `}
`

const GlobaStyle = createGlobalStyle`
.btnSubmit{
   min-width: 140px;
   width: 140px;
      ${media.tablet`
         display:none;
      `}
}
`
export default HeaderUserContent
