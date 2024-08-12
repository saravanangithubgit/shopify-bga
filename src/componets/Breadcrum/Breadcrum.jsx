import React from 'react'
import './Breadcrum.css'
import arrwo_icon from '../assets/breadcrum_arrow.png'


const Breadcrum = (props) => {
    const {product} = props;   
    
  return(
    <div className='breadcrum'>
      HOME<img src={arrwo_icon} alt='img'/> SHOP <img src={arrwo_icon}/> {product.category} <img src={arrwo_icon}/> {product.name}
    </div>
  )
}

export default Breadcrum;
