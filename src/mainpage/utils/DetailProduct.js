import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GlobalState } from '../../GlobalState';

const DetailProduct = () => {
    const params =useParams();
    const state= useContext(GlobalState)
    const [products] =state.productAPI.products;
    const [detailProduct,setDetailProduct]=useState(null);

    useEffect(()=>{
        if(params.id && products.length>0){
            const product=products.find(p =>p._id === params.id);
            if(product){
              setDetailProduct(product);
            }
        }
    },[params,products])

    if (!detailProduct || !detailProduct.images || !detailProduct.images.url) {
      return <div>Loading...</div>; 
  }

  return (
    <div className='detail'>
      <img src={detailProduct.images.url} alt={detailProduct.title}/>
      <div className='box-detail'>
        <div className='row'>
            <h2>{detailProduct.title}</h2>           
        </div>
        <span> ${detailProduct.price}</span>
        <p>{detailProduct.description}</p>
        <p>{detailProduct.content}</p>
        <p>Sold:{detailProduct.sold}</p>
         <Link to='/cart'>Buy Now</Link>

      </div>
    </div>
  )
}

export default DetailProduct
