import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

 export const Details = () => {

    const { id } = useParams()
    const [blogs, setBlogs] = useState({});

    useEffect(() => {
        let fetchdata = async () => {
            try {
                let response = await axios.get(`http://localhost:5000/blogOne/${id}`);
                console.log(response.data);
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        }
        fetchdata();
    }, [id]);

    console.log('ghf', blogs);

    return (
        <>

            <section>
                <div className='details container '>
                    <h1>{blogs.title}</h1>
                    <img src={`http://localhost:5000/uploads/${blogs.image}`} alt="" />
                    <p style={{ marginTop: '30px' }}>{blogs.content}</p>
                </div>
            </section>


        </>
    )
}

