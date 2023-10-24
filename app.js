import React from "react";
import  ReactDOM  from "react-dom";
import Header  from "./component/header";
import Body from "./component/body";

const App =() =>{
    return(
        <div>
        <Header />
        <Body />
        </div>
    )
}
   const root=ReactDOM.createRoot(document.getElementById("root"));


  root.render(<App/>)