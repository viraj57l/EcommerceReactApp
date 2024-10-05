import React, { useEffect, useState } from 'react'
import axios from'axios'

const UserAPI = (token) => {

    const [isLogged,setIsLogged]=useState(false);
    const [isAdmin,setIsAdmin]=useState(false);
    const [cart,setCart]=useState([])

    useEffect( () => {
        if(token){
            const getUser = async() =>{
                try{
                    const res =await axios.get('https://ecommerce-api-nine-woad.vercel.app/user/infor',{
                        headers:{Authorization:token}
                    })

                    setIsLogged(true);
                    res.data.role ===1 ? setIsAdmin(true):setIsAdmin(false)
                    console.log(res);
                    
                }catch(err){
                    alert(err.response.data.msg)
                }
                
            };
            getUser();
        }
    },[token])


   const addCart =async(product) =>{
    if(!isLogged) return alert('Please Login In')
   

   const check= cart.every(item =>{
    return item.id !==product._id
   })

   if(check){
    setCart([...cart,{...product,quantity:+1}])
   }else{
    alert("This product has been already added to cart")
   }
}




useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) setCart(storedCart);
}, []);

useEffect(() => {
    if (cart.length > 0) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}, [cart]);

  return {
    
      isLogged:[isLogged,setIsLogged],
      isAdmin:[isAdmin,setIsAdmin],
      cart:[cart,setCart],
      addCart: addCart,
      
    }
}

export default UserAPI
