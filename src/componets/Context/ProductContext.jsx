import React, { createContext, useState } from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

const Getdefaultcart =()=>{
  let Cart={};
  for (let index = 0; index < all_product.length; index++) {
    Cart[index]=0;    
  }
  return Cart;
}


const ShopContextProvider = (props) => {
  const [cartitem,setcartitem]=useState(Getdefaultcart());
 

 const addtocart=(itemId)=>{
  setcartitem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  
 }


 const removefromcart=(itemId)=>{
  setcartitem((prev)=>({...prev,[itemId]:prev[itemId]-1})) ;
 }

 const getTotalCartAmount =()=>{
  let total =0;
for(const item in cartitem)
  {
    if(cartitem[item]>0)
      {
let iteminfo = all_product.find((product)=>product.id===Number(item));
 total += iteminfo.new_price * cartitem[item];        
}
  }
  return total;
}

const getTotalCartItems =()=>{
  let totalItem=0;
  for(const item in cartitem){
    if(cartitem[item]>0){
      totalItem+=cartitem[item];
    }
  }
  return totalItem;
}

 const value = { getTotalCartItems,all_product,getTotalCartAmount,cartitem,addtocart,removefromcart }; 
  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
