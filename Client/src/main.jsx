import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import HomePage from "./components/homePage/homePage"
import AdminLoginPage from "./components/adminLoginPage/adminLoginPage"
import Dashboard from './components/dashboard/dashboard'
import "./index.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/adminlogin',
        element: <AdminLoginPage />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
)