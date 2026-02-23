/* allows you to create new array containing elements that pass
 a certain condition. It Prrovides a clea and concise way to filter 
 out elements from an array basedd on a specifie citeria
*/

const songs = [
  { name: "Lucky You", duration: 4.34 },
  { name: "Just Like You", duration: 3.23 },
  { name: "The Search", duration: 2.33 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];

console.log(songs.filter((song) => song.duration>3));


const computers = [
  { ram: 4, hdd: 100 },
  { ram: 8, hdd: 200 },
  { ram: 16, hdd: 300 },
  { ram: 32, hdd: 400 },
];

console.log(computers.filter((com) => com.ram >16  ));
console.log(computers.filter((com) => com.ram <16  ));


// 1. Iterate over "ages" array
// 2. Print only adults, those whos age is greater then 18
const ages = [32,33,44,56,19,117,15,4,33,18];

console.log(ages.filter((age => age >18)));
console.log(ages.filter((age => age <18)));

// 2. Print only those words which length is greater then 6

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
  "hender"
];

console.log(words.filter(word => word.length>6));
console.log(words.filter(word => word.length<=6));