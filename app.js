import React, { Suspense, lazy } from "react";
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
import { Provider } from "react-redux";
import appStore from "./utills/appStore";
import Cart from "./component/cart";
// import Grocery from "./component/grocery.js"
// chunks
// lazy loading
// Dynamic building
// code splitting
// on demand loading

const Grocery =  lazy(() => import("./component/grocery"))




const App =() =>{
    return(
        <Provider store={appStore}>
        <div>
        <Header />
        <Outlet />
        </div></Provider>
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
            },
            {
                path:"/Grocery",
                element:<Suspense fallback= {<h1> Loading.....</h1>}> <Grocery /> </Suspense>
            },
            {
                path:"/cart",
                element:<Cart />
            }
        ] ,
        errorElement: <Error />  
     },

   
   ])

  root.render(<RouterProvider router={appRouter} />)