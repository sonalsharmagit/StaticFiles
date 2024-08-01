const express = require("express"); 
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const userdata = require("../utility/userdata.json");
const fileURLtoPath = require("url");
const app = express(); 
const PORT = 5000;
const path = require('path');

app.use(express.json());

//STATIC FILES WALA MIDDLEWARE....
/*this is used to uppload static files jaise html ki file */
// app.use(express.static("public"));
//isse public folder isme aa gya 

app.use(express.static(path.resolve(__dirname,"./public")));

app.get('/userdata',(req,res)=>{ 
    res.send(userdata);
}); 

app.get('/',(req,res)=>{ 
    res.sendFile(path.resolve(__dirname,"./public","index.html"));
}); 
//i want ki /home pr mera html ka page aaye
app.get('/contact',(req,res)=>{ 
    res.sendFile(path.resolve(__dirname,"./public","contact.html"));
}); 

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`.green );
});