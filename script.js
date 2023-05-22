const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');

let isValid = false;

function validateForm() {
    // Use Constraint API
    isValid = form.checkValidity();
    // Style main error message
    message.textContent = 'Please fill out the form, moron.';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'red';
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
    
}

// Event Listener 
form.addEventListener('submit', processFormData);