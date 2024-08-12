import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='items'>
      <Link to={`/product/${props.id}`}><img onClick={window.scroll(0,0)} src={props.image} alt='img' / ></Link>
      <p>{props.name}</p>
      <div className='item-price'>
        <div className='item-new-price'>{props.new_price}</div>
        <div className='item-old-price'>{props.old_price}</div>
        <div className='item-Category'>{props.category}</div>
      </div>
    </div>
  )  
}

export default Item
