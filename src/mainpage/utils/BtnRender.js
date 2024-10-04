import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../GlobalState';

const BtnRender = ({product}) => {
    
  const state =useContext(GlobalState);
  const [isAdmin] = state.userAPI.isAdmin;
  
  const addCart =state.userAPI.addCart
  return (
    <div className='row_btn'>
        {
          isAdmin ? 
          <>
        <Link className='btn_buy' to={'#!'}>
        Delete
        </Link>
        <Link className='btn_view' to={`detail/${product._id}`}>
        Edit
        </Link>
        </>
          :
        <>
        <Link className='btn_buy' to={'#!'} onClick={()=>addCart(product)}>
        Buy Now
        </Link>
        <Link className='btn_view' to={`detail/${product._id}`}>
        View
        </Link>
        </>
     
        }
      </div>
  )
}

export default BtnRender
