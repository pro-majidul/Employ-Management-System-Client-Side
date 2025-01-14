import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import routes from './Routes/routes';
import Provider from './provider/Provider';
import { HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <HelmetProvider>
        <RouterProvider router={routes} />
      </HelmetProvider>
    </Provider>
  </StrictMode>,
)
