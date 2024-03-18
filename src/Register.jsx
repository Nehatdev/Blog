import React, { useState } from 'react';
import './App.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'
import { adddata} from './counterslice'
import {useNavigate} from 'react-router-dom'

  const Register = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
  const [data, setData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handlesubmit= async (event)=>{
    event.preventDefault()
        dispatch(adddata(data))
        let response= await axios.post('http://localhost:5000/insert',data)
        toast.success('')
        setData('')
        navigate('/login');
    }
    console.log(data);

  return (
    <div className="register">
      <form className="register-form" onSubmit={handlesubmit}>
        <h1 className="register-title">Register</h1>
        <div className='form-grp'>
          <div className='input-group'>
            <input
              type='text'
              name='username'
              placeholder='Username'
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div className='input-group'>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className='input-group'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={data.password}
              onChange={handleChange}
            />
          </div>
         
          <button type="submit" className="sbtn">SignUp</button>
        </div>
        <NavLink to="/login">Already registered? Login</NavLink>
      </form>
      <ToastContainer />
    </div>
  );
};
export default Register;