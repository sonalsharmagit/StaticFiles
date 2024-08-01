const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const userdata = require("./utility/userdata.json");
const fileURLtoPath = require("url");
const app = express();
/* properties of express is transferred into app */
const path = require('path');
const PORT = 5000;

app.use(express.json());


//.........STATIC FILES WALA MIDDLEWARE....
app.use(express.static(path.resolve(__dirname,"./public")));
//public folder isme aa gya

/* app.get("/",(req,res)=>{
     res.send({
         message:"welcome to server",
         authorname:"sonal sharma"
     });
 }); */
 //...


app.get("/userdata",(req,res)=>{
    res.send(userdata);
});

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","index.html"));
});

app.get("/contact",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","contact.html"));
});

app.get("/stopwatch",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./public","stopwatch.html"));
});

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`.green );
});






