import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Navbar from './components/Layout/Navbar.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />  
  </StrictMode>,
)
