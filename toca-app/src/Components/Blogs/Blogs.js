import React from 'react';
import './Blogs.css';
import Footer from '../Footer/Footer';
import First from '../../Images/offer1.jpg';
import Second from '../../Images/offer2.jpg';
import Third from '../../Images/offer3.jpg';

const Blogs = () => {
   
    return (
        <div>
            <h1 className="offer-page-title"><span>Toca</span> Blogs</h1>
            <h1 className="offers-title">Explore Us</h1>
            <div className="wrapper1">
                
                  <div className="Box1">
              <img className="blog1" src={First} alt="blog1"/>
              <p>laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur 

adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 

minim veniam, qconsequat.</p>
              
              </div>
              <div className="Box2">
              <img className="blog2" src={Second} alt="blog2"/>
              <p>laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur 

adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 

minim veniam, qconsequat.</p>
              
              </div>
              <div className="Box3">
              <img className="blog3" src={Third} alt="blog3"/>
              <p>laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur 

adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 

minim veniam, qconsequat.</p>
             
              </div>
              </div>
            <Footer/>
        </div>
    )
}

export default Blogs;