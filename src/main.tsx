import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Reservation } from './pages/Reservation.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/reservation",
    element:<Reservation/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
