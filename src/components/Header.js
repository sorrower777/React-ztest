import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import {Link} from "react-dom";

const Header = () =>{
    // let btnName = "Login";
    const [btnNameReact , setBtnNameReact] = useState("Login");
    console.log("Header render");
    // if no dependency array => useEffect is called on every render.
    // if dependency array is empty = []=> useEffect is called on initial render(just once).
    // if dependency array is [btnNameReact] => useEffect called everytime btnNameReact is updated
    useEffect(() =>{
        console.log("useEffect called");
    },[]);
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/> 
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/contact"}>Contact Us</Link></li>
                    <li>Restaurant Menu</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        setBtnNameReact("Logout");
                        console.log(btnNameReact);
                        }}>{btnNameReact}
                        </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;