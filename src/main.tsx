import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './Contexts/Provider/AuthProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CategoryProvider from './Contexts/Provider/CategoryProvider'

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider >
        <CategoryProvider>
          <RouterProvider router={router} />
        </CategoryProvider>
      </AuthProvider>
    </QueryClientProvider>
    <ToastContainer />
  </StrictMode>,
)
