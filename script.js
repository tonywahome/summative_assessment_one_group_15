// Get form elements
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const eventDateInput = document.getElementById('eventDate');
const ticketsInput = document.getElementById('tickets');

// Regular expressions for validation
const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const phoneRegex = /^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
const eventDateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;

// Function to validate form input
function validateForm() {
  // Reset error messages
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const eventDateError = document.getElementById('eventDateError');
  const ticketsError = document.getElementById('ticketsError');

  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';
  eventDateError.textContent = '';
  ticketsError.textContent = '';

  // Validate name input
  if (!nameRegex.test(nameInput.value)) {
    nameError.textContent = 'Please enter a valid name (letters and spaces only).';
    nameInput.focus();
    return false;
  }

  // Validate email input
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address.';
    emailInput.focus();
    return false;
  }

  // Validate phone input
  if (!phoneRegex.test(phoneInput.value)) {
    phoneError.textContent = 'Please enter a valid phone number (###) ###-####).';
    phoneInput.focus();
    return false;
  }

  // Validate event date input
  if (!eventDateRegex.test(eventDateInput.value)) {
    eventDateError.textContent = 'Please enter a valid event date (MM/DD/YYYY).';
    eventDateInput.focus();
    return false;
  }

  // Validate tickets input
  if (ticketsInput.value < 1 || ticketsInput.value > 10) {
    ticketsError.textContent = 'Please enter a number of tickets between 1 and 10.';
    ticketsInput.focus();
    return false;
  }

  // If all inputs are valid, submit the form
  return true;
}

// Add event listener to form
form.addEventListener('submit', (event) => {
  if (!validateForm()) {
    event.preventDefault();
  }
});
