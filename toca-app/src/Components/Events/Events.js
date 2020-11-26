import React from 'react';
import './Events.css';
import Footer from '../Footer/Footer';
import {useState,useEffect} from 'react';
import Axios from 'axios';

const Events = () => {
    const [ fullname , setFullname] = useState('');
    const [ email , setEmail] = useState('');
    const [ phoneNumber , setPhonenumber] = useState('');
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
            clickHandler(e);
            alert("your Event has been submitted")
           
        }
    })}catch(err){console.log(err)}
    
  
    }
    const clickHandler = (e) =>{
        e.preventDefault();
        setFullname('');
        setEmail('');
        setPhonenumber('');
        setAddress(''); 
        setCategory(''); 
        setDetails('');
      }

      const [events , setEvents] = useState([])
    

      useEffect(() => {
        Axios.get("http://localhost:3010/Event")
        .then((response) => {
            setEvents(response.data)
        })
      }, [])
      

  
 


    return (
        <div className="Events-page">
            <h1 className="offer-page-title"><span>Toca</span> Events</h1>
            <h1 className="offers-title">Life is an event. Make it memorable!</h1>
            <fieldset><legend align="center">About Our Events</legend>   
            {events.map((value) => {
                     return <div className="events-div" key={Math.random()}>
                     <p> {value.events_intro}</p>
                 
                     </div>
              })}
            </fieldset>
    <fieldset><legend align="center">Interested ? Fill this form</legend>
             <form id="events-form" >
                <label htmlFor="full-name">Full-name</label>
                <input id="full-name" type="text" value={fullname} placeholder="Enter your full name" 
                onChange = {(e) => {
                    setFullname(e.target.value);
                }}
                />
                <label htmlFor="email">Email-Address</label>
                <input id="email" type="email" value={email} placeholder="Enter your Email address"
                 onChange = {(e) => {
                    setEmail(e.target.value);
                }}/>
                <label htmlFor="phone">Phone number</label>
                <input id="phone" type="tel" value={phoneNumber} placeholder="Enter your Phone number"
                 onChange = {(e) => {
                    setPhonenumber(e.target.value);
                }}/>
                <label htmlFor="Address">Address</label>
                <input id="Address" type="text" value={address} placeholder="Enter your Address"
                 onChange = {(e) => {
                    setAddress(e.target.value);
                }}/>
                <label htmlFor="Category">Category</label>
                <input id="Category" type="text"  value={category} placeholder="What kind of event"
                 onChange = {(e) => {
                    setCategory(e.target.value);
                }}/>
                <label htmlFor="Details">Details</label>
                <textarea id="Details"   value={details} placeholder="Gives us more details about ur event"
                 onChange = {(e) => {
                    setDetails(e.target.value);
                }}/>
                <input type="submit" disabled={fullname.length < 8 || !email.includes('@') || phoneNumber === 0 || address.length === 0} value="Submit Event" className="submit-event" onClick={submitEvent} />
            </form>

    </fieldset>
    <Footer/>
        </div>
    )
}
export default Events;