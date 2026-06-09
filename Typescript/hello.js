"use strict";
// function greet (name: string): string {
//     return `Hello, ${name}!`;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(greet("World"));     
// Function with explicit parameter and return types
function greet(name) {
    return `Hello, ${name}!`;
}
// TypeScript will ensure you pass the correct argument type
greet("Alice"); // OK
greet(42); // Error: Argument of type '42' is not assignable to parameter of type 'string'
//# sourceMappingURL=hello.js.map