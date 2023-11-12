import { Logo_url } from "../utills/mock data";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utills/useOnlinestatus";

const Header = () =>{

    const onlineStatus = useOnlinestatus()
    return (
        <div className="flex justify-between bg-indigo-100 shadow-lg">
            <div className="logo-container">
                <img className="w-40" src= {Logo_url}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">onlineStatus: {onlineStatus===true? "🟩":"🟥" }</li>
                    <li className="px-4"> <Link to="/">Home</Link>  </li>
                    <li className="px-4"> <Link to="/about"> About us</Link>  </li>
                    <li className="px-4"><Link to="/contactus">Contact Us</Link></li>
                    <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                </ul>
            </div>
        </div>
    )
}


export default Header;