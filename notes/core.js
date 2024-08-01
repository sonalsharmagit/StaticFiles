// var a=5;
// function abc()
// {
//     console.log(a); 
// }
// abc(); 
// var a function ke andar ghus gaya
//this concept is of function closure


//---FUNCTION CLOSURE -----------
function outer()
{
    let a=8;
    function inner() {
        console.log(a);
    }
    inner();
}
outer();

var b = 7; //bahar waale var ne dekh lia andar already hai to vo isliye andar gaya nhi
function inner(){
    console.log(b);
    var b =4;
}
inner();

//NOW --------
// var c = ()=>
// {
//     console.log("hello")
// }
// c();


a();
function a(){
    console.log("hello world");
}

//CALLBACK ---

//koi bhi sum ko call nahi krega na hi sub ko call karenge toh calculator ko
const calculator =(a,b,operation)=>{
    return operation(a,b);
}

// const sum=(a,b)=>{
//     return a+b;
// }

// const sub=(a,b)=>{
//     return a-b;
// }

// console.log(calculator(3,5,sum)); //this is call back
console.log(calculator(3,5,(a,b)=>{
    return a+b;
})); 
console.log(calculator(4,2,(a,b)=>{
    return a-b;
})); 
