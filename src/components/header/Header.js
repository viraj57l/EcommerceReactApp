import React, { useContext } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import axios from 'axios';

const Header =()=>{
    const state =useContext(GlobalState)
    const [isLogged,setIsLogged]=state.userAPI.isLogged;
    const [isAdmin,setIsAdmin]=state.userAPI.isAdmin;
    const [cart,setCart] =state.userAPI.cart


    const logoutUser = async () =>{
        await axios.get('/user/logout')
        localStorage.clear();
        setIsAdmin(false);
        setIsLogged(false);
        setCart([]);
    }

    const adminRouter = () =>{
        return(
            <>
            <li><Link to='/create_product'>Create Product</Link></li>
            <li><Link to='/category'>Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
            <li><Link to='/history'>History</Link></li>
            <li><Link to='/logout' onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }
    
    
    
    return(
        <header>
        <div className='menu'>
           <MdOutlineMenu size={30} />
        </div>
        <div>
            <h1 className='logo'>
                <Link to='/'>{isAdmin?'Admin':'EsShopy'}</Link>
            </h1>
        </div>
        <ul>
            <li><Link to='/'>{isAdmin?'Products':'Shop'}</Link></li>
            {isAdmin && adminRouter()}
            {
                isLogged ? loggedRouter():<li><Link to='/login'>Login or Regsiter</Link></li>
            }
            
            <li>
                <MdClose size={30} className='menu'/>
            </li>
            
        </ul>
        {
            isAdmin?'': <div className='cart-icon'>
            <span>{cart.length}</span>
            <Link to='/cart'><MdAddShoppingCart size={30}/></Link>
            </div>
        }
       
        </header>
    );
}

export default Header;