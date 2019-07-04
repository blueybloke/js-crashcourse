
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit); //Adding a listener and naming a function for it to call

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please fill out all fields'

        //Make it disappear after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
        `${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
        console.log('success');
    }
}