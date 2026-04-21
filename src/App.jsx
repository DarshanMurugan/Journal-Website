import Journal from "./Journal.jsx"
import { Link, Route,Routes} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import Home from "./Home.jsx";
import Authenticator from "./authentication.jsx";
import  "./auth_styles.css"
import CreateAccount from "./CreateAccount.jsx"
import WelcomePage from "./WelcomePage.jsx";

function App(){
  return <RouterProvider router={router} />;

}
const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage /> 
  },
  {
    path: '/login',
    element: <Authenticator />
  },
  {
    path: '/create-account',
    element: <CreateAccount/>
  },
  
    {
      path: '/Journal',
      element: <Journal />
    },
          
       
  
  
]);
export default App;

