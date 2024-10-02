import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from './components/Layout'
import './index.css'
import ErrorPage from './pages/ErrorPage'
import Home from  "./pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    errorElement: <ErrorPage />,
    children : [
      {index: true, element: <Home />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
