let bob= document.querySelector("h1");
console.dir(bob);
// bob.innerHTML = 'I Love You ';  
bob.outerText = 'I love You so much'
let a =document.querySelector("a");
a.innerText= "Portfolio"
a.setAttribute("href","https://theadditya.github.io/Portfolio");
h2= document.createElement("h2")
h2.innerText= "I Love you so so so much"
document.body.append(h2);