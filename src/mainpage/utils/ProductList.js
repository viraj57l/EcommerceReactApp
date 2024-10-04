import React,{useState } from "react"
import '../product/product.css'

import BtnRender from "./BtnRender";

const ProductList = ({product,isAdmin}) => {

  const [showMore, setShowMore] = useState(false) ;
  const toggleShowMore = () => setShowMore(!showMore)

    
  return (
    <div className='product_card'>
      {
        isAdmin && <input type='checkbox' checked={product.checked}/>
      }
      <img src={product.images.url} alt=''/>
      <div className='product_box'>
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p className={`product_description ${showMore ? 'expanded' : ''}`}>
            {product.description}
        </p>
        <button onClick={toggleShowMore}>
          {showMore ? 'Show less' : 'Show more'}
        </button>
      </div>
     <BtnRender product={product}/>
    </div>
  )
}

export default ProductList
