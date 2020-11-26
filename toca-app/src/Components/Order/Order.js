import React from 'react';
import './Order.css';
import Footer from '../Footer/Footer';
import {useState , useEffect} from 'react';
import Axios from 'axios';

const Order = () => {

   

    const [orderName , setOrdername] = useState('');
    const [orderEmail , setOrderemail] = useState('');
    const [orderPhonenumber , setOrderphonenumber] = useState('');
    const [orderAddress , setOrderaddress] = useState ('');
    const [offerItem , setOfferitem] = useState("");
    const [offerItem2 , setOfferitem2] = useState("");
    const [offerItem3 , setOfferitem3] = useState("");
    const [menuItem , setMenuitem] = useState("");
    const [menuItem2 , setMenuitem2] = useState("");
    const [menuItem3 , setMenuitem3] = useState("");
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
             Menu_item:menuItem,
             Menu_item2:menuItem2,
             Menu_item3:menuItem3,
             Menu_quantity:menuQuantity,
             Menu_quantity2:menuQuantity2,
             Menu_quantity3:menuQuantity3,
             comment:comment,
             order_type:onRadioChange
     }).then((data) => {
         if(data.status ===200){
             console.log(data)
             clickHandler(e);
             alert("your Order has been submitted")
         }
     })}catch(err){console.log(err)}
     
   
     }


     const clickHandler = (e) =>{
         e.preventDefault();
        setOrdername('');
        setOrderemail('');
        setOrderphonenumber('');
        setOrderaddress('');
        setOfferitem('');
        setOfferitem2('');
        setOfferitem3('');
        setMenuitem('');
        setMenuitem2('');
        setMenuitem3('');
        setComment('');
        setOfferquantity(0);
        setOfferquantity2(0);
        setOfferquantity3(0);
        setMenuquantity(0);
        setMenuquantity2(0);
        setMenuquantity3(0);
        setOnradiochange('');

      }
      const [offers , setOffers] = useState([]);

      useEffect(() => {
         try{ Axios.get("http://localhost:3010/Offers")
          .then((response) => {
              setOffers(response.data)
          })}catch(err){console.log(err)};
        }, [])


   
    
    return (
        <div className="Order-page" >
            <h1 className="offer-page-title"><span>Toca</span> Offers</h1>
            <h1 className="offers-title">Everyone deserves a discount! </h1>
            <div className="offer-line">
             {offers.map((val)=> {
                 return <div className="offers-wrapper" key={Math.random()}>
     <div className="Box-one">
     <img className="offer_image" src={`http://localhost:3010/${val.image}`} alt ="" />
             <p>{val.offer_title}</p>
              <p>{val.offer_description}</p>
              </div>
                         </div>
             })}
           
        


            </div>
            <fieldset><legend align="center">Order Here</legend>
             <form >
                <label htmlFor="full-name" >Full-name</label>
                <input id="full-name" type="text" value={orderName} name="full-name" placeholder="Enter your full name" onChange={(e) => {
                    setOrdername(e.target.value);
                    
                    
                }}/>
               
               
                <label htmlFor="email">Email-Address</label>
                <input id="email" type="email" value={orderEmail} name="email" placeholder="Enter your full Email address" onChange={(e) => {
                    setOrderemail(e.target.value);
                }}/>
               

                <label htmlFor="phone">Phone number</label>
                <input id="phone" type="tel" name="phone" value={orderPhonenumber} placeholder="Enter your Phone number" onChange={(e) => {
                    setOrderphonenumber(e.target.value);
                }}/>
               

                <label htmlFor="Address">Address</label>
                <input id="Address" type="text"  name="address" value={orderAddress} placeholder="Enter your Address" onChange={(e) => {
                    setOrderaddress(e.target.value);
                }} />
               


                <p className="Meal-title">Choose an Offer:</p>
                <div>
                <select value={offerItem} onChange={(e) => {
                    setOfferitem(e.target.value);
                }} >
                    <option></option>
                    <option value="offer1">offer1</option><option value="offer2">offer2</option><option value="offer3">offer3</option>
                    <option value="offer4">offer4</option>
                    <option value="offer5" >offer5</option>
 
                    
                </select>
                
                <input type="number" value={offerQuantity} onChange={(e)=> {
                   setOfferquantity(e.target.value);
                }} min="0"/>
                </div>
                <div>
                <select value={offerItem2} onChange={(e) => {
                    setOfferitem2(e.target.value);
                }} >
                    <option></option>
                    <option value="offer1">offer1</option><option value="offer2">offer2</option><option value="offer3">offer3</option>
                    <option value="offer4">offer4</option>
                    <option value="offer5" >offer5</option>
 
                    
                </select>
                
                <input type="number" value={offerQuantity2} onChange={(e)=> {
                   setOfferquantity2(e.target.value);
                }} min="0"/>
                </div>
             <div>
                <select value={offerItem3} onChange={(e) => {
                    setOfferitem3(e.target.value);
                }}>
                    <option></option>
                    <option value="offer1">offer1</option><option value="offer2">offer2</option><option value="offer3">offer3</option>
                    <option value="offer4">offer4</option>
                    <option value="offer5" >offer5</option>
 
                    
                </select>
                
                <input type="number" value={offerQuantity3} onChange={(e)=> {
                   setOfferquantity3(e.target.value);
                }} min="0"/>
            </div>

 
             
          

                <p className="Meal-title">Choose your Meal:</p>
                <div className="Meal-list">
                <div>
                <select className="chooseyourmeal" value={menuItem} onChange={(e) => {
                    setMenuitem(e.target.value);
                }} >
                    <option></option>
                    <option value="Meal1">Meal1</option><option value="Meal2">Meal2</option><option value="Meal3">Meal3</option><option value="Meal4">Meal4</option>
                    <option value="Meal5">Meal5</option><option value="Meal6">Meal6</option><option value="Meal7">Meal7</option><option value="Meal8"> Meal8</option>
                    <option value="Meal9">Meal9</option><option value="Meal9">Meal10</option>
                    <option value="Meal11">Meal11</option><option value="Meal12">Meal12</option><option value="Meal13">Meal13</option><option value="Meal14">Meal14</option>
                    <option value="Meal15">Meal15</option><option value="Meal16">Meal16</option><option value="Meal17">Meal17</option><option value="Meal18">Meal18</option><option value="Meal19">Meal19</option>
                    <option value="Meal20">Meal20</option> <option value="Meal21">Meal21</option> <option value="Meal22">Meal22</option>
                </select>
                <input type="number" value={menuQuantity} onChange={(e)=> {
                   setMenuquantity(e.target.value);
                }}min="0"/>
                </div>
                <div>
                <select className="chooseyourmeal" value={menuItem2} onChange={(e) => {
                    setMenuitem2(e.target.value);
                }} >
                    <option></option>
                    <option value="Meal1">Meal1</option><option value="Meal2">Meal2</option><option value="Meal3">Meal3</option><option value="Meal4">Meal4</option>
                    <option value="Meal5">Meal5</option><option value="Meal6">Meal6</option><option value="Meal7">Meal7</option><option value="Meal8"> Meal8</option>
                    <option value="Meal9">Meal9</option><option value="Meal9">Meal10</option>
                    <option value="Meal11">Meal11</option><option value="Meal12">Meal12</option><option value="Meal13">Meal13</option><option value="Meal14">Meal14</option>
                    <option value="Meal15">Meal15</option><option value="Meal16">Meal16</option><option value="Meal17">Meal17</option><option value="Meal18">Meal18</option><option value="Meal19">Meal19</option>
                    <option value="Meal20">Meal20</option> <option value="Meal21">Meal21</option> <option value="Meal22">Meal22</option>
                </select>
                <input type="number" value={menuQuantity2} onChange={(e)=> {
                   setMenuquantity2(e.target.value);
                }}min="0"/>
                </div>
                <div>
                <select className="chooseyourmeal" value={menuItem3} onChange={(e) => {
                    setMenuitem3(e.target.value);
                }} >
                    <option></option>
                    <option value="Meal1">Meal1</option><option value="Meal2">Meal2</option><option value="Meal3">Meal3</option><option value="Meal4">Meal4</option>
                    <option value="Meal5">Meal5</option><option value="Meal6">Meal6</option><option value="Meal7">Meal7</option><option value="Meal8"> Meal8</option>
                    <option value="Meal9">Meal9</option><option value="Meal9">Meal10</option>
                    <option value="Meal11">Meal11</option><option value="Meal12">Meal12</option><option value="Meal13">Meal13</option><option value="Meal14">Meal14</option>
                    <option value="Meal15">Meal15</option><option value="Meal16">Meal16</option><option value="Meal17">Meal17</option><option value="Meal18">Meal18</option><option value="Meal19">Meal19</option>
                    <option value="Meal20">Meal20</option> <option value="Meal21">Meal21</option> <option value="Meal22">Meal22</option>
                </select>
                <input type="number" value={menuQuantity3} onChange={(e)=> {
                   setMenuquantity3(e.target.value);
                }}min="0"/>
              
                </div>
         
                </div>
               
 
                <label htmlFor="Instruction">Special Instruction</label>
                <textarea id="Instruction" value={comment} onChange={(e) => {
                    setComment(e.target.value);
                }} placeholder="Any exceptions?"/>
                
                <fieldset className="order-typee"><legend align="center">Order Type</legend>
                <div className="order-flex" onChange={(e) => {
                    setOnradiochange(e.target.value)
                }}>
                <label >Pick-up
                <input id="Pickup0" type="radio" value="on-pickup" name="order-type"/></label>

                <label >Delivery
                <input id="Delivery" type="radio" value="on-delivery" name="order-type" /></label>
               
                </div>
                </fieldset>
                <input type="submit" disabled={orderName.length < 8 || !orderEmail.includes('@') || orderPhonenumber.length === 0 || orderAddress.length === 0} value="Submit Order" className="submit-Order" onClick={handleSubmit}/>
                
            </form>
            </fieldset>
            <Footer/>
        </div>
    )
}

export default Order;