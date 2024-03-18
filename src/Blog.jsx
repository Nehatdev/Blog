import React from 'react';
import './App.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';

export const Blog = () => {
  const [data, setData] = useState({
    title: '',
    content: ''
    
  });
  const [image, setImage] = useState('');

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form Submitted');
    try {
      const userId = localStorage.getItem('id');
      console.log(userId);
      const postData = {
        ...data,
        user: userId
      };

      const formData = new FormData();

      formData.append('title', postData.title);
      formData.append('content', postData.content);
      formData.append('image', image);
      formData.append('user', userId);

      let response = await axios.post('http://localhost:5000/addblog', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log("Response:", response.data);
      if (response.data) {
        toast.success('Blog Posted Successfully');
        setData({
          title: '',
          content: ''
        });
        setImage('');
      }
    } catch (error) {
      console.error('Error adding blog post:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="Blog-Title">Create your Blogs</h2>
      <div className='input-group'>
        <label >Title:</label>
        <input
          type='text'
          name='title'  
          placeholder='title'
          value={data.title}
          onChange={handleChange}
        />
      </div>
      <label>Content:</label>
      <div className='input-group'>
        <textarea
          type='text'
          name='content'  
          placeholder='content'
          value={data.content}
          onChange={handleChange}
        />
      </div>
      <div>
        <input type='file'
          name='image'
          onChange={handleImageChange}
          id=''
          style={{ padding: '0px' }} />
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

