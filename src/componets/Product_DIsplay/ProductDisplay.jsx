import React, { useContext } from 'react'
import './ProductDisplay.css'
import starticon from '../assets/star_icon.png'
import dullstart from '../assets/star_dull_icon.png'
import Relatedproduct from '../Related-Product/Relatedproduct'
import { ShopContext } from '../Context/ProductContext'
const ProductDisplay = (props) => {
    const{addtocart} =useContext(ShopContext)
  const {product}=props;
   
  return (
    <>
       <div className='ProductDisplay'>

      <div className='ProductDisplay-left'>
      <div className='sampeimg'>
    <img src={product.image}/>
<img src={product.image}/>
<img src={product.image}/>
<img src={product.image}/></div>

<div className='product-image'> 
<img src={product.image} alt='none'></img>
</div>
      </div >
      <div className='Product-Display_right'>
        <h1>{product.name}</h1>
      <div className='star-rating'>
      <img src={starticon}/>
        <img src={starticon}/>
        <img src={starticon}/>
        <img src={starticon}/>
        <img src={starticon}/>
        <img src={dullstart}/>
        (122)
      </div>
      <div className='item-old-price'>{product.old_price}</div>
      <div className='item-new-price'>{product.new_price}</div>
      <div className='productdiscription'> 
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam iure maxime omnis pariatur esse nulla eum delectus a, facilis mollitia commodi, molestias eligendi saepe excepturi soluta unde voluptatibus? Eaque, modi.
      </div>
    <div className='selectsize'>
      <h3>Select Size</h3>
      <div className='size'>
         <div>S</div>
      <div>M</div>
      <div>l</div>
      <div>XL</div>
      <div>XXL</div>
         </div>
    </div>
    <div className='cart'><button onClick={()=>{addtocart(product.id)}}>Add To Cart</button> </div>    
      </div>
    </div> 
    <div className='discription-review'>
        <div>Discription</div><div>Review(122)</div>

      </div>
      <div className='discription-box'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quisquam ratione officiis voluptatem impedit eum praesentium suscipit totam, consequuntur soluta ut, architecto delectus vel cumque minima assumenda consectetur illo cupiditate labore. Repudiandae alias, possimus tempora sunt culpa corporis magni temporibus porro, vero aliquid numquam iusto officiis reprehenderit veritatis molestias natus laboriosam? Ea consectetur possimus provident vitae autem omnis. Nesciunt totam blanditiis sed necessitatibus modi corporis ullam, quas eos rerum est illum quos dicta facere doloribus esse expedita inventore quo amet odit. Ullam deleniti, amet iusto aliquid dolorum sed cum id ratione? Tenetur non alias, nemo assumenda molestias at accusamus quia accusantium inventore explicabo molestiae quidem mollitia animi aperiam nisi error esse vel minus illum doloremque ipsam necessitatibus natus? Ratione libero, itaque, amet officia nihil facilis sed dolor reiciendis enim sequi hic necessitatibus ut similique unde sapiente omnis quidem sint ea explicabo, tempore esse voluptates quaerat! Cumque, voluptas natus molestias dolores, pariatur maiores quidem necessitatibus consequatur sapiente corporis dolorem aliquam eius id quia expedita amet perferendis commodi non ea. Enim soluta minima sequi consectetur nisi earum quod ad unde consequuntur. A dolor possimus error suscipit sit incidunt mollitia quidem quasi, et dolorum perspiciatis esse repellat. Laboriosam suscipit repellendus possimus consequuntur officia!</div>
    <Relatedproduct/>
    </>


  )
}

export default ProductDisplay
