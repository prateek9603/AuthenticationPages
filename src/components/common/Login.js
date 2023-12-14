import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import './Login.css';
import Register from './Register';
import Header from './Header';

function Login() {
  
  const [userData,setuserData] = useState({})

  function login(){
    console.log(userData);
  }

  return (
    <>

    {/* <Header /> */}
    

    <div className='container' style={{width:"25rem"}}>
       <h1>Login</h1>
        <input type="email" placeholder='Enter Your Email' className='form-control' onInput={(e)=>{setuserData({...userData,email:e.target.value})}}/>
        <input type="password" placeholder='Enter Password' className='form-control' onInput={(e)=>{setuserData({...userData,password:e.target.value})}}/>

        <button onClick={()=>{login()}}>Login</button>
        <Link to="/Register"> 
          <span>Not a user yet? Register Here.</span>
        </Link>
    </div>
    
    </>
  )
}

export default Login;