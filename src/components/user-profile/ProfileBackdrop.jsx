import styled from 'styled-components'
import Text from '../UI/typography/Text'

const ProfileBackdrop = () => {
   return (
      <BackdropStyled>
         <Text color="white">
            Your application has been blocked, please contact the administrator
         </Text>
      </BackdropStyled>
   )
}

const BackdropStyled = styled.div`
   width: 214px;
   height: 60px;
   background: #646464;
   border-radius: 4px;
   padding-left: 8px;
`

export default ProfileBackdrop
