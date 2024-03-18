import React, { useState } from 'react';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, NavLink } from "react-router-dom";
import { FaUser, FaLock } from 'react-icons/fa'
import axios from 'axios';

export const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', data);
      const token = response.data.token;
      localStorage.setItem('token', token);
      localStorage.setItem('id', response.data.user._id);
      if (response) {
        toast.success('Login success');
        navigate('/post');
      } else {
        toast.error('Login failed: Invalid credentials');
      }
    } catch (error) {
      toast.error('Login failed: Network error');
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className='login'>
          <input type="text" onChange={handleChange} value={data.email} name="email" placeholder='Email' />
          <FaUser className='icon' />
          <input type="password" onChange={handleChange} value={data.password} name="password" placeholder='Password' />
          <FaLock className='icon' />
          <input type="submit" className='button' name="login" value="Login" />
          <NavLink to="/signup">Not yet registered? Register Now</NavLink>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};
