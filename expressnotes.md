---------------EXPRESSS NOTES ----------------


1 what is express
so express is a javascript framework that helps in creating apis and handle asynchronous javascript request and response

2.what is javascript framework
any coding language whose parent is javascript is called as framework
ek aisa coding language jo javascript ke upar likhi gai hai(nodejs ke upar)
node ek set hai to express uska subset hai

3.what is apis
so api is application programming interface
it is a set of rules that allow two software programs to communicate with each other.
frontend and backend 
matlab sir database mai sari files stored hai ab front end wale bhaiya ko information chahiye jo wo apne ui mai show kar sake ab unko wo data jis form mai bhejenge wo format json format hai
json format mai hi maine data ko database ke andar store kiya hai
lekin database se wo data front end tak le jane wala kaam express karegi kyuki express url/ api banane ka kam karti hai
api actual mai url hi hai jo mutiple routes and endpoints se milkar bani hai

IT engineer
1. routes
class1-12/arts/ba/llb
class1-12/arts/ba/ma
class1-12/science/btech
class1-12/science/btech/mtech
class1-12/science/btech/mba
class1-12/science/bca/mca/mba
class1-12/science/bsc
class1-12/commerce/bba/mba

2.jab app jis route mai the us time jo ghantaye apke saath ho rahi thi wo actually mai controller hai.

3.co-cirrcular activites perform
middlewares.
login mai jo authetication and authorisation ka kaam hai wo middlewares dekhte hai , kisi data ko kis aur datatype mai convert karne ka kaam bhi middlewares dekhte hai, agar data front end se backend ya backend se front end ja raha hai to uss wakt data across the origin ja raha hai to time pe cross origin resource share ho raha hai to yeh middlewares ki responsibility hai ki data protected rahe to us time cors nam ki policy wala apne ap mai ek middleware hoga.

4.jab data across the origin travel karege to yeh hume nahi pata ki wo kitna time lena wala hai soo in that case baki ka javascript program us data traveling ke liye wait na karein isiliye expressjs pura pura asynchronous javascript par based kiya gaya hai. iske liye javascript ka async await callback aur promise tino mai se koi ek use hoga

4*)callback: app -->get post put patch delete
crud create read update delete
app() --> calculator
app.get('/',(req,res)=>{
  console.log('hello world')
})

5. request is the ask done by frontend side
jab front end ko data chahiye hoti hai tab wo backend se data ki demand karta hai backend ki application (app) usko listen karega kisi ek port par (platform par jispar backend ka server launch kiya gaya hai ).


express
1. server
2. routes
3. controller
4. middleware

database :
  1.database ke saath connection and configuration  
  2.ab database collection,schema, documents ===models
  3.database ke saath data store and fetch hone wali  

connection and configuration

models ke andar schema banai jati hai
schema is the visual representation of single object stored inside database
user=== id, email,password, phonenumber ===fields of infromations
ka datatype kya hai aur yeh format mai stored hai iski design hi schema design kaha jata hai
 
5. config
6. models

MVC model view controller---




----------------------------       NEXT LECTURE - SERVER.JS KA CONTENT    -------------------------------------
FOR THIS -- inside terminal 2 commmamds -- 
  1) npm init -y
  2) npm i mongoose express colors dotenv nodemon morgan

  browser -- client side ,
  nodejs --- server side  ,

Ques) what is console ?
console is the place where we can see output of the code !!!
browser console and system terminal 

ques) difference between browser console and system terminal ?
broewser console is the place where we can see output of the code inside any browser

and 

system terminal is the place where we can see output of the code inside any system
BROWSER KE ANDAR- CLIENT SIDE
SYSTEM KE ANDAR - SERVER SIDE


ques)difference between server and system ?

SERVER is the resources that is available in any region at any weather condition and at any point of time.JO  resources hmesha available rahengi 24/7 ,at any region or point

SYSTEM is the resource that is not following any such criteria -- jaise available rehna 24/7 , hmesha resources provide karwana, but behaviour same

server ==system== operating system !!

OPERATIING SYSTEM ----
1.OS
2.Webserver
3.web browser
4.web application
5.http modules
6.file system
7.routings 

server.js ==>  sab kuch agar isi file me kardu toh it is monolithic architechture (upar likhehuye saare kaam)

divide ==> distributive architechture

--------------------------------MODEL VIEW CONTROLLER (MVC)--------------
1.model - database
2.view - Frontend
3.Controller - backend

----------------------------------SYSTEM DESIGN ------------------
1.monolithic architechture
2.distributive architechture
3.Microservices 
4.scalability
5.load balancing
6.caching
7.routings


#----------http methods----------
1) get : any information that is served by the server to the frontend
2) post : any information taken from frontend by the server
3) put : any information updated by the server to the frontend
4) delete : any information deleted by the server to the frontend
5) patch : Specific information updated by the server to the frontend ,

Kisi bhi information ko :-
create => post
update => put & patch
delete => delete
read=> get 

browser perspective se saari baatein likhi gyi hai upar waali , read kon karna chahta hai----browser chahta hai

kahani browser end se hai poori story browser end se pado browser post krega tohh server get krega !!

-------------PROJECT-------------

Json file utility name ke folder me rkha and user data.json usko variable me store kia and usko userdata ko send kia and vo data mil gaya --!!!!

server kis tarah banate hai 
kis tarah launch krte hai 
port number kya hota hai 
http request kya hai 
get request kya hai 
req and res matlub ??? callback function kaha se use ho raha hai 
------------aaj ka project ye tha ki / Par userdata aa rha tha-------------------------


NODEJS is runtime environment 











