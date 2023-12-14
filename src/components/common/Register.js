import React,{useState} from 'react'
import "./Register.css"
import {Link} from 'react-router-dom';
import Login from './Login';

function Register() {

    const [userData,setuserData] = useState({})

  function register(){
    console.log(userData);
  }
  return (
    <>

<div className='wrapper' style={{width:"25rem"}}>
       <h1>Register</h1>
        <input type="email" placeholder='Enter Your Email' className='form-control' onInput={(e)=>{setuserData({...userData,email:e.target.value})}}/>
        <input type="password" placeholder='Enter Password' className='form-control' onInput={(e)=>{setuserData({...userData,password:e.target.value})}}/>
        <input type="password" placeholder='Confirm Password' className='form-control' onInput={(e)=>{setuserData({...userData,cpassword:e.target.value})}}/>
        <input type="text" placeholder='First Name' className='form-control' onInput={(e)=>{setuserData({...userData,fname:e.target.value})}}/>
        <input type="text" placeholder='Last Name' className='form-control' onInput={(e)=>{setuserData({...userData,lname:e.target.value})}}/>

        <button onClick={()=>{register()}}>Register</button>
        <Link to="/"> 
        <span>Already a member? Login</span>
        </Link>
    </div>
    </>
  )
}

export default Register;