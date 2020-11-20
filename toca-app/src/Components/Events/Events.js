import React from 'react';
import './Events.css';
import Footer from '../Footer/Footer';
import {useState} from 'react';
import Axios from 'axios';

const Events = () => {
    const [ fullname , setFullname] = useState('');
    const [ email , setEmail] = useState('');
    const [ phoneNumber , setPhonenumber] = useState(0);
    const [ address , setAddress] = useState('');
    const [ category , setCategory] = useState('');
    const [ details , setDetails] = useState('');

    const submitEvent = async(e) => {
        e.preventDefault();
       try{await Axios.post('http://localhost:3010/events',{
            customer_name: fullname,
            customer_email:email,
            customer_address:address,
            category:category,
            details:details,
            phone:phoneNumber
    }).then((response) => {
        if(response.status ===200){
            console.log(response)
        }
    })}catch(err){console.log(err)}
    
  
    }

 


    return (
        <div className="Events-page">
            <h1 className="offer-page-title"><span>Toca</span> Events</h1>
            <h1 className="offers-title">Life is an event. Make it memorable!</h1>
            <fieldset><legend align="center">About Our Events</legend>   
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
minim veniam, qconsequat.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
minim veniam, qconsequat.
abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur 
adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
minim veniam, qconsequat.
            </fieldset>
    <fieldset><legend align="center">Interested ? Fill this form</legend>
             <form id="events-form" >
                <label htmlFor="full-name">Full-name</label>
                <input id="full-name" type="text" required placeholder="Enter your full name" 
                onChange = {(e) => {
                    setFullname(e.target.value);
                }}
                />
                <label htmlFor="email">Email-Address</label>
                <input id="email" type="email" required placeholder="Enter your Email address"
                 onChange = {(e) => {
                    setEmail(e.target.value);
                }}/>
                <label htmlFor="phone">Phone number</label>
                <input id="phone" type="tel" required placeholder="Enter your Phone number"
                 onChange = {(e) => {
                    setPhonenumber(e.target.value);
                }}/>
                <label htmlFor="Address">Address</label>
                <input id="Address" type="text" required placeholder="Enter your Address"
                 onChange = {(e) => {
                    setAddress(e.target.value);
                }}/>
                <label htmlFor="Category">Category</label>
                <input id="Category" type="text" required placeholder="What kind of event"
                 onChange = {(e) => {
                    setCategory(e.target.value);
                }}/>
                <label htmlFor="Details">Details</label>
                <textarea id="Details" required placeholder="Gives us more details about ur event"
                 onChange = {(e) => {
                    setDetails(e.target.value);
                }}/>
                <input type="submit" value="Submit Event" className="submit-event" onClick={submitEvent}/>
            </form>

    </fieldset>
    <Footer/>
        </div>
    )
}
export default Events;