// Methods

function greet(){
    return`Hello , I am ${person.name} ad I am ${person.age} years old`;

}

const person={
    name: "Addi",
    age: 20,
    greet,
};

console.log(person);
console.log(greet());
console.log(greet);

console.log(person.greet);
console.log(person.greet());

///methd 2 of creating method
const few ={
    name: "Shyam",
    age: 90,
    meet: function(){
        return`Hello , I am ${few.name} ad I am ${few.age} years old`;
        return`Hello , I am ${person.name} ad I am ${person.age} years old`;
    }
};

//console.log(meet);//will gie error now as the fuction is defined i the object 

console.log(few.meet());
console.log(few);


//JSOn to Stringify
const jjk = JSON.stringify(person);
console.log(jjk);
console.log(typeof jjk);
//JSON parse
console.log(JSON.parse(jjk));



//Time
console.log(Date ()); // give  curent time time 

//yesr, month, day, hours, minutes, seconds, miliseconds
const currentdate = new Date(2027,7,23,12,0,0,0);
console.log(currentdate);

const date = new Date ();
console.log(date);
console.log(typeof date);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());
console.log(typeof date.getFullYear());
console.log(typeof date.getMonth());
console.log(typeof date.getDay());
console.log(typeof date.getHours());
console.log(typeof date.getMinutes());
console.log(typeof date.getSeconds());
console.log(typeof date.getMilliseconds());
console.log(typeof date.toDateString());
console.log(typeof date.toISOString());
console.log(typeof date.toLocaleDateString());

//
date.setDate(date.getDate()+1);
console.log(date); //add 1 day
date.setDate(date.getDate()+34);
console.log(date);

date.setDate(26);//set the date as 26 of the same month
console.log(date);

date.setFullYear(2027,5,23); // set the date as 2027/5/23
console.log(date);


//Setting Interval
// function inter (){
//     console.log(`This fuction will be executed in every 2 seconds`),3000;
// }
// setInterval (inter ()); //not giving repeated response don't kow why

// setInterval(()=> console.log(`This fuction will be executed in every 2 seconds`),2000

// ) /// it's working

// setTimeout(function (){
//     console.log(`this function will be executed after 3 seconds`);
    
// },3000);

// const intervalId = setInterval(function(){
//  console.log(`THis is a repeated function`);
 
// },1000);

// console.log(intervalId);

// //sto interval after 10sec
// setTimeout(function(){
//     clearInterval(intervalId);
//     console.log(`Interval stopped`);
    
// },10000);


//Template strings or Te mplate Literals
    /* 
    A feature in javascript that allows you to create strings 
    with embdded expressions. They are denoted by backticks ``
    insteadof sinfle or double quotes. 
    */

console.log("This is \
    a new line a double quoted string ");

console.log(`this is 
    a example of 
    bcktick usage `);
console.log("2+2");
console.log(`${2+2}`);
console.log("${2+2}");
console.log(`${date}`);
console.log(typeof date);
console.log(typeof `${date}`);


//Arrow Function  or fat arrow function
    /* 
    concise and shorter way to define functions in Javascript
    They were introduced in ECMAScript 6 (ES6) and provide a more
    compact syntax compared to traditional functin expressions
    */

function nd (username){
    return `Hello ${username}`;
}
console.log(nd(2));

mj= (username) =>{
   return `Hello ${username}`;
}
console.log(mj("Bokachoda"));

lj= (username) => `Hello ${username}`; //can skip retur if the function iis of only one line 
console.log(lj(89)); 

pj= username => `Hello ${username}`;
console.log(pj(8));

// setTimeout(() =>{
//     console.log("Hello");
//     setTimeout(()=>{
//         console.log("Namaste");
//         setTimeout(()=>{
//             console.log("HII");
//             setTimeout(()=>{
//                 console.log("Bonjour");
//              },2000);
//         },2000);
//     },2000);
// },2000);



//Enhanced Object Literals
/*
    Set of enhancemets to the syntax for defining objects in 
    JavaScript. These enhancements make it more convenient 
    and concise to defie object properties and methods.
    introduce in ES6
*/

        //Examples
function kl(user,age,sex){
    return {
        name: user,
        age: age,
        sex: sex,
    };
}

console.log(kl("adi", 78,"Male"));

function ol(user,age,sex){
    return {
        user,
        age,
        sex,
    };
}
console.log(ol("Pankaj",89,"Male"));

function zl(user,age,sex){
    return {
        user,
        age,
        sex,
        intro: ()=> `My name is ${user},I am ${age} , I am a ${sex}`,
    };
}

let vibe =zl("Pankaj",89,"Male");
console.log(vibe.intro());


//ES6 way
 let lib ={
    sum: (a,b) =>a+b ,
    mult: (a,b) =>a*b, 
 }; 

 console.log(lib.sum(2,4));
 
 console.log(lib.mult(2,4));

//  let lib ={
//     sum: (a,b) => return a+b , // will give error
//     mult: (a,b) => return a*b, //will give error
//  }; 

//  console.log(lib.sum(2,4));
 
//  console.log(lib.mult(2,4));

//Another example
function getPersosnES6(name,age,height){
    return{
        name,age,height,
    };
}
  
console.log(getPersosnES6("An",56,178));


//Default Fuction Parameters
    /* Introduce in ES6, allow you to assign a default value 
    to a parameter when the argumet value is missing in the 
    time of call
    */

    //Examples
function ratings(rate){
    if (rate === 5){
        codsole.log(`High :)`);
    }
    else if (rate ===0){
        console.log(`low :(`);
        
    }
}

//ratings(); // will not give anythig

function ratingsDefault(rate=0){ //set the defalut value of rate as 0
    if (rate === 5){
        codsole.log(`High :)`);
    }
    else if (rate ===0){
        console.log(`low :(`);
        
    }
}

ratingsDefault(); // will give response considering input as default set value


///Spread Operator
    /* A new addition to the set of operators in JavaScript ES6
    It takes in a literable(e.g. an array) and expands it into 
    individual elements. The spead operator is commonly used 
    to make shllow copies of JS Objects.
    */
   //Example
function giveMe4(a,b,c,d){
    console.log("a",a);
    console.log("b",b);
    console.log("c",c);
    console.log("d",d);
}

const colors= ["blue","yellow","green","teal","white"];

giveMe4(colors); // will assign the whole array as the first argument
giveMe4(...colors); /// will spread the array and assign value for each arguement and leave the extra part of the array as not assiigned

const moreColors = ['black','brown'];
const allColors = [...colors , ...moreColors];
console.log(allColors);

//examples with object
const obj1 ={
    x :2, y:3,
};
const obj2 ={
    z:4,
};
const obj3 ={
    ...obj1,
    ...obj2,
};
console.log(obj3);

//Rest Parameter
    /*
    A function to accept an indefinite number of argumments
    */
//Exampple
function user(x,...userData){// rest paameter is added in the last argument otherwise it will give error 
    console.log(x);
    console.log(userData);  
}

user("Adi",23,567,"male",167);