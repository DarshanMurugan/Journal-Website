import Journal from "./Journal.jsx"
import { Link, Route,Routes} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Home.jsx";
import Authenticator from "./authentication.jsx";
import  "./auth_styles.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Authenticator /> 
  },
  {
    path: '/Journal',
    element: <Journal />
  }
]);

function App() {
  return(
     <Routes>
      <Route path="/" element= {<Authenticator/>}></Route>
      <Route path="/Journal" element={<Journal />} />
    </Routes>
  )
}

export default App;

