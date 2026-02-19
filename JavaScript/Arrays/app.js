//Arrays
//
//empty arays
const list= [];
console.log(list);

//number array
const bit =[1,2,34,5];
console.log(bit);

//string array
const hit =["vf", 'f',"hji"];
console.log(hit);

console.log(typeof hit);// object

console.log(hit[1]);//accessing array items

//nest array
const nestArray= [1,3, [34,4,5,7],67];
console.log(nestArray);
console.log(nestArray[2][0]);

//push
hit.push("Hello");
console.log(hit);

//pop
hit.pop();
console.log(hit);

//shift
hit.shift();
console.log(hit);

//unshift
hit.unshift(56);
console.log(hit);

//concat
const vi = bit.concat(hit);
console.log(vi)

//includes
console.log(hit.includes(56));

//join
console.log(hit.join("-"));

//slice
console.log(hit.slice(0,2));

console.log(hit);