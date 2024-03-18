import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import './App.css'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store';
import { counterslice } from './counterslice';
import { Nav } from './Nav';
import  { Login }  from './Login';
import { Home } from './Home';
import  { Post } from './Post';
import  { Blog }from './Blog';
import Register from './Register';
import { Details } from './Details';
import {Profile} from './Profile';
import { Userblog } from './Userblog';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='signup'element={<Register/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='post' element={<Post/>}/>
      <Route path='Blog' element={<Blog/>}/>
      <Route path='Details/:id' element={<Details/>}/>
      <Route path='profile'element={<Profile/>}/>
      <Route path='userblog/:id' element={<Userblog/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
