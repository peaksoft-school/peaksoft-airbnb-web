import React, { useState } from 'react'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Flex from '../../../components/UI/ui-for-positions/Flex'
import Avatar from '../../../assets/icons/Group 1688.svg'
import Select from '../../../assets/icons/select.svg'
import media from '../../../utils/helpers/media'
import { modalActions } from '../../../store/modalSlice'

const ContentForProfile = ({ isAuthorized }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { pathname } = useLocation()
   const [showProfile, setShowProfile] = useState(false)

   const logoutHandler = () => {
      setShowProfile(false)
      dispatch(modalActions.showLogoutModal())
   }
   const profileHanlder = () => {
      navigate('/profile')
      setShowProfile(false)
   }
   const visibleMyProfile = () => {
      return (
         pathname !== '/profile/bookings' &&
         pathname !== '/profile/my-announcements'
      )
   }
   return (
      isAuthorized && (
         <Flex align="center" gap="20px">
            <Profile
               path={pathname}
               onClick={() => setShowProfile(!showProfile)}
               onBlur={() => setShowProfile(false)}
            >
               <Flex align="center" gap="8px">
                  <UserAvatar src={Avatar} />
                  <Selection show={showProfile} src={Select} />
               </Flex>
               {showProfile && (
                  <AboutProfile>
                     {visibleMyProfile() && (
                        <AboutItem onClick={profileHanlder}>
                           My Profile
                        </AboutItem>
                     )}
                     <AboutItem onClick={logoutHandler}>Log out</AboutItem>
                  </AboutProfile>
               )}
            </Profile>
         </Flex>
      )
   )
}
const AboutProfile = styled.div`
   width: 180px;
   padding: 0.5rem;
   background-color: white;
   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
   position: absolute;
   bottom: -90px;
   left: -60px;
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
   display:${({ path }) => (path === '/main' ? 'block' : 'none')};
   `}
   z-index: 11;
`
const UserAvatar = styled.img`
   width: 30px;
   height: 30px;
   border-radius: 50%;
`
const Selection = styled.img`
   transition: all 0.5s;
   transform: ${({ show }) => (show ? 'rotate(540deg)' : 'rotate(0deg)')};
   ${media.tablet`
   opacity:0;
   `}
`

export default ContentForProfile
