const express = require('express'); //server
const mysql = require('mysql'); // importing after installing
const app = express();
const cors = require('cors');  // to send data from the front end to the backend
const port = 3010; 
const bodyParser = require('body-parser');





const db = mysql.createConnection({   // to create connection with the database
    user : "root",
    host : "localhost",
    password : "Lucifer6996$$",
    database : "Toca-db",
    debug : true,
});

app.use(express.json());
app.use(cors({origin: true, credentials: true})); 
app.use(bodyParser.urlencoded({extended:true})); // Essential 
app.use(bodyParser.json());
app.use(express.static( "public" ) );




app.post('/events' , async(req , res)=> {


    const customer_name = req.body.customer_name;
    const customer_email = req.body.customer_email;
    const customer_address = req.body.customer_address;
    const phone = req.body.phone;
    const category = req.body.category;
    const details = req.body.details;
    const sqlInsert = 'INSERT INTO eventsTable(customer_name, customer_email, customer_address, category, details, phone) VALUES ("' + customer_name + '", "' + customer_email + '", "' + customer_address + '", "' + category + '" , "' + details + '" , "' + phone + '");'
   db.query(sqlInsert , (err,result) => {
        res.status(200).send(result)
    })
        
});

app.post('/orders' , async(req , res) => {
   const customer_name1 = req.body.customer_name1;
   const customer_email1 = req.body.customer_email1;
   const phone1 = req.body.phone1;
   const customer_address1 = req.body.customer_address1;
   const offer_item = req.body.offer_item;
   const offer_item2 = req.body.offer_item2;
   const offer_item3 = req.body.offer_item3;
   const offer_quantity = req.body.offer_quantity;
   const offer_quantity2 = req.body.offer_quantity2;
   const offer_quantity3 = req.body.offer_quantity3;
   const add_offer = req.body.add_offer;
   const Menu_item = req.body.Menu_item;
   const Menu_item2 = req.body.Menu_item2;
   const Menu_item3 = req.body.Menu_item3;
   const Menu_quantity = req.body.Menu_quantity;
   const Menu_quantity2 = req.body.Menu_quantity2;
   const Menu_quantity3 = req.body.Menu_quantity3;
   const add_menu = req.body.add_menu;
   const comment = req.body.comment;
   const order_type = req.body.order_type;
   const insertSql = 'INSERT INTO orderTable(customer_name1, customer_email1 , phone1 , customer_address1 , offer_item, offer_quantity ,offer_item2,offer_quantity2 , offer_item3, offer_quantity3 , add_offer, Menu_item,Menu_quantity ,Menu_item2, Menu_quantity2 , Menu_item3,Menu_quantity3, add_menu , comment ,order_type) VALUES ("' + customer_name1 + '", "' + customer_email1 + '", "' + phone1 + '", "' + customer_address1 + '" , "' + offer_item + '" , "' + offer_quantity + '" , "' + offer_item2 + '" , "' + offer_quantity2 + '" , "' + offer_item3  + '" , "' + offer_quantity3 + '" , "' + add_offer + '" , "' + Menu_item + '" , "' + Menu_quantity + '" , "' + Menu_item2 + '" , "' + Menu_quantity2 + '" , "' + Menu_item3 + '" , "' + Menu_quantity3 + '" , "' + add_menu + '" , "' + comment + '" , "' + order_type + '" );'

   

   db.query(insertSql  , (err,result) => {
    res.status(200).send(result)
})

});





app.listen(port , () => {
    console.log('server is running on port 3010');
});