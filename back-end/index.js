const express = require('express'); //server
const mysql = require('mysql'); // importing after installing
const app = express();
const cors = require('cors');  // to send data from the front end to the backend
const port = 3010; 
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


const db = mysql.createConnection({   // to create connection with the database
    user : "root",
    host : "localhost",
    password : "Lucifer6996$$",
    database : "Toca-db",
    debug : true,
});

app.use(express.json());
app.use(cors({origin: true, credentials: true})); 
app.use(bodyParser.urlencoded({extended:false})); // Essential 
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(fileUpload());

app.post('/Images', (req, res) => {

    

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    const myFile = req.files.file;
    

    //  mv() method places the file inside public directory
    myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
            
        }
        // returing the response with file path and name
       
        return res.send({name: myFile.name, path: `/${myFile.name}`});
 
    });
 

})



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
   const Menu_item = req.body.Menu_item;
   const Menu_item2 = req.body.Menu_item2;
   const Menu_item3 = req.body.Menu_item3;
   const Menu_quantity = req.body.Menu_quantity;
   const Menu_quantity2 = req.body.Menu_quantity2;
   const Menu_quantity3 = req.body.Menu_quantity3;
   const comment = req.body.comment;
   const order_type = req.body.order_type;
   const insertSql = 'INSERT INTO orderTable(customer_name1, customer_email1 , phone1 , customer_address1 , offer_item, offer_quantity ,offer_item2,offer_quantity2 , offer_item3, offer_quantity3 , Menu_item,Menu_quantity ,Menu_item2, Menu_quantity2 , Menu_item3,Menu_quantity3, comment ,order_type) VALUES ("' + customer_name1 + '", "' + customer_email1 + '", "' + phone1 + '", "' + customer_address1 + '" , "' + offer_item + '" , "' + offer_quantity + '" , "' + offer_item2 + '" , "' + offer_quantity2 + '" , "' + offer_item3  + '" , "' + offer_quantity3 + '" ,  "' + Menu_item + '" , "' + Menu_quantity + '" , "' + Menu_item2 + '" , "' + Menu_quantity2 + '" , "' + Menu_item3 + '" , "' + Menu_quantity3 + '" ,  "' + comment + '" , "' + order_type + '" );'

   

   db.query(insertSql  , (err,result) => {
    res.status(200).send(result)
})

});

app.post('/register' , async(req,res) => {
    const username = req.body.username;
    const adminPassword = req.body.adminPassword;
    const insert = 'INSERT INTO admin_tbl(username , adminPassword) VALUES ("' + username + '" , "' + adminPassword + '");'
   db.query(insert , (err , result) => {
       res.status(200).send(result)
   })
})


app.post('/login' , async(req,res) => {
    const username = req.body.username;
    const adminPassword = req.body.adminPassword;
    const loginInsert = 'SELECT * FROM admin_tbl WHERE username ="' + username + '" AND adminPassword = "' + adminPassword + '";'
   db.query(loginInsert , (err , result) => {
       if (err){
           res.send({err});
       }
           if (result.length > 0) {
               res.send(result);
              
           }else{
               res.send({message: "No user Found !"})
           }
       
   })
})

app.get('/About-us' , async(req , res) => {
    const sqlget = "SELECT * FROM Admin_panel";
    db.query(sqlget ,(err , result) => {
        res.status(200).send(result);
    })
})

app.get('/sandwish' , async(req , res) => {
    const sqlget = "SELECT * FROM sandwishes_menu";
    db.query(sqlget ,(err , result) => {
        res.status(200).send(result);
    })
})

app.get('/drinks' , async(req , res) => {
    const sqlget = "SELECT * FROM drinks_menu";
    db.query(sqlget ,(err , result) => {
        res.status(200).send(result);
    })
})

app.get('/deserts' , async(req , res) => {
    const sqlget = "SELECT * FROM deserts_menu";
    db.query(sqlget ,(err , result) => {
        res.status(200).send(result);
    })
})

app.post('/About-us' , async(req , res)=> {


    const About_us = req.body.About_us;
    const image1 = req.body.image1
    
    const sqlInsert = 'INSERT INTO Admin_panel(About_us , image1) VALUES ("' + About_us + '" , "' + image1 + '");'
   db.query(sqlInsert , (err,result) => {
        res.status(200).send(err)
    })
        
});

app.delete('/About-us/:About_us' , (req , res) => {
    const About_us = req.params.About_us;
 
    const sqldel = 'DELETE FROM Admin_panel WHERE About_us="'+About_us+'";'
    db.query(sqldel , (err , result) => {
        if(err) {
            console.log(err)
        }else{
            res.send(result);
        }
    })

})

app.delete('/Blogs/:id' , (req , res) => {
    const id = req.params.id;
 
    const sqldel = 'DELETE FROM Blogs WHERE id="'+id+'";'
    db.query(sqldel , (err , result) => {
        if(err) {
            console.log(err)
        }else{
            res.send(result);
        }
    })

})

app.delete('/Offers/:id' , (req , res) => {
    const id = req.params.id;
 
    const sqldel = 'DELETE FROM offers WHERE id="'+id+'";'
    db.query(sqldel , (err , result) => {
        if(err) {
            console.log(err)
        }else{
            res.send(result);
        }
    })

})

app.delete('/Event/:id' , (req , res) => {
    const id = req.params.id;
 
    const sqldel = 'DELETE FROM events WHERE id="'+id+'";'
    db.query(sqldel , (err , result) => {
        if(err) {
            console.log(err)
        }else{
            res.send(result);
        }
    })

})

app.delete('/Daily-plates/:id' , (req , res) => {
    const id = req.params.id;
 
    const sqldel = 'DELETE FROM Daily_plates WHERE id="'+id+'";'
    db.query(sqldel , (err , result) => {
        if(err) {
            console.log(err)
        }else{
            res.send(result);
        }
    })

})

app.delete('/Catering/:id' , (req , res) => {
    const id = req.params.id;
 
    const sqldel = 'DELETE FROM Catering WHERE id="'+id+'";'
    db.query(sqldel , (err , result) => {
        if(err) {
            console.log(err)
        }else{
            res.send(result);
        }
    })

})

app.delete('/Menu/:id' , (req , res) => {
    const id = req.params.id;
 
    const sqldel = 'DELETE FROM Menu WHERE id="'+id+'";'
    db.query(sqldel , (err , result) => {
        if(err) {
            console.log(err)
        }else{
            res.send(result);
        }
    })

})

app.post('/Menu' , async(req , res)=> {


    const Menu_name = req.body.Menu_name;
    const Menu_price = req.body.Menu_price;

    
    const sqlInsert = 'INSERT INTO Menu(Menu_name , Menu_price) VALUES ("' + Menu_name + '" , "' + Menu_price + '");'
   db.query(sqlInsert , (err,result) => {
        res.status(200).send(err)
    })
        
});

app.post('/sandwish' , async(req , res)=> {


    const sandwish_name = req.body.sandwish_name;
    const sandwish_price = req.body.sandwish_price;

    
    const sqlInsert = 'INSERT INTO sandwishes_menu(sandwish_name , sandwish_price) VALUES ("' + sandwish_name + '" , "' + sandwish_price + '");'
   db.query(sqlInsert , (err,result) => {
        res.status(200).send(err)
    })
        
});


app.delete('/sandwish/:id' , (req , res) => {
    const id = req.params.id;
 
    const sqldel = 'DELETE FROM sandwishes_menu WHERE id="'+id+'";'
    db.query(sqldel , (err , result) => {
        if(err) {
            console.log(err)
        }else{
            res.send(result);
        }
    })

})

app.post('/deserts' , async(req , res)=> {


    const desert_name = req.body.desert_name;
    const desert_price = req.body.desert_price;

    
    const sqlInsert = 'INSERT INTO deserts_menu(desert_name , desert_price) VALUES ("' + desert_name + '" , "' + desert_price + '");'
   db.query(sqlInsert , (err,result) => {
        res.status(200).send(err)
    })
        
});

app.delete('/deserts/:id' , (req , res) => {
    const id = req.params.id;
 
    const sqldel = 'DELETE FROM deserts_menu WHERE id="'+id+'";'
    db.query(sqldel , (err , result) => {
        if(err) {
            console.log(err)
        }else{
            res.send(result);
        }
    })

})

app.post('/drinks' , async(req , res)=> {


    const drinks_name = req.body.drinks_name;
    const drinks_price = req.body.drinks_price;

    
    const sqlInsert = 'INSERT INTO drinks_menu(drinks_name , drinks_price) VALUES ("' + drinks_name + '" , "' + drinks_price + '");'
   db.query(sqlInsert , (err,result) => {
        res.status(200).send(err)
    })
        
});

app.delete('/drinks/:id' , (req , res) => {
    const id = req.params.id;
 
    const sqldel = 'DELETE FROM drinks_menu WHERE id="'+id+'";'
    db.query(sqldel , (err , result) => {
        if(err) {
            console.log(err)
        }else{
            res.send(result);
        }
    })

})



app.post('/Daily-plates' , async(req , res)=> {


    const Daily_day = req.body.Daily_day;
    const Meal_name = req.body.Meal_name;
    const Meal_price = req.body.Meal_price;
    
    const sqlInsert = 'INSERT INTO Daily_plates(Daily_day , Meal_name , Meal_price) VALUES ("' + Daily_day + '" , "' + Meal_name + '" , "' + Meal_price + '");'
   db.query(sqlInsert , (err,result) => {
        res.status(200).send(err)
    })
        
});


app.post('/Event' , async(req , res)=> {


   const events_intro = req.body.events_intro;
    
    const sqlInsert = 'INSERT INTO events(events_intro) VALUES ("' + events_intro + '");'
   db.query(sqlInsert , (err,result) => {
        res.status(200).send(err)
    })
        
});

app.post('/Event' , async(req , res)=> {


    const events_intro = req.body.events_intro;
     
     const sqlInsert = 'INSERT INTO events(events_intro) VALUES ("' + events_intro + '");'
    db.query(sqlInsert , (err,result) => {
         res.status(200).send(err)
     })
         
 });
 
 app.put('/Event' , (req , res)=> {
     const id = req.body.id;
     const events_intro = req.body.events_intro;
     const sqlUpdate = 'UPDATE events SET events_intro="'+events_intro+'" WHERE id="'+id+'";'
     db.query(sqlUpdate , (err , result)=> {
         if(err){
             console.log(err)
         }else{
             res.send(result);
         }
     }) 
 })

 app.put('/Blogs' , (req , res)=> {
    const id = req.body.id;
    const image = req.body.image;
    const description = req.body.description;
    const sqlUpdate = 'UPDATE Blogs SET image= "'+image+'" , description ="'+description+'" WHERE id="'+id+'";'
    db.query(sqlUpdate , (err , result)=> {
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    }) 
})

app.put('/Offers' , (req , res)=> {
    const id = req.body.id;
    const offer_title = req.body.offer_title;
    const image = req.body.image;
    const offer_description = req.body.offer_description;
    const sqlUpdate = 'UPDATE offers SET offer_title= "'+offer_title+'" , image ="'+image+'" , offer_description="'+offer_description+'" WHERE id="'+id+'";'
    db.query(sqlUpdate , (err , result)=> {
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    }) 
})

app.put('/Catering' , (req , res)=> {
    const id = req.body.id;
    const Our_catering = req.body.Our_catering;
    const image1 = req.body.image1;
    const sqlUpdate = 'UPDATE Catering SET Our_catering= "'+Our_catering+'" , image1 ="'+image1+'" WHERE id="'+id+'";'
    db.query(sqlUpdate , (err , result)=> {
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    }) 
})

app.put('/drinks' , (req , res)=> {
    const id = req.body.id;
    const drinks_name = req.body.drinks_name;
    const drinks_price = req.body.drinks_price;
    const sqlUpdate = 'UPDATE drinks_menu SET drinks_name= "'+drinks_name+'" , drinks_price ="'+drinks_price+'" WHERE id="'+id+'";'
    db.query(sqlUpdate , (err , result)=> {
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    }) 
})

app.put('/deserts' , (req , res)=> {
    const id = req.body.id;
    const desert_name = req.body.desert_name;
    const desert_price = req.body.desert_price;
    const sqlUpdate = 'UPDATE deserts_menu SET desert_name= "'+desert_name+'" , desert_price ="'+desert_price+'" WHERE id="'+id+'";'
    db.query(sqlUpdate , (err , result)=> {
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    }) 
})

app.put('/sandwish' , (req , res)=> {
    const id = req.body.id;
    const sandwish_name = req.body.sandwish_name;
    const sandwish_price = req.body.sandwish_price;
    const sqlUpdate = 'UPDATE sandwishes_menu SET sandwish_name= "'+sandwish_name+'" , sandwish_price ="'+sandwish_price+'" WHERE id="'+id+'";'
    db.query(sqlUpdate , (err , result)=> {
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    }) 
})

app.put('/Menu' , (req , res)=> {
    const id = req.body.id;
    const Menu_name = req.body.Menu_name;
    const Menu_price = req.body.Menu_price;
    const sqlUpdate = 'UPDATE Menu SET Menu_name= "'+Menu_name+'" , Menu_price ="'+Menu_price+'" WHERE id="'+id+'";'
    db.query(sqlUpdate , (err , result)=> {
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    }) 
})


app.put('/About-us' , (req , res)=> {
    const id = req.body.id;
    const About_us = req.body.About_us;
    const image1 = req.body.image1;
    const sqlUpdate = 'UPDATE Admin_panel SET About_us= "'+About_us+'" , image1 ="'+image1+'" WHERE id="'+id+'";'
    db.query(sqlUpdate , (err , result)=> {
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    }) 
})

app.put('/Daily-plates' , (req , res)=> {
    const id = req.body.id;
    const Daily_day = req.body.Daily_day;
    const Meal_name = req.body.Meal_name;
    const Meal_price = req.body.Meal_price;
    const sqlUpdate = 'UPDATE Daily_plates SET Daily_day="'+Daily_day+'" , Meal_name ="'+Meal_name+'" , Meal_price="'+Meal_price+'" WHERE id="'+id+'";'
    db.query(sqlUpdate , (err , result)=> {
        if(err){
            console.log(err)
        }else{
            res.send(result);
        }
    }) 
})


app.post('/Catering' , async(req , res)=> {


    const Our_catering = req.body.Our_catering;
    const image1 = req.body.image1;
   
     
     const sqlInsert = 'INSERT INTO Catering(Our_catering ,image1 ) VALUES ("' + Our_catering + '" , "' + image1 + '");'
    db.query(sqlInsert , (err,result) => {
         res.status(200).send(err)
     })
         
 });


app.get('/Menu' , async(req , res)=> {
    const sqlget = "SELECT * FROM Menu";
 
    db.query(sqlget , (err , result) => {
        res.send(result);
    })

})

app.get('/Daily-plates' , async(req , res)=> {
    const sqlget = "SELECT * FROM Daily_plates";
    db.query(sqlget , (err , result) => {
        res.send(result);
    })
})

app.get('/Catering' , async(req , res)=> {
    const sqlget = "SELECT * FROM Catering";
    db.query(sqlget , (err , result) => {
        res.send(result);
    })
})
app.get('/Offers' , async(req , res)=> {
    const sqlget = "SELECT * FROM offers";
    db.query(sqlget , (err , result) => {
        res.send(result);
    })
})

app.post('/Offers' , async(req , res)=> {
    const image = req.body.image;
    const offer_description = req.body.offer_description;
    const offer_title = req.body.offer_title;
    const sqlInsert = 'INSERT INTO offers(offer_title , image , offer_description) VALUES ("' + offer_title + '" , "' + image + '" , "' + offer_description + '");'
    db.query(sqlInsert , (err , result) => {
        res.send(result);
    })
})

app.post('/Blogs' , async(req , res)=> {
    const image = req.body.image;
    const description = req.body.description;

    const sqlInsert = 'INSERT INTO Blogs(image ,description) VALUES ( "' + image + '" , "' + description + '");'
    db.query(sqlInsert , (err , result) => {
        res.send(result);
    })
})

app.get('/Event' , async(req , res)=> {
    const sqlget = "SELECT * FROM events";
    db.query(sqlget , (err , result) => {
        res.send(result);
    })
})
app.get('/Blogs' , async(req , res)=> {
    const sqlget = "SELECT * FROM Blogs";
    db.query(sqlget , (err , result) => {
        res.send(result);
    })
})




app.listen(port , () => {
    console.log('server is running on port 3010');
});