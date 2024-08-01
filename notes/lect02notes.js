//const me isliye ki koi redeclare na kar de package me kuch change thodi karna hai !!
const express = require("express"); 
/* syntax of es5 called Commonjs Syntax
es5 ka syntax hai-- require */
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
//---NOW----
const app = express(); 
/*app ne express ko call kar lia this means express ki saari property app ke paas aa gyi -- !!
properties of express is transferred into app 
otherwise baar baar likhna padta ---express().get()-- ,,,toh humne use variable me daal dia .
saare ports method banenge ek file ke --- vo file is module and mai use kr rhi to require karna pdega uske saare functions methods ban jayenge */
const PORT = 5000; 
/* PORT VO jagah hai jahan hamara server launch hone waal a hai --****
port nummber means port means platform vo platform jaha server launch hone wala hai iske liye web development ki jarurat hai !!!!!server jaha launch hota hai vo port hai 
port number koi bhi 4 digit number hota hai -- ye number unique hoga */ 


app.use(express.json());
/*express ke paas jo cheez aa rhi hai toh express usko json me convert kr lega se is Middleware ---
ye conversion app ke through ho rhi hai --jo convert kr rha hai vo middleware hai--- vo use hai

use is predefined middleware jaha kabhi use dikhe vo middleware hai app idhar object hai --variable maan lo but here everything is object */


// ------------------ NOW -------------------


app.get('/',(req,res)=>{ //ye jo / hai ye pehla route hai 
    res.send("API is Running")
}); 
 //ab ye func immediately call ho jayega bcoz ye anonymous hai get ka function predefined hai 

/* app.get means app get k0 call kr rha hai -- get express me bana hai get me 2 parameter hai --use has one parameter ,,,while get has 2 parameter 

get me 1st parameter is route konsa hai and 2nd para is karna kya hai usme !! 

Normal programming func ko func name se call krna hota hai but agr mai click kru aur vo function APNE AAP CALL ho jaye means immediately call ho jaaye To hume immediately invoked function chahiye
Achanak se function call ho jaye - - jaise koi kuch kare tohh apne aap vo cheez call ho jaye !!


Everything is written in call back function jaise setInterval etc. ---- 
yaha par search bar me url hit hoga toh agar koi url hit kare toh ek particular hit request pr koi kaam pane aap me start ho jaaye means particular func start ho jaaye ....uske liye call krna pdega ,,,, agar vo function name func hai toh name daalkr alag se call krna pdega but agar mai chahu ki usi instance par call ho jaye then we need  callback func anonymous func khudko call kr lega jis time vo hit ho jaaye !! IMMEDIATELY INVOKE HO JAYE !!


doosra parameter - chalana kisko hai vo function usko aage jakr controller bolenge ,,, Route is Path modules 
So here Route is the slash / 

 
app.get('/',(req,res)=>{ 
    res.send("Hello world ,,, how is it going on ??")
})


OS ki hisab se file system bhi thi,,, Root folder se start hua to colon slash 
\ - offline slash 
/ - online slash 
c drive wala slash C:\    --offline 
this path module is saying mera poora kaam c drive se start ho rha hai

online slash / C yaha localhost ban jayega jaise --localhost:8080 -- port number format 
www.google.com -- domain name version 

First slash is root --- system start hoga root se 
Toh   app.get("/") slash root hai 
ab jo collection hai - - schemas banayenge

Ecomerrce app  , 
User---product---order 
Url pr hit krme se response aa rha hai *****************
*********USER RELATED WORK**********
 user 
 /createuserv-- 
    createuser/name
    createuser/userID
    createuser/name/email/password
 /deleteuser
        delete/name
        delete/name/email/password 
        ye hai different routes -- yehi at the end of the day api hongi!!
 /getuser 
 /updateuserv

TOH ye jo backend folder hai ye ek / slash hai isme jo folder banenge vo collections Banenge ..
*/


//APP IS multi callback function jaise calculator tha
app.listen(PORT ,() => {
    console.log(`Server running on ${PORT} `.yellow)
});

// CHANGE APNE aap detect hote rahe isliye nodemon install kia tha baar baar server band chalu na krna pde --- file apne aap changes detect kr le
