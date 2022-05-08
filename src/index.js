import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './store'
import Loader from './components/UI/loader/Loader'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <Provider store={store}>
      <Suspense fallback={<Loader />}>
         <BrowserRouter>
            <React.StrictMode>
               <App />
            </React.StrictMode>
         </BrowserRouter>
      </Suspense>
   </Provider>
)
