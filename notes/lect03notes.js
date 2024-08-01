const express = require("express"); 
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const app = express(); 
const userdata = require("../utility/userdata.json");
/*ye json jaise hi js me aya array of objects ban gyaa but humne likh rakha hai ki express wapas usko json me convert kr de */
const PORT = 5000;

app.use(express.json());

// let data={
//     name:"John Ji",
//     age: 25,
//     city:"Jaipur"
// }

// app.get('/',(req,res)=>{ //ye jo / hai ye pehla route hai 
//     res.send(userdata);
// }); 

app.get('/',(req,res)=>{ 
    res.send("<h1>WELCOME TO EXPRESS</h1>");
}); 


app.listen(PORT ,() => {
    console.log(`Server running on ${PORT} `.yellow)
});