import React from 'react'
import data_product from "../assets/data"
import Item from '../Items/Item.jsx'
import "./Popular.css"
const Popular = () => {
  return (
    <div className='Popular-item'>
      
        <h1>Popular In Women</h1>
       <hr/>
        <div className='item'>
          {data_product.map((item,i)=>{
            return( <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />)
           
          })}
        </div>
    </div>
  )
}

export default Popular
