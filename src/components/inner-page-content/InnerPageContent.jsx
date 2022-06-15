import { Avatar } from '@mui/material'
import React from 'react'
import media from '../../utils/helpers/media'
import ReplaceImages from '../UI/replace-image/ReplaceImages'
import Text from '../UI/typography/Text'
import Title from '../UI/typography/Title'
import Flex from '../UI/ui-for-positions/Flex'
import styled from 'styled-components'

const InnerPageContent = ({ listing = {}, children }) => {
   return (
      <>
         <LeftContent>
            <ReplaceImages dataSlider={listing?.images} />
         </LeftContent>
         <RightContent>
            <Flex direction="column">
               <Flex gap="14px">
                  <Tag>{listing?.type}</Tag>
                  <Tag>{listing?.maxNumberOfGuests} Guests</Tag>
               </Flex>
               <Flex direction="column" margin="8px 0 30px 0" gap="20px">
                  <Flex direction="column" gap="6px" margin="15px 0 20px 0">
                     <Title color="#000000" size="20px">
                        {listing?.title}
                     </Title>
                     <Text>{listing?.address}</Text>
                  </Flex>
                  <Text color="#363636">{listing?.description}</Text>
               </Flex>
               <Flex gap="16px" margin="32px 0 0 0 " align="center">
                  <Avatar
                     src={(listing?.user && listing?.user?.avatar) || ''}
                  />
                  <Flex direction="column">
                     <Title color="#000000">
                        {listing?.user && listing?.user?.name}
                     </Title>
                     <Text>
                        {(listing?.user && listing?.user?.email) || ''}
                     </Text>
                  </Flex>
               </Flex>
            </Flex>
            {children}
         </RightContent>
      </>
   )
}
const LeftContent = styled(Flex)`
   width: 50%;
   display: flex;
   flex-direction: column;
   ${media.desktop`
   margin: 0 auto;
      width:100%;
   `}
`
const RightContent = styled(Flex)`
   width: 50%;
   display: flex;
   flex-direction: column;
   ${media.desktop`
      width:100%;
   `}
`
const Tag = styled.span`
   background: #fff0f6;
   border: 1px solid #ffcbe0;
   padding: 6px 8px;
   font-family: 'Inter';
   text-transform: lowercase;
`
export default InnerPageContent
