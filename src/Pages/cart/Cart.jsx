import React, { useContext } from 'react'
import { PRODUCTS } from '../../Products'
import {ShopContext} from "../../Context/Shop-context"
import {CartItem} from './Cart-item'
import "./Cart.css";


export const Cart = () => {
  const { cartItems, getTotalCartAmount} = useContext(ShopContext);
  const toatalAmount = getTotalCartAmount()
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
      {PRODUCTS.map((product) => {
        if (cartItems[product.id] !== 0){
          return <CartItem data={product} />
        }

      })}
      </div>
      <div className='checkout'>
        <p>Subtotal: ${toatalAmount}</p>
        <button>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  )
}
