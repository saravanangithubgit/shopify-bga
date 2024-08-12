import React from 'react'
import './Relatedproduct.css'
import data_product from '../assets/data'
import Item from '../Items/Item'
const Relatedproduct = () => {
  return (
    <div>
        <div  className='related-product-contaner'>
            <h1>Related product </h1>
            <hr/>
            </div>
                
        <div className='related-product'>
{data_product.map((item,i)=>{
    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
})}
        </div>
      
    </div>
  )
}

export default Relatedproduct
