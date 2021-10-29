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
      <Link to="/clothes&shoes">Clothes and shoes</Link>
    </li>
    <li>
      <Link to="/electronics">Electronics</Link>
    </li>
    <li>
      <Link to="/sports">Sports</Link>
    </li>
    <li>
      <Link to="/toys">Toys</Link>
    </li>
    <li>
      <Link to="/time">Time</Link>
    </li>
    <li>
      <Link to="/weather">Weather</Link>
    </li>
    <li>
      <Link to="/addlist">AddList</Link>
    </li>
    <li>
      <Link to="/displaylist">DisplayList</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
    
    <li>
      <Link to="/vendorform">VendorForm</Link>
    </li>

    <li>
      <Link to="/vendorregistration">VendorRegistration</Link>
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