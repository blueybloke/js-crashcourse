// Logging
// alert('Hello World!') NOTE: alert blocks execution!
console.log('Hello world!'); //Logs to console.
console.error('This is an error message.'); //Error message
console.warn('This is a warning.'); //Warning message

// Variables
/*

Primitives: String, Number, Boolean, null, undefined
Assigned directly to memory.

*/

// var : globally scoped
var globalVar = 'Wow, a global variable.'
// let : block level scope, mutable
let score = 10;
// const : block level scope, immutable
// Always use const unless you know your going to reassign, in which case use let
const magicNum = 12;

// String : Can have single or double quotes (single default)
const name = 'John Smith';

const age = 30;
const rating = 4.5; // No float or double, just Number

const isCool = true;
const x = null; // Empty, no value

// Implicit und value
let z;

console.log(typeof name); // typeof returns type of the variable

// Concatenation (Old way)
console.log('My name is ' + name + ' and I am ' + age);

// Template Strings/Literals (Better way), use backticks
console.log(`My name is ${name} and I am ${age}`);

console.log(`My name is ${name.length} characters long!`);
