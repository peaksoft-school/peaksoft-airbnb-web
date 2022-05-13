import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyCniKCyhqZAHKeAVy0UpzLZYw5PUjutTRM',
   authDomain: 'trellopr-7d92a.firebaseapp.com',
   databaseURL: 'https://trellopr-7d92a-default-rtdb.firebaseio.com',
   projectId: 'trellopr-7d92a',
   storageBucket: 'trellopr-7d92a.appspot.com',
   messagingSenderId: '690950240645',
   appId: '1:690950240645:web:9a8f8f3d4d1e2c297c6cec',
}
const app = initializeApp(firebaseConfig)
export const authentication = getAuth(app)
