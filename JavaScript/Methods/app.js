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
