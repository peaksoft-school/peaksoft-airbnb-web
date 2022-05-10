import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import Select from '../../../assets/icons/select.svg'
import media from '../../../utils/helpers/media'
import Title from '../../../components/UI/typography/Title'

const ContentForProfile = () => {
   const [showProfile, setShowProfile] = useState(false)

   const logoutHandler = () => {
      setShowProfile(false)
   }
   return (
      <Flex align="center" gap="20px">
         <Profile onClick={() => setShowProfile(!showProfile)}>
            <Title size="18px" color="white">
               Administrator
            </Title>
            <Selection show={showProfile} src={Select} />
            {showProfile && (
               <AboutProfile>
                  <AboutItem onClick={logoutHandler}>Log out</AboutItem>
               </AboutProfile>
            )}
         </Profile>
      </Flex>
   )
}
const AboutProfile = styled.div`
   width: 180px;
   padding: 0.5rem;
   background-color: white;
   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
   position: absolute;
   bottom: -60px;
   left: -10px;
   border-radius: 3px;
   animation: YES ease-in-out 0.3s;
   @keyframes YES {
      0% {
         opacity: 0;
         margin-bottom: 10px;
      }
      100% {
         opacity: 1;
         margin: 0;
      }
   }
   ${media.tablet`
   left:-110px;
   `}
`
const AboutItem = styled.div`
   width: 100%;
   padding: 0.4rem 1rem;
   font-family: 'Inter';
   border-radius: 3px;
   margin-bottom: 3px;
   :hover {
      background-color: #efefef;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
   }
`
const Profile = styled.button`
   border: none;
   background: none;
   padding: 0.5rem;
   display: flex;
   align-items: center;
   gap: 10px;
   cursor: pointer;
   position: relative;
   ${media.tablet`
      display:none;
   `}
`
const Selection = styled.img`
   transition: all 0.5s;
   transform: ${({ show }) => (show ? 'rotate(540deg)' : 'rotate(0deg)')};
`

export default ContentForProfile
