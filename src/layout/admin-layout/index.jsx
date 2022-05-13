import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header/Header'
import Modal from '../../components/UI/modal/Modal'
import { modalActions } from '../../store/modalSlice'
import LogOutModal from '../../components/login/LogOutModal'

const AdminLayout = () => {
   const dispatch = useDispatch()
   const { modalLogOut } = useSelector((state) => state.modal)
   return (
      <>
         <Modal
            width="420px"
            isVisible={modalLogOut}
            onClose={() => dispatch(modalActions.hideLogOutModal())}
         >
            <LogOutModal />
         </Modal>
         <Header />
         <Main>
            <Outlet />
         </Main>
      </>
   )
}
const Main = styled.main`
   min-height: 80vh;
`

export default AdminLayout
