import React from 'react'
import styled from 'styled-components'
import LogoAirBnb from '../../../components/UI/Logo/LogoAirBnb'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import { ReactComponent as Instagram } from '../../../assets/icons/Instagram.svg'
import { ReactComponent as Whatsapp } from '../../../assets/icons/Whatsapp.svg'
import { ReactComponent as Telegram } from '../../../assets/icons/Telegram.svg'
import Text from '../../../components/UI/typography/Text'
import media from '../../../utils/helpers/media'

const Footer = () => {
   return (
      <FooterStyled>
         <Flex align="center" justify="space-between" wrap="wrap" gap="20px">
            <List>
               <Li>
                  <a href="/">Regions</a>
               </Li>
               <Li>
                  <a href="/">Leave an ad</a>
               </Li>
            </List>
            <Content>
               <LogoAirBnb />
            </Content>
            <Flex gap="15px">
               <Social>
                  <Instagram />
               </Social>
               <Social>
                  <Telegram />
               </Social>
               <Social>
                  <Whatsapp />
               </Social>
            </Flex>
         </Flex>
         <Flex justify="center" margin="60px 0 0 0">
            <Text>© Copyright PeakSoft. All Rights Reserved</Text>
         </Flex>
      </FooterStyled>
   )
}
const FooterStyled = styled.footer`
   width: 100%;
   background: #1c2e20;
   padding: 60px 100px 20px 100px;
   ${media.tablet`
      padding: 30px 50px 10px 30px;
   `}
`
const List = styled.ul`
   list-style: none;
   display: flex;
   gap: 40px;
   @media (max-width: 600px) {
      flex-direction: column;
      gap: 10px;
   }
`
const Social = styled.div`
   width: 40px;
   height: 40px;
   background: #ffffff1f;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 2px;
   cursor: pointer;
   :hover {
      background-color: #e4e4e41f;
   }
`
const Li = styled.li``

const Content = styled.div`
   transform: translate(-30px);
   @media (max-width: 600px) {
      transform: translate(0px);
   }
`
export default Footer
