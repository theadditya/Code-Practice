//when we ca;; the for each helper we pass in anonymous callback function,
//this function gets called one time for every element
//in the array, whatever is iside the function that logic happes


const colors =[1,2,3,4,"Addi"];

// for(var i=0;i<colors.length;i++){ //ES5 method
//     console.log(colors[i]);
    
// }

colors.forEach(color => console.log(color)); //callback 


const words =['hel','bird','table','football','pipe'];

 const capWords= words.forEach((word,index,arr)=>{
    arr[index]=word[0].toUpperCase()+word.substring(1);
});

console.log(words);


