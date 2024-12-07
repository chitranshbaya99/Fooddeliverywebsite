import { LOGO_URL } from "./utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import userContext from "./utils/UserContext";
import {  useSelector } from "react-redux";
import appStore from "./utils/appStore";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  
  
   const onlinestatus = useOnlineStatus();
   console.log("onlinestatus",onlinestatus);
   const [btnNameReact, setbtnNameReact] = useState(["Login"]);
   const {loggedInUser} = useContext(userContext);
   const cartItems = useSelector((store)=> store.cart.items);

  
    return(
      <div className= "flex justify-between bg-gray-800">
        <div className='logo-container'>
            <img className="w-40" src={LOGO_URL} alt='logo-image'></img>
          </div>
          <div className="flex items-center">
          {/* <ul className="flex p-4 m-4 text-none list-none"> 
            <li className='px-3'>Online Status : {onlinestatus ? "✅" : "🔴"}</li>
            <li className='px-3'><Link to="/">Home</Link></li>
            <li className='px-3'><Link to="/About">About Us</Link></li>
            <li className='px-3'><Link to="/Contact">Contact Us</Link></li>
            <li className="px-4 font-bold text-xl flex-auto">
            <Link to="/cart">Cart<FaCartShopping /></Link>({cartItems.length})
           
            </li>
            <button className="login-btn px-3" onClick={()=> {
             btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login")
                }}>{btnNameReact}</button>
                <li className='px-3 font-bold'>{loggedInUser}</li>
          </ul> */}


          <ul className="flex items-center p-4 m-4  shadow-lg rounded-md list-none bg-white">
    <li className="px-3">
      Online Status: {onlinestatus ? "✅" : "🔴"}
    </li>
    <li className="px-3">
      <Link to="/" className="hover:text-blue-500">Home</Link>
    </li>
    <li className="px-3">
      <Link to="/About" className="hover:text-blue-500">About Us</Link>
    </li>
    <li className="px-3">
      <Link to="/Contact" className="hover:text-blue-500">Contact Us</Link>
    </li>
    <li className="px-4 font-bold text-xl flex">
      <Link to="/cart" className="flex items-center hover:text-blue-500">
        Cart <FaCartShopping className="ml-1" />
      </Link> 
      ({cartItems.length})
    </li>
    <li className="px-3">
      <button
        className="login-btn px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")}
      >
        {btnNameReact}
      </button>
    </li>
    <li className="px-3 font-bold">
      {loggedInUser}
    </li>
  </ul>

          </div>
        </div>
    
    )
  }

  export default Header;