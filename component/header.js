import { Logo_url } from "../utills/mock data";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utills/useOnlinestatus";

const Header = () =>{

    const onlineStatus = useOnlinestatus()
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {Logo_url}/>
            </div>
            <div className="nav-item">
                <ul>
                    <li>onlineStatus: {onlineStatus===true? "🟩":"🟥" }</li>
                    <li> <Link to="/">Home</Link>  </li>
                    <li> <Link to="/about"> About us</Link>  </li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/Grocery">Grocery</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


export default Header;