import React from "react";
import ReactDOM from "react-dom/client";
import {  Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Edit from "./components/Edit";
import Update from "./components/Update";
import Add from "./components/Add";
import Read from "./components/Read";


const App = () => {
    return (
        <> 
          <center className="app"><h1>CRUD OPERATIONS</h1></center> 
        <Outlet>    
        </Outlet>
         </>
    )
};

const Router = createBrowserRouter([{
    path: '/',
    element: <App></App>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/edit/:id',
            element: <Edit></Edit>
        },
        {
            path: '/update',
            element: <Update></Update>
        },
        {
            path: '/add',
            element: <Add></Add>
        },
        {
            path: "/read/:id",
            element: <Read></Read>
        },
    ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={Router} />)