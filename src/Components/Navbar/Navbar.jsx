import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/OIG1.jpeg'
import cart_icon from '../Assets/shopping-cart.png'
import person_icon from '../Assets/account.png'


const Navbar = () => {

    const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <h4>ThinkFORMAL!</h4>
      </div>
      <ul className="nav-menu">
        <li onClick={()=> {setMenu("home")}}>Home{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("catalogue")}}>Catalogue{menu==="catalogue"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("about")}}>About Us{menu==="about"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("contact")}}>Contact Us{menu==="contact"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={person_icon} alt="" />
        <img src={cart_icon} alt="" />
        <div className="navbar-cart-counter">0</div>
      </div>
    </div>
  )
}

export default Navbar
