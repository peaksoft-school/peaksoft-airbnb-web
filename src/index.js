import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import App from './App'
import Loader from './components/UI/loader/Loader'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <Suspense fallback={<Loader />}>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </Suspense>
      </Provider>
   </React.StrictMode>
)
