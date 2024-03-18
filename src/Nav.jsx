
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './App.css'


 export const Nav = () => {
  const navigate = useNavigate()
  const user = localStorage.getItem('id')

  const handleClick = () => {
    localStorage.clear()
    navigate('/login')
  }
  return (
    <>
      <div className='nav'>

        <div className='head'>
          <h1>ContentCorner</h1>
        </div>

        <div className='list'>
          <Link to='/'>Home</Link>
          <Link to='/post'> Blogs</Link>
          


          {user ? (
            <>
            <Link to='/profile'>Profile</Link>
            <Link to='/Blog'>Create Your Blogs</Link>
            <Link to='/'><button onClick={handleClick}>Logout</button></Link>


            </>
          ) : (
            <>
              <Link to='/Signup'>Signup</Link>
            </>
          )}




        </div>

      </div>

      <Outlet />
    </>
  );
};



