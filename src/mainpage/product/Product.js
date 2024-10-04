import React, { useContext } from 'react'
import { GlobalState } from '../../GlobalState'
import ProductList from '../utils/ProductList'
import '../product/product.css'

const Product = () => {
  const state =useContext(GlobalState)
  const [products] =state.productAPI.products
  const [isAdmin]=state.userAPI.isAdmin

  if (!products) {
    return <div>Loading...</div>; 
}
  
  return (
    <div className='products'>
    {
      products.map(product =>{
        return <ProductList key={product._id} product={product} isAdmin ={isAdmin}/>
      })
    }
    </div>
  )
}

export default Product
