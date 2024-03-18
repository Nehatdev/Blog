import React, { useEffect, useState } from 'react';
import './App.css'

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

export const Profile = () => {

  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  });


  const [update, setUpdate] = useState({
    username: '',
    email: '',
    password: '',

  });

  const token = localStorage.getItem('token');
  console.log(token);
  const id = localStorage.getItem('id');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/findOne/${id}`, {
          headers: {
            Authorization: token
          }
        });
        setData(response.data);
        setUpdate(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, [id, token]);

  const handleChange = (event) => {
    setUpdate({ ...update, [event.target.name]: event.target.value });
  };



  const handleUpdate = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('username', update.username);
    formData.append('email', update.email);
    formData.append('password', update.password);



    try {
      let response = await axios.put(`http://localhost:5000/update/${id}`, formData, {
        headers: { Authorization: token, 'Content-Type': 'multipart/form-data' }
      });

      toast.success('profile updated successfully');

    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <>
      <section className='d-flex justify-content-center align-items-center' style={{ marginTop: '120px' }}>
        <div className='container'>
          <div className='profile'>
            <div className=''>
              <div className='editpro'>
                <form action="" onSubmit={handleUpdate}>

                  <h1 style={{ textAlign: 'center' }}>{update.username}</h1>

                  <Link to={`/userblog/${id}`}><button className='blogbtn'>Your Blogs</button></Link>


                  <div className="proform-group">
                    <label htmlFor="fullname">User Name</label>
                    <input type="text" id="username" name="username" onChange={handleChange} value={update.username} placeholder='Username' />
                  </div>
                  <div className="proform-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" onChange={handleChange} value={update.email} placeholder='email' />
                  </div>
                  <div className="proform-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={handleChange} placeholder="Change Password" />
                  </div>

                  <button className='probutton' type="submit">Update Profile</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};
