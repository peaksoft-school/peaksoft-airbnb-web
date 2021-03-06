import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header/Header'
import Modal from '../../components/UI/modal/Modal'
import { modalActions } from '../../store/modalSlice'
import LogOutModal from '../../components/login/LogOutModal'
import RejectModal from '../../pages/admin-pages/announcement-detail/RejectModal'
import { REJECT_LISTING } from '../../utils/constants/general'

const AdminLayout = () => {
   const dispatch = useDispatch()
   const { modalLogOut } = useSelector((state) => state.modal)
   const [params, setParams] = useSearchParams()
   const rejectModal = params.get([REJECT_LISTING])

   const closeRejectModalHandler = () => setParams('')
   return (
      <>
         <RejectModal
            isVisible={rejectModal}
            onClose={closeRejectModalHandler}
         />
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
