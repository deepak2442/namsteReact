import React from "react";
import  ReactDOM  from "react-dom";

// -----without JSX-----
const h1 =React.createElement("h1",{},"im h1")
const h2 = React.createElement("h2",{},"im h2")
const h3=React.createElement("h3",{},"im h3")

const divwithoutJsx=React.createElement("div",{className: 'title'},[h1,h2,h3])
 
// export default divwithoutJsx;

// ------with JSX------

const withjsx =(
    <div className="title">
        <h1>I'm h1</h1>
        <h2>I'm h2</h2>
        <h3>I'm h3</h3>
    </div>
);

// export default withjsx;

// -----component----
const H1 = () => <h1>I'm h1</h1>
const H2 = () => <h2>I'm h1</h2>
const H3 = () => <h3>I'm h1</h3>

const Logo = ()=>(
    <div className="logo">
        <img src={logo} alt="Logo"/>
    </div>
);

const SearchBar =()=>(
<div className="search-bar">
    <input type="text" placeholder="Search.."/>
</div>
)

const UserIcon = ()=>(
    <div className="user-icon">
        <img src={icon} alt="user icon"/>{''}
    </div>
)

const DIvwithJSXandComponents = ()=>(
    <div className="title">
        <Logo/>
        <SearchBar/>
        <UserIcon/>

    </div>
)















root.render(<HeadingComponent/>)