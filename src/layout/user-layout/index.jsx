import React from 'react'
import styled from 'styled-components'
import { useLocation, useSearchParams, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Footer from './footer/Footer'
import Header from './header-user/Header'
import HeaderMain from './header-main/Header'
import SignInWithGoogle from '../../components/login/SignInWithGoogle'
import SignInAsAdmin from '../../components/login/SignInAsAdmin'
import Modal from '../../components/UI/modal/Modal'
import LogOutModal from '../../components/login/LogOutModal'
import { modalActions } from '../../store/modalSlice'

const UserLayout = () => {
   const [params, setParams] = useSearchParams()
   const { pathname } = useLocation()
   const dispatch = useDispatch()
   const { modalLogOut } = useSelector((state) => state.modal)

   const showSignInWithGoogle = () => setParams({ signIn: 'google' })

   const showSignInAsAdminHandler = () => setParams({ signIn: 'admin' })

   const paramsValue = params.get('signIn')

   const hideSignIn = () => {
      setParams('')
   }
   return (
      <>
         <Modal
            width="420px"
            isVisible={modalLogOut}
            onClose={() => dispatch(modalActions.hideLogOutModal())}
         >
            <LogOutModal />
         </Modal>
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
         <Main>
            <Outlet />
         </Main>
         <Footer />
      </>
   )
}
const Main = styled.main`
   min-height: 80vh;
`

export default UserLayout
