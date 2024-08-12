import React, { useContext } from 'react'
import './Cart.css'
import removeicon from '../componets/assets/cart_cross_icon.png'

import { ShopContext } from '../componets/Context/ProductContext'
const Cart = () => {
const {all_product,cartitem,removefromcart,getTotalCartAmount}=useContext(ShopContext);
  return (
    <div className='cart_container'>
      <div className='cart_title'>
        <p>product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
<hr/>
{all_product.map((item)=>{
if(cartitem[item.id]>0)
  {
    return(
    <div className='cart_items'>
        <img className='Product_img' src={item.image} alt='img'/>
       <div className='item_name'><p>{item.name}</p></div> 
        <p>$ {item.new_price}</p>
        <p>{cartitem[item.id]}</p>
        <p>$ {item.new_price*cartitem[item.id]}</p>
        <img className='remove_icon' src={removeicon} onClick={()=>{removefromcart(item.id)}}/>
      </div>)
  }
return null
})} 

<div className="cart_total"> 

<h2>Cart Total</h2>
<hr></hr>
<div className="subtotal">
  <p>subtotal</p>
  <p>${getTotalCartAmount()}</p>
</div>
<hr />
<div className="shipping">
  <p>shipping</p>
  <p>Free</p>
</div>
<hr />
<div className="Total">
  <h3>Total</h3>
  <p>${getTotalCartAmount()}</p>
</div >

<div className='process-checkout'>
  <button>Process Check out</button>
</div>


</div>
    </div>
  )
}

export default Cart
