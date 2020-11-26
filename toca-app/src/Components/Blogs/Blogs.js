import React from 'react';
import './Blogs.css';
import Footer from '../Footer/Footer';
import First from '../../Images/offer1.jpg';
import Second from '../../Images/offer2.jpg';
import Third from '../../Images/offer3.jpg';
import {useState , useEffect} from 'react';
import Axios from 'axios';

const Blogs = () => {

    const [blogs , setBlogs] = useState([])
    

    useEffect(() => {
      Axios.get("http://localhost:3010/Blogs")
      .then((response) => {
          setBlogs(response.data)
      })
    }, [])
   
    return (
        <div>
            <h1 className="offer-page-title"><span>Toca</span> Blogs</h1>
            <h1 className="offers-title">Explore Us</h1>
            <div className="wrapper1">
                {blogs.map((blog)=>{
                    return <div className="blog-wrapper" key={Math.random()}>
                     <img className="blog_image" src={`http://localhost:3010/${blog.image}`} alt ="" />
                <p>{blog.description}</p>
                    </div>
                })}
              </div>
            <Footer/>
        </div>
    )
}

export default Blogs;