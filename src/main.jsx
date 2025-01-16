import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import routes from './Routes/routes';
import Provider from './provider/Provider';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <HelmetProvider>
          <RouterProvider router={routes} />
          <ToastContainer />
        </HelmetProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)
