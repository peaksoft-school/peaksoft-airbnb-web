import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Button from '../../../../components/UI/buttons/Button'
import LogoAirBnb from '../../../../components/UI/Logo/LogoAirBnb'
import Flex from '../../../../components/UI/ui-for-positions/Flex'
import media from '../../../../utils/helpers/media'
import ContentForProfile from '../content-for-profile/ContentForProfile'
import { ReactComponent as SearchIcon } from '../../../../assets/icons/search.svg'
import Nav from '../../header-menu/Nav'
import Input from '../../../../components/UI/text-fields/Input'
import NavBurger from '../../header-menu/NavBurger'

const HeaderUserContent = ({ auth, showMenuHamdler }) => {
   return (
      <>
         <GlobaStyle />
         <Flex gap="83px" align="center" width="100%">
            <LogoAirBnb color="dark" />
            <Nav dark />
         </Flex>
         <FlexSearch justify="end" align="center">
            <SearchIconWrapper>
               <SearchIcon />
            </SearchIconWrapper>
            <Search placeholder="search" />
            {auth && <Button className="btnSubmit">Submit an as</Button>}
            <ContentForProfile auth={auth} />
            {!auth && (
               <Button className="btn" width="250px">
                  JOIN AS
               </Button>
            )}
            <NavBurger dark showMenuHamdler={showMenuHamdler} />
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
const SearchIconWrapper = styled.div`
   transform: translate(40px, 2px);
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
const Search = styled(Input)`
   width: 100%;
   margin: 0 10px 0 0;
   padding-left: 45px;
`
export default HeaderUserContent
