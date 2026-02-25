// The "reducer" method executes a reducer function for array element.
// The "reducer" method returns a single value: the function's accumulated result.
// The "reducer" method does not execute the function for empty array elements.
// The "reducer" method does not change the original array.

// array.reducer(function(total, currentValue, currentIndex, arr), initialValue) 

const numbers = [1,2,3,4,5]
const sum = numbers.reduce((p,c) => {
    console.log(`Previous ${p}`);
    console.log(`Current ${c}`);
    return p+c;
},0)

console.log(sum);


// const peoples = [{
//     name:"Addiyua",
//     age: 19,
// },
// {
//     name:"Add",
//     age: 13,
// },
// {
//     name:"Addi ghj",
//     age: 33,
// },
// ];

// const oldestPerson = peoples.reduce((p,c)=> (c.age >p.age ?  c.name :p),0);
// console.log(oldestPerson);


