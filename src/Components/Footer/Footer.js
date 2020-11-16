import React from 'react';
import './Footer.css';
import Facebooklogo from '../../Images/facebooklogo.png';
import Instalogo from '../../Images/Instalogo.png';
import Whatsapp from '../../Images/Whatsapp.png';
import Contact from '../../Images/Contact.png';
import Email from '../../Images/Email.png';



const Footer = () => {

    return (
        <div className="footers">
            <div className="Follow-us">

           
            <a target="_blank" href="https://www.Facebook.com/">
            <img className="Facebook-logo" src={Facebooklogo} alt="Facebook"/>
            </a>
           
        
            <a target="_blank" href="https://www.instagram.com/">
            <img className="Instagram-logo" src={Instalogo} alt="Instagram"/>
            </a>
            
            
            <a target="_blank" href="https://www.gmail.com/">
            <img className="Email-logo" src={Email} alt="Email"/>
            </a>
          
            </div>
            <p className="copyright">CopyRight Ⓒ 2020 Ocoda-team .All Rights Reserved</p>
        </div>
       
    )
    }
        
    


export default Footer;
