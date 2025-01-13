import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import routes from './Routes/routes';
import Provider from './provider/Provider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={routes} />
    </Provider>

  </StrictMode>,
)
