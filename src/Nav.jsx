import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'


export const Nav = () => {
    return (
        <>
            <div>
                <div className='nav'>
                   <div className='head'>
                        <h1>Blog</h1>
                    </div>
                    <div className='list'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}



