import React from 'react';
import "./Navbar.css"
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
		<header class="header">
		<div class="left">
			<a href="#">Home</a>
		</div>
  <div class="mid">
		<ul class="navbar">
			 <li>
      <Link to="/">Grocery stores</Link>
    </li>
       <li>
      <Link to="/vendorform">VendorForm</Link>
    </li>

    <li>
      <Link to="/vendorregistration">VendorRegistration</Link>
    </li>

    <li>
      <Link to="/vendoritems">VendorItems</Link>
    </li>
    <li>
      <Link to="/vendorlogin">VendorLoginForm</Link>
    </li>
    <li>
      <Link to="/vendorloginr">VendorLoginReg</Link>
    </li>

		</ul>
   
  </div>
	<div class="right">
          <a href="#">Welcome</a>
        </div>

    </header>
  );
}
export default Navbar;