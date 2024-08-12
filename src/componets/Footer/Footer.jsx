import React from 'react'
import Logo from '../assets/logo.png'
import './Footer.css'
const Footer = () => {
  return (
<div className='footer'> 
<div className='border'>
    <div className='FooterLogo'> 
      <img src={Logo} alt='icon'></img><h1>Shopify</h1>
    </div>
    <div className='unorder'>  
    <ul>
        <li>Company</li>
        <li><a href="tel:6385640277">Contect</a></li>
        <li>About</li>
    </ul>
    </div>
    <div className='copyright'>Copyright @ 2024 Created By "Saravanan" BE "CSE" </div>
    </div>

    </div>
   
  )
}

export default Footer
