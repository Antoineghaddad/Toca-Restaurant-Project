import React from 'react'
import './Home.css';
import Aboutus from '../../Images/Aboutus.jpg';
import Footer from '../Footer/Footer';
import First from '../../Images/offer1.jpg';
import Second from '../../Images/offer2.jpg';
import Toca1 from '../../Images/toca1.png';
import Toca2 from '../../Images/toca2.png';
import Toca3 from '../../Images/toca3.png';
import {useState , useEffect} from 'react';
import Axios from 'axios';




const Home = () => {
  const [aboutUs , setAboutus] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3010/About-us")
    .then((response) => {
        setAboutus(response.data)
    })
  }, [])

  const [menuItems , setMenuItems] = useState([])
    

  useEffect(() => {
    Axios.get("http://localhost:3010/Menu")
    .then((response) => {
        setMenuItems(response.data)
    })
  }, [])

  const [dailyPlates , setDailyPlates] = useState([])

  useEffect(() => {
      Axios.get("http://localhost:3010/Daily-plates")
      .then((response) => {
          setDailyPlates(response.data)
      })
    }, [])

    const [catering , setCatering] = useState([])
    

    useEffect(() => {
      Axios.get("http://localhost:3010/Catering")
      .then((response) => {
          setCatering(response.data)
      })
    }, [])

    const [sandwish , setSandwish] = useState([])
    

    useEffect(() => {
      Axios.get("http://localhost:3010/sandwish")
      .then((response) => {
          setSandwish(response.data)
      })
    }, [])

    const [deserts , setDeserts] = useState([])
    

    useEffect(() => {
      Axios.get("http://localhost:3010/deserts")
      .then((response) => {
          setDeserts(response.data)
      })
    }, [])

    const [drinks , setDrinks] = useState([])
    

    useEffect(() => {
      Axios.get("http://localhost:3010/drinks")
      .then((response) => {
          setDrinks(response.data)
      })
    }, [])
    


    return (
        <div className="Home">
            
                <h1 className="Restaurant-name"><span>Toca</span> Restaurant</h1>
      <h1 className="Slogan">A taste you'll never forget</h1>
      <a href="#our-Menu" className="Our-menu">Our Menu</a>
      <h1 className="About-us-title">About <span>us</span></h1>
      <div className="wrapper">
     
      {aboutUs.map((val)=>{
                return <div className="Flex-box1" key={Math.random()}>
                  <img className="About-us-img" src={`http://localhost:3010/${val.image1}`} alt ="" />
                  <div className="p"> 
              <p className="aboutuss"> {val.About_us} </p>
              </div>
                    </div>
            })}
           
   
     
       
         
       
      </div>
      <h1 id="our-Menu">❋Our menu❋</h1>
      <hr></hr>
      <div className="Menu">
      
    <div className="Menu-one">
    <h1 className="Category">❅Plates❅</h1>
    {menuItems.map((val)=>{
    return <div className="Menu-div" key={Math.random()}>
    <ul>
    <li><p>{val.Menu_name}</p>{val.Menu_price}</li>

    
  </ul>
        </div>
  })}
    </div>

    <div className="Menu-two">
        <h1 className="Category">❅Sandwishes❅</h1>
        {sandwish.map((val)=>{
    return <div className="Menu-div" key={Math.random()}>
    <ul>
    <li><p>{val.sandwish_name}</p>{val.sandwish_price}</li>

    
  </ul>
        </div>
  })}
    </div>

    <div className="Menu-three">
    <h1 className="Category">❅Deserts❅</h1>
    {deserts.map((val)=>{
      
    return <div className="Menu-div" key={Math.random()}>
    <ul>
    <li><p>{val.desert_name}</p>{val.desert_price}</li>

    
  </ul>
        </div>
  })}
    </div>

    <div className="Menu-four">
    <h1 className="Category">❅Beverage❅</h1>
    {drinks.map((val)=>{
    return <div className="Menu-div" key={Math.random()}>
    <ul>
    <li><p>{val.drinks_name}</p>{val.drinks_price}</li>

    
  </ul>
        </div>
  })}
    </div>
    <hr className="before-daily"></hr>
   
    <ul className="Daily-list">
    <h1 id="our-Daily-plates">❅Daily Plates❅</h1>
    {dailyPlates.map((value) => {
          return <div className="daily-div" key={Math.random()}>
            <li className="Daily"><p className="daily-day">{value.Daily_day}</p><p className="Meal_name">{value.Meal_name}</p><p>{value.Meal_price}</p></li>
                 </div>
              })}
      </ul>
     
 

      </div>
      <h1 id="our-Menu">❅Catering❅</h1>
      <div className="Catering-wrapper">

      <div className="catering-one">
      <h1 className="Category6">❅Our Catering❅</h1>
      <div>   {catering.map((val)=>{
                return <div className="Catering-div" key={Math.random()}>
                    <div className="catering1"><p>{val.Our_catering}</p></div>
                    <img className="catering-img" src={`http://localhost:3010/${val.image1}`} alt ="" />
                    <hr></hr>
                    </div>
                    
              })}</div>
         
       
           </div>


      </div>
      <div className="footer-res"><h1 className="bon-apetit">Bon&nbsp;&nbsp;&nbsp;&nbsp;Appétit🍽️</h1>
      <p className="reservations">For reservations:</p>
      <p><span className="footer-title">Email : </span>Restaurant@toca.com</p>
      <p><span className="footer-title">Mobile :</span>961 3 311 494</p>
      <p><span className="footer-title">Tel : </span>01 320 933</p>
      <p className="see-you">See you!</p>
      </div>
      <Footer/>
        </div>
    )
}

export default Home;
