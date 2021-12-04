import React from 'react'
import logo from './minimart1.png'
import { Link } from 'react-router-dom'
import {IoHomeOutline} from 'react-icons/io5'
import {RiContactsLine} from 'react-icons/ri'
import {MdOutlineContentCopy} from 'react-icons/md'
import {MdOutlineAddShoppingCart} from 'react-icons/md'

const Navbar = ({show}) => {
    return (
        <div className={ show ? "sideNav active" : "sideNav" }>
           <img src={logo} alt="Logo" className="logo" />
            <ul>
                <li><Link to="/about"><MdOutlineContentCopy/>About Us</Link></li>
                <li><Link to="/contact"><RiContactsLine/>Contact Us</Link></li>
                <li><Link to="/additemsform"><MdOutlineAddShoppingCart/>Add Items</Link></li>
            </ul>

        </div>
    )
}
export default Navbar
