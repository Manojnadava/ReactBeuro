import { useSelector,useDispatch } from "react-redux"
import Menu from "./Menu";
import { clearAllListeners } from "@reduxjs/toolkit";
import { clearItem } from "../util/cartSlice";




export const Cart= ()=>{
  const cartItem=useSelector((store)=>{
   return store.cart.items;
  })
 console.log(cartItem)
 const dispatch=useDispatch();
 //const cartItems=cartItem[0];
 const clearCart=()=>{
  dispatch(clearItem());
 }

return cartItem.length==0 ? (<div> <h2> Add Items to the store </h2></div>)  : 
( <div className="w-full">
  <div className="flex justify-center items-center w-6/12 h-auto">
  <div className="text-center  w-6/12 font-bold "> Cart </div>
  <button className="shadow-2xl rounded-2xl bg-slate-800 text-blue-600" onClick={clearCart}>Clear Cart</button>
  </div>
 
 <div>
  {cartItem.map(item=>{
     return <Menu items={item} key={item.card.info.id} content={'remove'} />
  })}
 </div>
 </div>
)
}

export default Cart;