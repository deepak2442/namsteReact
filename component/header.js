import { Logo_url } from "../utills/mock data";

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {Logo_url}/>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


export default Header;