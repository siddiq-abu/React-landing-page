import React from 'react'
import Library from "../assets/kally.png"
import {MdShoppingCart} from "react-icons/md";
// import Cart from "../assets/cart-image.png"

function Nav() {
  return (
<div className="container">
 
    <nav className='row'>
      <figure className='logo'>
        <img src={Library} alt="" />
      </figure>
      <div className='nav-links'>
        <ul>
          <li>Home</li>
          
          
          <button className='book'>Collection</button>
          <li>About-Us</li>
          
          {/* <img src={Cart} alt="" className='cart' /> */}
          <MdShoppingCart className="cart"/>
        </ul>
      </div>
    </nav>
  </div>

  )
}

export default Nav
