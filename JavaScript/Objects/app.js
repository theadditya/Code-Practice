const person ={
    firstame: "Adi",
    lastName: "Bob",
    age: 20,
    location: ["Plaet","Earth"],
    isProgammer : true,
};

console.log(person);
console.log(person.length);//undefined


//Accessing object items
console.log(person.firstame);
//console.log(person[firstName]);//error
console.log(person['firstName']);//undefined error
console.log(person["firstame"]);

//changing
person.location= ['Newtown'];
console.log(person);


// adding new items 
person.color= "Black";
console.log(person);

//typeof
console.log(typeof person); //object

let arr = [3,6,89,3];
console.log(typeof arr); // object

