// DOM manipulation exercise

// The window object is the top level object that represents the browser and all possible methods.
// console.log(window);


// Single element selectors:
//const form = document.getElementById('my-form');

//Query select can be used for many things, like ids, tags, classes etc.
//console.log(document.querySelector('.container'));


// Mulitple element
//console.log(document.querySelectorAll('.item')); // Creates a 'node list' which is basically just an array

// Iterating over dom elements
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

//Removing elements
//ul.remove();
//ul.lastElementChild.remove();

//Editing textContent property
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello!</h1>';

// Events

const bnt = document.querySelector('.btn');

//Changing CSS
bnt.style.background = 'red';

// Adding event listeners
bnt.addEventListener('click', (e) => {
    e.preventDefault(); //Default behaviour of click event on buttons submits the form (refresh)
    console.log('click');
    
    //console.log(e.target.className); //Target refers to object/dom element that invoked the event

    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');

    ul.lastElementChild.innerHTML = '<h1>Goodbye!</h1>';

});