/* The find() method is another built-in array helper in JavaScript that 
allows you to find the first element in an array that matches 
a specific condition. It returns the value of the first element 
that satisfies the given testing function, 
or undefined if no element is found.
*/

const peoples = [
  { name: "huxn", age: 17 },
  { name: "john", age: 18 },
  { name: "alex", age: 20 },
  { name: "jimmy", age: 30 },
  { name: "alex", age: 30 },
];

console.log(peoples.find(people => people.name === "alex"));

const posts = [
  { id: 1, content: "Good Post" },
  { id: 1, content: "funny Post" },
  { id: 1, content: "sad Post" },
];

console.log(posts.find(post => post.content==="funny Post"));


// -------------------------------
// 1. Iterate over "ages" array
// 2. Print only those ages which is greater then 18
const ages =[2,3,56,76,18,19]
console.log(ages.find(age => age>18));
