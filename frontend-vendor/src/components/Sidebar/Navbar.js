import React from 'react'
import logo from './minimart1.png'
import { Link } from 'react-router-dom'
import {IoHomeOutline} from 'react-icons/io5'
import {FcBusinessContact} from 'react-icons/fc'
import {FcAbout} from 'react-icons/fc'
import {FcShop} from 'react-icons/fc'
import {FcRegisteredTrademark} from 'react-icons/fc'
import {FcSettings} from 'react-icons/fc'
import {FcPlus} from 'react-icons/fc'
import {FcHome} from 'react-icons/fc'
import {FcDataSheet} from 'react-icons/fc'

const Navbar = ({show}) => {
    return (
        <div className={ show ? "sideNav active" : "sideNav" }>
           <img src={logo} alt="Logo" className="logo1" />
            <ul>
            <li><Link to="/home"><FcHome/>Home</Link></li>
            <li><Link to="/additemsform"><FcShop/>Add prodcuts</Link></li>
                <li><Link to="/vendorregistration"><FcRegisteredTrademark/>Vendor Registation</Link></li>
                <li><Link to="/addoffers"><FcPlus/>Add Offers</Link></li>
                <li><Link to="/productlist"><FcDataSheet/>Product List</Link></li>
                <li><Link to="/profile"><FcSettings/>Vendor Profile</Link></li>
                <li><Link to="/about"><FcAbout/>About Us</Link></li>
                <li><Link to="/contact"><FcBusinessContact/>Contact Us</Link></li>

            </ul>

        </div>
    )
}
export default Navbar
