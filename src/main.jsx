import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// RBS css file
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './components/Layout/Root';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import RegisterRBS from './components/RegisterRBS/RegisterRBS';
import RegisterBS from './components/RegisterBS/RegisterBS';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register-rbs',
        element: <RegisterRBS></RegisterRBS>
      },
      {
        path: '/register-bs',
        element: <RegisterBS></RegisterBS>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
    router={router}
    ></RouterProvider>
  </React.StrictMode>,
)
