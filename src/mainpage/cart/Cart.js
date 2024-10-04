import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState'
import { Link } from 'react-router-dom'
import './cart.css';

const Cart = () => {
  const state =useContext(GlobalState)
  const [cart]= state.userAPI.cart

  if(cart.length === 0) {
    return <p style={{textAlign:"center",fontSize:'1.5rem'}}>Cart is Empty!</p>
  }
  return (
    <div className='cart-container'>
      <h1 className='cart-header'>Your Shopping</h1>
    {cart.map(product => (
      <div className='cart-item' key={product._id}>
        <img  src={product.images.url} alt={product.title} />
        <div className='box-detail'>
          <div className='row'>
            <h2>{product.title}</h2>
          </div>
          <span>${product.price}</span>
          <p>{product.description}</p> 
          <p>{product.content}</p>
          <p>Sold: {product.sold}</p>
          <Link to='/cart'>Buy Now</Link>
        </div>
      </div>
    ))}
  </div>
);
}

export default Cart
