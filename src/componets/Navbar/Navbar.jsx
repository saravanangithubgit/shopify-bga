import React, { useState ,useContext, useRef } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import {Link} from 'react-router-dom'
import { ShopContext } from '../Context/ProductContext'
import dropdownicon from '../assets/dropdownav.png'

const toogle =()=>{
  
}


const Navbar = () => {
  const {getTotalCartItems}=useContext(ShopContext);
const [menu,setMenu] =useState("shop");
const menuRef=useRef();

  return (
    <div className='navbar'> 

<div className='nav-logo'>
<img src={logo}></img>
  <p>SHOPIFY</p>
</div>
 
 <ul ref={menuRef} className='nav-menu'>
  <li onClick={()=>{setMenu("shop")}}><Link to='/' className='link'> Shop </Link>{menu==="shop"?<hr/>:<></>}</li>
  <li onClick={()=>{setMenu("Men")}}><Link to='/mens' className='link'>Men</Link>  {menu==="Men"?<hr/>:<></>}</li>
  <li onClick={()=>{setMenu("Women")}}><Link to='/Womens' className='link'>Women </Link>  {menu==="Women"?<hr/>:<></>}</li>
  <li onClick={()=>{setMenu("Kids")}}> <Link to="/Kids" className='link'> Kids </Link>{menu==="Kids"?<hr/>:<></>}</li>
 </ul>     
<div className='nav-login-cart'>
  <Link to='/Login'><button>Login</button></Link>
 <Link to='/Cart'> <img src={cart_icon}/></Link>
  <div className='cart_count'> {getTotalCartItems()} </div>
  
</div>
    </div>
  )
}

export default Navbar
