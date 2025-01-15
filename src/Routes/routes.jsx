import { createBrowserRouter } from 'react-router-dom';
import SingUp from '../pages/Login/SingUp';
import SignIn from '../pages/Login/SingIn'
import Main from '../Layouts/Main';
import Home from '../pages/Home/Home'
import Contact from '../pages/Home/Contact'
import Dashboard from '../pages/Dashboard/Dashboard';
import WorkSheet from '../pages/Dashboard/rightside/WorkSheet';
import Private from '../private/Private';



const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/contactus',
        element: <Contact></Contact>
      },
      {
        path: '/signup',
        element: <SingUp></SingUp>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      }
    ],
  },
  {
    path: '/dashboard',
    element: <Private><Dashboard></Dashboard></Private>,
    children: [
      {
        path: 'work-sheet',
        element: <WorkSheet></WorkSheet>
      },
    ]
  }



]);

export default routes;


