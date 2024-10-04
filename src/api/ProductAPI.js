import  { useEffect, useState } from 'react'
import axios from 'axios'

const ProductAPI = () => {

    const [products,setProducts]=useState([]);

    const getProducts= async() => {
        const res = await axios.get('https://ecommerce-api-nine-woad.vercel.app/api/products')  
        setProducts(res.data.products);
        
    }

    useEffect(()=>{
        getProducts()
    },[])
  return {
    products:[products,setProducts]
  }
}

export default ProductAPI
