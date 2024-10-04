import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './login.css'
import { useNavigate } from 'react-router-dom';


const navigate = useNavigate();

const Register = () => {


  const [user,setUser] = useState({
    name:'',
    email:'',
    password:''
  })

  const onChangeInput = e =>{
    const {name,value}=e.target;
    setUser({...user,[name]:value})
  } 

  const registerSubmit = async e =>{
    e.preventDefault()
    try{
      await axios.post('https://ecommerce-api-nine-woad.vercel.app/user/register',{...user})
      localStorage.setItem('firstRegister',JSON.stringify(true))
      
      navigate('/');
    }catch(err){
      const message = err.response?.data?.msg || "An error occurred";
       alert(message);
    }
  }

  return (
    <div className='register-page'>
      <form onSubmit={registerSubmit}>
      <input
         type='name' 
         name='name' 
         required 
         placeholder='Name' 
         value={user.name}  
         onChange={onChangeInput}
         />
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
          <button type='submit'>Register</button>
          <Link to='/login'>Already registered.Login here!</Link>
        </div>

      </form>
    </div>
  )
}



export default Register
