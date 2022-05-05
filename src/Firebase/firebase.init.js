import { initializeApp } from 'firebase/app'
import firebaseConfig from './firebase.config'

const initializeAuthenication = () => {
   initializeApp(firebaseConfig)
}

export default initializeAuthenication
