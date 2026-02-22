//map() method
/*
CCreates a new array populated with the results of 
calling a provided functins on every element in the callig array.

*/
 let numbers =[1,2,3,4,5];
 let double = numbers.map(num=>num*2);
console.log(double);


let peoples=[
    {firstname:"abhd",lastname:"bnvh",},
    {firstname:"abhdvbh",lastname:"bnvhbnh",},
    {firstname:"abhdfd",lastname:"bnvhhdh",},
];

const results=peoples.map(person=>{
    return [person.firstname,person.lastnameame];
})

console.log(results);
