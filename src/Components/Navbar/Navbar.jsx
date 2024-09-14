import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/OIG1.jpeg'
import cart_icon from '../Assets/shopping-cart.png'
import person_icon from '../Assets/account.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <h4>ThinkFORMAL!</h4>
      </div>
      <ul className="nav-menu">
        <li onClick={()=> {setMenu("home")}}><Link to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("catalogue")}}><Link to='/catalogue'>Catalogue</Link>{menu==="catalogue"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("about")}}><Link to='/about'>About Us</Link>{menu==="about"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("contact")}}><Link to='/contact'>Contact Us</Link>{menu==="contact"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <img src={person_icon} alt="" />
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="navbar-cart-counter">0</div>
      </div>
    </div>
  )
}

export default Navbar
