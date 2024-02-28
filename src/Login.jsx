import React from 'react'
import './App.css'
import {FaUser,FaLock} from 'react-icons/fa'
export const Login = () => {
  return (
    <div className='wrapper'>
      <form action=''>
        <h1>Login</h1>
        <div className='input-box'>
          <input type='text'placeholder='Username' required/>
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type='password'placeholder='password'required/>
          <FaLock className='icon'/>
        </div>
        <div className='forgot'>
          <label><input type='checkbox'/>Remember me</label>
          <a href='#'>Forgot Password</a>
        </div>
        <button type='submit'>Login</button>
        <div className='register'>
          <p>Don't have an account<a href='#'>Register</a></p>
        </div>

      </form>
        
        
    </div>
  )
}
