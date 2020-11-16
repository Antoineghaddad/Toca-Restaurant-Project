import React from 'react'
import './Home.css';
import Aboutus from '../../Images/Aboutus.jpg';
import Footer from '../Footer/Footer';
import First from '../../Images/offer1.jpg';
import Second from '../../Images/offer2.jpg';
import Toca1 from '../../Images/toca1.png';
import Toca2 from '../../Images/toca2.png';
import Toca3 from '../../Images/toca3.png';




const Home = () => {


    return (
        <div className="Home">
            
                <h1 className="Restaurant-name"><span>Toca</span> Restaurant</h1>
      <h1 className="Slogan">A taste you'll never forget</h1>
      <a href="#our-Menu" className="Our-menu">Our Menu</a>
      <h1 className="About-us-title">About <span>us</span></h1>
      <div className="wrapper">
      <div className="Flex-box1">
      <img className="About-us-img" src={Aboutus} alt="aboutus"/>
      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
         industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
         of type and scrambled it to make a type specimen book. It has survived not only five centuries,
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
         industry's standard dum printing and typesetting industry. Lorem Ipsum has been the
         industry's standard dummy text ever since the g and typesetting industry. Lorem Ipsum has been the
         industry's standard dummy text ever since the</p>
      </div>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of type and scrambled it to make a type specimen book. It has survived not only five centuries,
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
         industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
         of type and scrambled it to make a type specimen book. It has survived not only five centuries,
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
         industry's standard dummy text ever since the</p>
         <div className="Home-image-flex">
          <img className="toca-img" src={Toca1} alt="toca1"/>
          <img className="toca-img" src={Toca2} alt="toca2"/>
          <img className="toca-img" src={Toca3} alt="toca3"/>
         </div>
         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of type and scrambled it to make a type specimen book. It has survived not only five centuries,
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
         industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
         of type and scrambled it to make a type specimen book. It has survived not only five centuries,
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
         industry's standard dummy text ever since the</p>
       
      </div>
      <h1 id="our-Menu">❋Our menu❋</h1>
      <hr></hr>
      <div className="Menu">
      
    <div className="Menu-one">
  <ul>
  <h1 className="Category">❅Plates❅</h1>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
  
  </ul>
    </div>

    <div className="Menu-two">
        <h1 className="Category">❅Sandwishes❅</h1>
    <ul>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
    
  </ul>
    </div>

    <div className="Menu-three">
    <ul>
    <h1 className="Category">❅Deserts❅</h1>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
    
  </ul>
    </div>

    <div className="Menu-four">
    <ul>
    <h1 className="Category">❅Beverage❅</h1>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
      <li><p>Meal</p>Price</li>
    
  </ul>
    </div>
    <hr className="before-daily"></hr>
    <ul className="Daily-list">
    <h1 id="our-Daily-plates">❅Daily Plates❅</h1>
    <p className="Day">Monday:</p>
      <li className="daily"><p>Meal</p>Price</li>
      <p className="Day">Tuesday:</p>
      <li className="daily"><p>Meal</p>Price</li>
      <p className="Day">Wednesday:</p>
      <li className="daily"><p>Meal</p>Price</li>
      <p className="Day">Thurdsay:</p>
      <li className="daily"><p>Meal</p>Price</li>
      <p className="Day">Friday:</p>
      <li className="daily"><p>Meal</p>Price</li>
      <p className="Day">Saturday:</p>
      <li className="daily"><p>Meal</p>Price</li>
      <p className="Day">Sunday:</p>
      <li className="daily"><p>Meal</p>Price</li>
      </ul>
     
 

      </div>
      <h1 id="our-Menu">❅Catering❅</h1>
      <div className="Catering-wrapper">

      <div className="catering-one">
      <h1 className="Category6">❅Our Catering❅</h1>
      <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
         industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
         of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
         <img className="blog1" src={First} alt="blog1"/>
         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
         industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
         of type and scrambled it to make a type spec. Lorem Ipsum has been</p>
</div>

<div className="catering-two">
<h1 className="Category6">❅How we Cook❅</h1>
<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
         industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
         of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
         <img className="blog2" src={Second} alt="blog2"/>
         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
         industry's standad typesetting industry. Lorem Ipsum has been the</p>
</div>

<div className="catering-three">
<h1 className="Category6">❅Our Quality❅</h1>
<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
         industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
         of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
         <img className="blog2" src={Second} alt="blog2"/>
         <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
         industry's standard dummy .g industry. Lorem Ipsum has been the</p>
</div>


      </div>
      <h1 className="bon-apetit">Bon&nbsp;&nbsp;&nbsp;&nbsp;Appétit🍽️</h1>
      <Footer/>
        </div>
    )
}

export default Home;
