import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import SingUp from '../pages/Login/SingUp';
import SingIn from '../pages/Login/SingIn';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/signup',
        element: <SingUp></SingUp>
      },
      {
        path: '/signin',
        element: <SingIn></SingIn>
      }
    ]
  },
  {
    path: '/dashboard',
  }
]);

export default routes;