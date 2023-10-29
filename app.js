import React from "react";
import  ReactDOM  from "react-dom/client";
import Header  from "./component/header";
import Body from "./component/body";
import { createBrowserRouter } from "react-router-dom";
import About from "./component/about";
import { RouterProvider } from "react-router-dom";
import Error from "./component/error";
import { Outlet } from "react-router-dom";
import ContactUs from "./component/contactUs";
import RestaurantMenu from "./component/RestaurantMenu";
const App =() =>{
    return(
        <div>
        <Header />
        <Outlet />
        </div>
    )
}
   const root=ReactDOM.createRoot(document.getElementById("root"));

   const appRouter= createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children:[
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element:<About />
            },
            {
              path:"/contactus",
              element:<ContactUs />
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu />
            }
        ] ,
        errorElement: <Error />  
     },

   
   ])

  root.render(<RouterProvider router={appRouter} />)