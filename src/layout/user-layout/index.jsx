import React from 'react'
import styled from 'styled-components'
import { useLocation, useSearchParams } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header-user/Header'
import HeaderMain from './header-main/Header'
import SignInWithGoogle from '../../components/login/SignInWithGoogle'
import SignInAsAdmin from '../../components/login/SignInAsAdmin'
import Modal from '../../components/UI/modal/Modal'

const UserLayout = (props) => {
   const [params, setParams] = useSearchParams()
   const { pathname } = useLocation()

   const showSignInWithGoogle = () => setParams({ signIn: 'google' })

   const showSignInAsAdminHandler = () => setParams({ signIn: 'admin' })

   const paramsValue = params.get('signIn')

   const hideSignIn = () => {
      setParams('')
   }
   return (
      <>
         <Modal
            onClose={hideSignIn}
            width="480px"
            isVisible={paramsValue === 'google' || paramsValue === 'admin'}
         >
            {paramsValue === 'google' ? (
               <SignInWithGoogle
                  showSignInAsAdminHandler={showSignInAsAdminHandler}
               />
            ) : (
               <SignInAsAdmin />
            )}
         </Modal>

         {pathname === '/main' ? (
            <HeaderMain showSignInWithGoogle={showSignInWithGoogle} />
         ) : (
            <Header showSignInWithGoogle={showSignInWithGoogle} />
         )}
         <Main>{props.children}</Main>
         <Footer />
      </>
   )
}
const Main = styled.main`
   min-height: 80vh;
`

export default UserLayout
