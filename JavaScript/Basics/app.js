console.log("Hello! ");
//alert("Something Bizzare!");
console.log(2*2);
console.warn('Butter');
console.table({Hero:"Me", Zero:"You"});
// console.clear();
//log--console.log();
// (reserved keyword) (variable name) (type of value)

//declared variable
let name1;

//assign value
let water= "20Water"
name1= "Padding";
console.log(name1);
console.log(water);
name1= "MKO";
console.log(name1);
const bobo = "k";
console.log(bobo);

// bobo="l";
// console.log(bobo);  ---will give error 

// const bon ;  ---will give error

var vf;
vf= 2;
console.log(vf);
vf=3;
console.log(vf);
let yf = 4;
console.log(yf);
console.log(typeof vf);
console.log(typeof yf);
console.log(++yf);
console.log(yf++);
console.log(yf);

console.log(yf ** vf); //wiill run perfectly
console.group(2**5);

//Booleans
//falsy values
//false
//ull
//undefined
//0
//-0// NaN
//'', "", ``, (empty quotes)

let notDefined = undefined;
console.log(notDefined);
console.log(2+ undefined);// output --- NaN
 

// comparison operator
//    relatioal operator    
//    >, <, >=, <= 
console.log(10>10);
//    Equalty operators
// === strict equality (type+vaue)
// === strict non-equality (tye+ value)
// == loose equaity (value)
// != loose on-equality (value)

console.log(10 === '10');
console.log(10 == '10');
console.log(10 !== "10");
console.log(10 !== 10);
console.log(10 != "10");


//Strrings
let go ="Hello";
let no ='Hello';
let fo = `Hello`;
console.log(go);
console.log(no);
console.log(fo);
let gofono= go + " "+ fo +" "+ no;
console.log(gofono);

//1. Cconcatenation
let gofo = go.concat(fo);
console.log(gofo);//HelloHello

let gonofo= go.concat(fo).concat(no);
console.log(gonofo);//HelloHelloHello

//2. Append
go += " World!"
fo = fo +" World!"
console.log(go);
console.log(fo);

//3. Legth 
console.log(go.length);

//4.Cases
console.log(go);
console.log(go.toUpperCase());
console.log(go.toLowerCase());

//5.Slice
console.log(go.slice(0,5));


//6.Split & Join
console.log(go.split(""));
console.log(go.split(" "));
console.log(go.split(" ").join(""));
console.log(go.split(" ").join(" "));

//7.Includes
console.log(go.includes('Z'));
console.log(go.includes('H'));
console.log(gofono.trim());

//8.Backticks
let backt=`hello There !
its Me Adiitya...
hoping you are doing great...;)`
console.log(backt);

let biuy= ` ${go}, ${fo}, Hello There`
console.log(biuy);

///Tpe Conversion
let g = "69";

//convert string to umber
g= parseInt(g);
console.log(g);
console.log(typeof g);

 
// number to string 
g=  g.toString();
console.log(g);
console.log(typeof g);



///Cotrol FLow
//If Else is same as C++
//switch is same as C++
//for loop is same as C++
//while loop is same as C++
// do whille loop is same as C++



















