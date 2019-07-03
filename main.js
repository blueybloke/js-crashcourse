// Logging
// alert('Hello World!') NOTE: alert blocks execution!
console.log('Hello world!'); //Logs to console.
console.error('This is an error message.'); //Error message
console.warn('This is a warning.'); //Warning message

// Variables
/* Multi-line comments

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

console.log(name.substring(0,4).toUpperCase());

const s = 'technology, computers, it, code';
console.log(s.split(', ')); // Splits into an array based on seperator, useful for writing to DB's

// Arrays, dynamic by default
const fruits = new Array('apples', 'oranges', 'pears', 10); // Arrays CAN HAVE DIFFERENT TYPES IN SAME ARRAY!
console.log(fruits, '\n', fruits[fruits.length - 1 ]);

// JS is not statically typed! Declarations can be implicit.
console.log(fruits[1]);
fruits[3] = 'grapes';
fruits.push('mangos'); // Add to end
fruits.unshift('strawberries'); // Adds to beginning
fruits.pop(); // Removes last from array
console.log(fruits);

console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));

// Object Literals (Key value pairs)
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

// Destructuring
// You can 'pull out' values from object literals, which will then be stored in a variable
const { lastName } = person;
console.log(lastName);

person.email = 'john@gmail.com';
console.log(person);

// Arrays of objects
const todos = [
    {
        id: 1,
        text: 'Take out the rubbish',
        isCompleted: false
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    }
];

console.log(todos[1].text);

// JSON
// JSON is basically the same format as an object literal, just with double quotes around keys

const todoJSON = JSON.stringify(todos);
console.log(todoJSON); // This would be done to serialize or send to a server.

// Loops

// For
for (let i = 0; i < 6; i++) {
    console.log(`For Loop Number: ${i}`);
}

for (let todo of todos) {
    console.log(`To do ID: ${todo.id}`);
}
// While
let i = 0;
while (i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

// Iterating with arrays

//Foreach iterates an array and can perform a function, useful with arrow functions(lambdas)
todos.forEach(function(todo) {
    console.log(todo.text);
});

// Map one array to another by iterating over the first one, with the option to use an 
// anonymous function to perform operations on each iteration. 
const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);

//Will return only elements where the condition is true.
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true; //Will only map 
});
   
console.log(todoCompleted);

// Conditionals

// Double == only matches value, not type
const a = '10';
if(a == 10) {
    console.log('a is ten');
}

// Tripe === is type safe, use this mostly
const b = 10;
if(b === 10) {
    console.log('b is ten');
} else if(x > 10) {
    console.log('b is greater than ten');
} else {
    console.log('b less than ten');
}

// Ternary operator ? (Think if this, THEN (?) that)
const color = b > 10 ? 'red' : 'blue';
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}