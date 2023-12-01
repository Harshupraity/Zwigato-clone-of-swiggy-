import React from "react";
import useOnline from "./Utils/useOnline";
import {Link} from "react-router-dom";
const Navbar = () => {
  const onlineStatus = useOnline();
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
            <li className="list-none m-2"><Link to="/cart">Carts</Link></li>
        </ul>
    
    </div>
  );
};
export default Navbar;


