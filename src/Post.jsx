import axios from 'axios';
import './App.css'
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export const Post = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      let response = await axios.get('http://localhost:5000/blogs');
      console.log(response.data);
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      
    } finally {
      setLoading(false); 
    }
  };

  console.log("buu", blogs);
  return (
    <>
      <section style={{ marginTop: '150px' }} className='d-flex justify-content-center '>
        <div className='blogs'>
          {loading ? ( 
            <div>Loading...</div>
          ) : blogs && blogs.length > 0 ? (
            blogs.map(item => (
              <div key={item._id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Card style={{ width: '26rem', height: '26rem', marginBottom: '50px', cursor:'pointer' }} onClick={() => { navigate(`/Details/${item._id}`) }}>
                  <Card.Img variant="top" src={`http://localhost:5000/uploads/${item.image}`} alt="blog" width={'200px'} height={'200px'} />
                  <Card.Body className="blog-details">
                    <Card.Title className='card-title' >
                      <h2>{item.title}</h2>
                    </Card.Title>
                    <Card.Text className='card-content'>
                      <div>{item.content}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))
          ) : (
            <div style={{ fontSize: '28px', color: 'gainsboro', fontWeight: 'bold' }}>No Blogs Found</div>
          )}
        </div>
      </section>
    </>
  );
};
