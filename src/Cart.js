import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemsList from './ItemsList';
import { clearCart } from './utils/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
   const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className='text-center m-4 p-4 mt-40 mb-20'>
        <h1 className='font-bold text-center'>Cart</h1>
        <div className='w-6/12 m-auto'>
        <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={handleClearCart}>Clear cart</button>
        {cartItems.length === 0 && (<h1>Cart is empty, add something...</h1>)}
            <ItemsList items = {cartItems}/> 

        </div>
    </div>
  )
}

export default Cart;