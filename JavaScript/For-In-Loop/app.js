//For...In loop
/*
 use too iterate over the enumerable properties of an object.
 It is way to lop throug the keys (property names) of an object.
*/


//for (let key in object) {...}

let person= {
    name:"Adi",
    age:20,
    gender:"Male",
};

for (let keys in person){
    console.log(keys,person[keys]);
    
}
let i=1;
let list =[1,2,3,4]
for (let index in list){
    console.log(`${index}:${list[index]}`);
    console.log(typeof list[index]);
    i++;
    console.log(i);
    
    
}

const obj ={a:45,b:56,c:467,};
for (const properties in obj)[
    console.log(properties , obj[properties]),
    
]