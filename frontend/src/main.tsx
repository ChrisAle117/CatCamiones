import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Inventario from './pages/Inventario'
import VehicleDetails from './pages/VehicleDetails'
import Contacto from './pages/Contacto'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Inventario /> },
      { path: ':tab', element: <Inventario /> },
      { path: 'vehicle/:id', element: <VehicleDetails /> },
      { path: 'contacto', element: <Contacto /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
