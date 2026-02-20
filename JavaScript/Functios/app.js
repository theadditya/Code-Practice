//fuctio initialization
function greet(name){
    console.log(`Boolshit!  ${name} `);
    
};
let name = "Adi";
greet(name);
greet("Adi");

function add(x,y){
    return x*y;// will not show in terminal i call
}

add(10,20);// will not show in terminal 
console.log(add(10,20)); //  now showing in  terminal 

//function expression
const greetings = function (user)
{
    console.log(`hello ${user}`);
    
}

greetings("Jhon");


//callback Function 
// When we provide  a functio as a argument

function gh(fn){
    const value =10;
    fn (value);

}

gh(function (value){
    console.log(value*890);
    
})


//Scopes
/// --- Global Scope
/// --- Local Scope

for (let i= 0; i <5; i++){
    console.log(i);
}

console.log(i);
