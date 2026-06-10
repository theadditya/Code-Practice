let element = document.querySelector("p");
// console.dir(element);
let node = element.childNodes[0];
let text= node.data;
console.dir(node);
console.dir(String);
setInterval(function(){
    text= text[text.length - 1]+text.substring(0,text.length-1);
    node.data= text;
},125)