import React from "react";
import  ReactDOM  from "react-dom";

// const heading= React.createElement("h1",{id:"heading"},"Namste React")

// jsx (transpiled before it reaches the js)-PARCEL-Babel

// jsx => React.createElement. JS object => HTMLelement(render)

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>

 const root=ReactDOM.createRoot(document.getElementById("root"));

//  React component
const HeadingComponent = () =>(
    <div className="container">
        <h1> namste react functional component</h1>
    </div>
)

  root.render(<HeadingComponent/>)