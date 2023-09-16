import React, { Suspense  , useContext} from 'react'
import ReactDOM from 'react-dom/client'
import UserProvider from "./ContextApi/UserProvider";
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import "./index.css"





ReactDOM.createRoot(document.getElementById('root')).render(


  <BrowserRouter>
  <UserProvider>
  <App />
  </UserProvider>
  </BrowserRouter>

)