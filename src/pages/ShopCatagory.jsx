import React, { useContext } from 'react'
import './ShopCatagory.css'
import { ShopContext } from '../componets/Context/ProductContext'
import sorticon from '../componets/assets/dropdown_icon.png'
import Item from '../componets/Items/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

const length=all_product.length

  return (
    <>
      <div className='shop-category'>
        <img src={props.banner} alt='Category Banner' />
      </div>
      <div className='sort'>
        <p>
          <span>Showing 1-12</span> out of {length} products
        </p>
        <div className='shop-sort'>
       sort by <img src={sorticon} alt='Sort Icon' />
      </div>
      </div>
      <div className='product'>
       {all_product.map((item,i)=>{
        if(props.category===item.category)
          {
          
          return(<Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>) ;
        } 
        else{
         
          return (null);
        }
       })}
      </div>
    </>
  );
};
export default ShopCategory
