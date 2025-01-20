import { createBrowserRouter } from 'react-router-dom';
import SingUp from '../pages/Login/SingUp';
import SignIn from '../pages/Login/SingIn'
import Main from '../Layouts/Main';
import Home from '../pages/Home/Home'
import Contact from '../pages/Home/Contact'
import Dashboard from '../pages/Dashboard/Dashboard';
import WorkSheet from '../pages/Dashboard/rightside/WorkSheet';
import Private from '../private/Private';
import EmployeeList from '../pages/Dashboard/rightside/HR/EmployeeList';
import Progress from '../pages/Dashboard/rightside/HR/Progress';
import EmployeDetails from '../pages/Dashboard/rightside/HR/EmployeDetails';
import AllEmployee from '../pages/Dashboard/rightside/Admin/AllEmployee';
import PayRole from '../pages/Dashboard/rightside/Admin/PayRole';
import PaymentHistory from '../pages/Dashboard/rightside/Employee/PaymentHistory';
import EmployeeRoutes from './EmployeeRoutes';
import HrRoutes from './HrRoutes';
import AdminRoutes from './AdminRoutes';
import ManDashboard from '../pages/Dashboard/rightside/ManDashboard';
import ErrorPage from '../component/ErrorPage';



const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
      // Employee
      {
        path: '/dashboard',
        element: <ManDashboard></ManDashboard>
      },
      {
        path: 'work-sheet',
        element: <Private><EmployeeRoutes><WorkSheet></WorkSheet></EmployeeRoutes></Private>
      },
      {
        path: 'payment-history',
        element: <Private><EmployeeRoutes><PaymentHistory /></EmployeeRoutes></Private>
      },
      // HR
      {
        path: 'employee-list',
        element: <Private><HrRoutes><EmployeeList></EmployeeList></HrRoutes></Private>
      },
      {
        path: 'progress',
        element: <Private><HrRoutes><Progress></Progress></HrRoutes></Private>
      },
      {
        path: 'details/:email',
        element: <Private><HrRoutes><EmployeDetails></EmployeDetails></HrRoutes></Private>
      },
      //Admin
      {
        path: 'all-employee-list',
        element: <Private><AdminRoutes><AllEmployee></AllEmployee></AdminRoutes></Private>
      },
      {
        path: 'payroll',
        element: <Private><AdminRoutes><PayRole></PayRole></AdminRoutes></Private>
      },

    ]
  }



]);

export default routes;


