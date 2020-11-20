import React from 'react';
import './Order.css';
import First from '../../Images/offer1.jpg';
import Second from '../../Images/offer2.jpg';
import Third from '../../Images/offer3.jpg';
import Footer from '../Footer/Footer';
import {useState} from 'react';
import Axios from 'axios';

const Order = () => {
  

    const [orderName , setOrdername] = useState('');
    const [orderEmail , setOrderemail] = useState('');
    const [orderPhonenumber , setOrderphonenumber] = useState(0);
    const [orderAddress , setOrderaddress] = useState ('');
    const [offerItem , setOfferitem] = useState("");
    const [offerItem2 , setOfferitem2] = useState("");
    const [offerItem3 , setOfferitem3] = useState("");
    const [addOfferItem , setAddofferitem] = useState("");
    const [menuItem , setMenuitem] = useState("");
    const [menuItem2 , setMenuitem2] = useState("");
    const [menuItem3 , setMenuitem3] = useState("");
    const [addMenuitem , setAddmenuitem] = useState("")
    const [comment , setComment] = useState('');
    const [ onRadioChange , setOnradiochange] = useState("")
    const [offerQuantity , setOfferquantity] = useState(0);
    const [offerQuantity2 , setOfferquantity2] = useState(0);
    const [offerQuantity3 , setOfferquantity3] = useState(0);
    const [menuQuantity , setMenuquantity] = useState(0);
    const [menuQuantity2 , setMenuquantity2] = useState(0);
    const [menuQuantity3 , setMenuquantity3] = useState(0);

    


    const handleSubmit = async(e) => {
        e.preventDefault();
        try{await Axios.post('http://localhost:3010/orders',{
             customer_name1: orderName,
             customer_email1:orderEmail,
             phone1:orderPhonenumber,
             customer_address1:orderAddress, 
             offer_item:offerItem,
             offer_item2:offerItem2,
             offer_item3:offerItem3,
             offer_quantity:offerQuantity,
             offer_quantity2:offerQuantity2,
             offer_quantity3:offerQuantity3,
             add_offer:addOfferItem,
             Menu_item:menuItem,
             Menu_item2:menuItem2,
             Menu_item3:menuItem3,
             Menu_quantity:menuQuantity,
             Menu_quantity2:menuQuantity2,
             Menu_quantity3:menuQuantity3,
             add_menu:addMenuitem,
             comment:comment,
             order_type:onRadioChange
     }).then((response) => {
         if(response.status ===200){
             console.log(response)
         }
     })}catch(err){console.log(err)}
     
   
     }

   
    
    return (
        <div className="Order-page" >
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
                <label htmlFor="full-name" >Full-name</label>
                <input id="full-name" type="text" name="full-name" required placeholder="Enter your full name" onChange={(e) => {
                    setOrdername(e.target.value);
                    
                }}/>
               
               
                <label htmlFor="email">Email-Address</label>
                <input id="email" type="email" name="email" required placeholder="Enter your full Email address" onChange={(e) => {
                    setOrderemail(e.target.value);
                }}/>
               

                <label htmlFor="phone">Phone number</label>
                <input id="phone" type="tel" name="phone" required placeholder="Enter your Phone number" onChange={(e) => {
                    setOrderphonenumber(e.target.value);
                }}/>
               

                <label htmlFor="Address">Address</label>
                <input id="Address" type="text"  name="address" placeholder="Enter your Address" onChange={(e) => {
                    setOrderaddress(e.target.value);
                }} required/>
               


                <p className="Meal-title">Choose an Offer:</p>
                <div>
                <select  onChange={(e) => {
                    setOfferitem(e.target.value);
                }} defaultValue>
                    <option></option>
                    <option value="offer1">offer1</option><option value="offer2">offer2</option><option value="offer3">offer3</option>
                    <option value="offer4">offer4</option>
                    <option value="offer5" >offer5</option>
 
                    
                </select>
                
                <input type="number" onChange={(e)=> {
                   setOfferquantity(e.target.value);
                }} min="0"/>
                </div>
                <div>
                <select  onChange={(e) => {
                    setOfferitem2(e.target.value);
                }} defaultValue>
                    <option></option>
                    <option value="offer1">offer1</option><option value="offer2">offer2</option><option value="offer3">offer3</option>
                    <option value="offer4">offer4</option>
                    <option value="offer5" >offer5</option>
 
                    
                </select>
                
                <input type="number" onChange={(e)=> {
                   setOfferquantity2(e.target.value);
                }} min="0"/>
                </div>
             <div>
                <select  onChange={(e) => {
                    setOfferitem3(e.target.value);
                }} defaultValue>
                    <option></option>
                    <option value="offer1">offer1</option><option value="offer2">offer2</option><option value="offer3">offer3</option>
                    <option value="offer4">offer4</option>
                    <option value="offer5" >offer5</option>
 
                    
                </select>
                
                <input type="number" onChange={(e)=> {
                   setOfferquantity3(e.target.value);
                }} min="0"/>
            </div>
                <input type="text" onChange={(e)=> {
                    setAddofferitem(e.target.value)
                }}placeholder="Add items here / Example : Item - Quantity"/>
          

                <p className="Meal-title">Choose your Meal:</p>
                <div className="Meal-list">
                <div>
                <select onChange={(e) => {
                    setMenuitem(e.target.value);
                }} defaultValue>
                    <option></option>
                    <option value="Meal1">Meal1</option><option value="Meal2">Meal2</option><option value="Meal3">Meal3</option><option value="Meal4">Meal4</option>
                    <option value="Meal5">Meal5</option><option value="Meal6">Meal6</option><option value="Meal7">Meal7</option><option value="Meal8"> Meal8</option>
                    <option value="Meal9">Meal9</option><option value="Meal9">Meal10</option>
                    <option value="Meal11">Meal11</option><option value="Meal12">Meal12</option><option value="Meal13">Meal13</option><option value="Meal14">Meal14</option>
                    <option value="Meal15">Meal15</option><option value="Meal16">Meal16</option><option value="Meal17">Meal17</option><option value="Meal18">Meal18</option><option value="Meal19">Meal19</option>
                    <option value="Meal20">Meal20</option> <option value="Meal21">Meal21</option> <option value="Meal22">Meal22</option>
                </select>
                <input type="number" onChange={(e)=> {
                   setMenuquantity(e.target.value);
                }}min="0"/>
                </div>
                <div>
                <select onChange={(e) => {
                    setMenuitem2(e.target.value);
                }} defaultValue>
                    <option></option>
                    <option value="Meal1">Meal1</option><option value="Meal2">Meal2</option><option value="Meal3">Meal3</option><option value="Meal4">Meal4</option>
                    <option value="Meal5">Meal5</option><option value="Meal6">Meal6</option><option value="Meal7">Meal7</option><option value="Meal8"> Meal8</option>
                    <option value="Meal9">Meal9</option><option value="Meal9">Meal10</option>
                    <option value="Meal11">Meal11</option><option value="Meal12">Meal12</option><option value="Meal13">Meal13</option><option value="Meal14">Meal14</option>
                    <option value="Meal15">Meal15</option><option value="Meal16">Meal16</option><option value="Meal17">Meal17</option><option value="Meal18">Meal18</option><option value="Meal19">Meal19</option>
                    <option value="Meal20">Meal20</option> <option value="Meal21">Meal21</option> <option value="Meal22">Meal22</option>
                </select>
                <input type="number" onChange={(e)=> {
                   setMenuquantity2(e.target.value);
                }}min="0"/>
                </div>
                <div>
                <select onChange={(e) => {
                    setMenuitem3(e.target.value);
                }} defaultValue>
                    <option></option>
                    <option value="Meal1">Meal1</option><option value="Meal2">Meal2</option><option value="Meal3">Meal3</option><option value="Meal4">Meal4</option>
                    <option value="Meal5">Meal5</option><option value="Meal6">Meal6</option><option value="Meal7">Meal7</option><option value="Meal8"> Meal8</option>
                    <option value="Meal9">Meal9</option><option value="Meal9">Meal10</option>
                    <option value="Meal11">Meal11</option><option value="Meal12">Meal12</option><option value="Meal13">Meal13</option><option value="Meal14">Meal14</option>
                    <option value="Meal15">Meal15</option><option value="Meal16">Meal16</option><option value="Meal17">Meal17</option><option value="Meal18">Meal18</option><option value="Meal19">Meal19</option>
                    <option value="Meal20">Meal20</option> <option value="Meal21">Meal21</option> <option value="Meal22">Meal22</option>
                </select>
                <input type="number" onChange={(e)=> {
                   setMenuquantity3(e.target.value);
                }}min="0"/>
                </div>
             
                <input type="text" onChange={(e)=> {
                    setAddmenuitem(e.target.value);
                }}placeholder="Add items here / Example : Item - Quantity"/>    
            
                
                </div>
                
 
                <label htmlFor="Instruction">Special Instruction</label>
                <textarea id="Instruction" required  onChange={(e) => {
                    setComment(e.target.value);
                }} placeholder="Any exceptions?"/>
                
                <fieldset className="order-typee"><legend align="center">Order Type</legend>
                <div className="order-flex" onChange={(e) => {
                    setOnradiochange(e.target.value)
                }}>
                <label >Pick-up
                <input id="Pickup0" type="radio" value="on-pickup" name="pickup"/></label>

                <label >Delivery
                <input id="Delivery" type="radio" value="on-delivery" name="on-delivery" /></label>
               
                </div>
                </fieldset>
                <input type="submit" value="Submit Order" className="submit-Order" onClick={handleSubmit}/>
                
            </form>
            </fieldset>
            <Footer/>
        </div>
    )
}

export default Order;