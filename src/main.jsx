import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main.jsx';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Classes from './Components/Classes';
import Instructors from './Components/Instructors';
import AuthProviders from './Components/Providers/AuthProvider';
import DashBoard from './Components/DashBoard';
import UserProfile from './Components/UserProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
        loader: () => fetch('https://summer-camp-server-kappa-nine.vercel.app/classes')
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
        loader: () => fetch('https://summer-camp-server-kappa-nine.vercel.app/instructors')
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>
      },
      {
        path: "/userprofile",
        element: <UserProfile></UserProfile>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
