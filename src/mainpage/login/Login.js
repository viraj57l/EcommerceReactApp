import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './login.css'
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [user,setUser] = useState({
    email:'',
    password:''
  })

  const navigate = useNavigate();
  const onChangeInput = e =>{
    const {name,value}=e.target;
    setUser({...user,[name]:value})
  } 

  const loginSubmit = async e =>{
    e.preventDefault()
    try{
      await axios.post('https://ecommerce-api-nine-woad.vercel.app/user/login',{...user})
      localStorage.setItem('firstLogin',JSON.stringify(true))

      navigate('/');
    }catch(err){
      const message = err.response?.data?.msg || "An error occurred";
      alert(message);
    }
  }

  return (
    <div className='login-page'>
      <form onSubmit={loginSubmit}>
        <input
         type='email' 
         name='email' 
         required 
         placeholder='Email' 
         value={user.email}  
         onChange={onChangeInput}
         />
        <input 
        type='password' 
        name='password' 
        required 
        placeholder='Password' 
        value={user.password}
        onChange={onChangeInput}
        />

        <div className='row'>
          <button type='submit'>Login</button>
          <Link to='/register'>Not registered.Register here!</Link>
        </div>

      </form>
    </div>
  )
}

export default Login
