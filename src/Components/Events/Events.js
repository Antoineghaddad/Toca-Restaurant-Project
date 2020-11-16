import React from 'react';
import './Events.css';
import Footer from '../Footer/Footer';

const Events = () => {
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
             <form>
                <label for="full-name">Full-name</label>
                <input id="full-name" type="text" required placeholder="Enter your full name"/>
                <label for="email">Email-Address</label>
                <input id="email" type="email" required placeholder="Enter your Email address"/>
                <label for="phone">Phone number</label>
                <input id="phone" type="tel" required placeholder="Enter your Phone number"/>
                <label for="Address">Address</label>
                <input id="Address" type="text" required placeholder="Enter your Address"/>
                <label for="Category">Category</label>
                <input id="Category" type="text" required placeholder="What kind of event"/>
                <label for="Category">Details</label>
                <textarea id="Category" required placeholder="Gives us more details about ur event"/>
                <input type="submit" value="Submit Event" className="submit-event"/>
            </form>

    </fieldset>
    <Footer/>
        </div>
    )
}
export default Events;