import Journal from "./Journal.jsx"
import { Link, Route,Routes} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import Home from "./Home.jsx";
import Authenticator from "./authentication.jsx";
import  "./auth_styles.css"
import Content from "./content.jsx";
import SearchPage from "./SearchPage.jsx";




function App(){
  return <RouterProvider router={router} />;

}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Authenticator /> 
  },
  {
    path: "/main",
    element: <SearchPage/>,
    children: [
  
          {
            path: 'Journal',
            element: <Journal />
          },
          {
            path:'Content',
            element: <Content/>
          }
    ],
  }
]);

// function App() {
//   return(
//      <Routes>
//       <Route path="/" element= {<Authenticator/>}></Route>
//       <Route path="/main" element={<SearchPage/>}>
//           <Route path="Journal" element={<Journal />} />
//           <Route path="Content" element={<Content/>} />
//       </Route>
//     </Routes>
//   )
// }

export default App;

