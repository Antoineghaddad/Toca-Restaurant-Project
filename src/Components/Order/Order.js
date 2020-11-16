import React from 'react';
import './Order.css';
import First from '../../Images/offer1.jpg';
import Second from '../../Images/offer2.jpg';
import Third from '../../Images/offer3.jpg';
import Footer from '../Footer/Footer';

const Order = () => {
    return (
        <div className="Order-page">
            <h1 className="offer-page-title"><span>Toca</span> Offers</h1>
            <h1 className="offers-title">Everyone deserves a discount! </h1>
            <div className="offer-line">

                <div className="Box-one">
              <img className="Offer-image1" src={First} alt="offer1"/>
              <p>Offer name</p>
              <p>Ingredient</p>
              </div>
              <div className="Box-two">
              <img className="Offer-image2" src={Second} alt="offer2"/>
              <p>Offer name</p>
              <p>Ingredient</p>
              </div>
              <div className="Box-three">
              <img className="Offer-image3" src={Third} alt="offer3"/>
              <p>Offer name</p>
              <p>Ingredient</p>
              </div>


            </div>
            <fieldset><legend align="center">Order Here</legend>
             <form>
                <label for="full-name">Full-name</label>
                <input id="full-name" type="text" required placeholder="Enter your full name"/>
                <label for="email">Email-Address</label>
                <input id="email" type="email" required placeholder="Enter your full Email address"/>
                <label for="phone">Phone number</label>
                <input id="phone" type="tel" required placeholder="Enter your Phone number"/>
                <label for="Address">Address</label>
                <input id="Address" type="text" required placeholder="Enter your Address"/>
              
                <p className="Meal-title">Choose an Offer:</p>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <p className="Meal-title">Choose your Meal:</p>
                <div className="Meal-list">
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                <label for="Pickup">Meal
                <input id="Pickup" type="Checkbox" required/><input type="number"/></label>
                </div>
                

                
                <label for="Instruction">Special Instruction</label>
                <textarea id="Instruction" required placeholder="Any exceptions?"/>
                <fieldset className="order-type"><legend align="center">Order Type</legend>
                <div className="order-flex">
                <label for="Delivery">Delivery
                <input id="Delivery" type="radio" name="order-type" required/></label>
                <label for="Pickup">Pick-up
                <input id="Pickup" type="radio" name="order-type" required/></label>
                </div>
                </fieldset>
                <input type="submit" value="Submit Order" className="submit-Order"/>
                
            </form>
            </fieldset>
            <Footer/>
        </div>
    )
}

export default Order;