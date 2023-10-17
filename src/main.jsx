import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Home from './Components/Home/Home';
import CreateUser from './Components/CreateUser/CreateUser';
import UpdateUser from './Components/UpdateUser/UpdateUser';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:  ()=> fetch('http://localhost:3000/users')
      },
      {
        path: "/createuser",
        element: <CreateUser></CreateUser>
      },
      {
        path: "/updateuser/:id",
        element: <UpdateUser></UpdateUser>,
        loader:  ({params})=> fetch(`http://localhost:3000/users/${params.id}`)
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
