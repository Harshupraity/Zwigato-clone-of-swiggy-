import React from "react";
import useOnline from "./Utils/useOnline";
// import { userContext } from "./Utils/userContext";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {Link} from "react-router-dom";
import { useContext } from "react";
import userContext from "./Utils/userContext";

const Navbar = () => {
  const onlineStatus = useOnline();
  const cartItems = useSelector((store) => store.cart.items )
  const {loggedInUser} = useContext(userContext); 
  return (
    <div className="nav">
     
        <div className="navbar-logo">
        <img
    src="https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg"
    alt="imjdfjsdh"></img>
        </div>
        <ul className="navbar-links">
          <li>online_Statuss:{onlineStatus ? "🟢":"🔴"}</li>
            <li><Link to ="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/error">Services</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li className="list-none m-2"><Link to="/cart">Carts - {cartItems.length} items</Link></li>
            <li className="px-4">{loggedInUser}</li>
        </ul>
    
    </div>
  );
};
export default Navbar;


