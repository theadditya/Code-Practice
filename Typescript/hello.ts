// function greet (name: string): string {
//     return `Hello, ${name}!`;
// }

// console.log(greet("World"));     
// Function with explicit parameter and return types
function greet(name: string): string {
return `Hello, ${name}!`;
}

// TypeScript will ensure you pass the correct argument type
greet("Alice"); // OK
greet(42);     // Error: Argument of type '42' is not assignable to parameter of type 'string'