import { useState } from 'react'
import SignInWithGoolge from './components/login/SignInWithGoolge'
import Button from './components/UI/buttons/Button'
import Modal from './components/UI/modal/Modal'

function App() {
   const [show, setShow] = useState(true)
   const hideModal = () => setShow(false)
   return (
      <div className="App">
         <Button onClick={() => setShow(true)}>show modal</Button>
         <Modal onClose={hideModal} isVisible={show}>
            <SignInWithGoolge />
         </Modal>
      </div>
   )
}

export default App
