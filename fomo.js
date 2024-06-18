// Get the form elements
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const eventDateInput = document.getElementById('eventDate');
const ticketsInput = document.getElementById('numberoftickets');

// Add event listener to the form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting

  // Validate the form fields
  if (!validateName(nameInput.value)) {
    alert('Invalid name. Please enter a name with letters and spaces only.');
    return;
  }

  if (!validateEmail(emailInput.value)) {
    alert('Invalid email. Please enter a valid email address.');
    return;
  }

  if (!validatePhone(phoneInput.value)) {
    alert('Invalid phone number. Please enter a phone number in the format (123) 456-7890.');
    return;
  }

  if (!validateEventDate(eventDateInput.value)) {
    alert('Invalid event date. Please enter a valid date in MM/DD/YYYY format.');
    return;
  }

  if (!validateTickets(ticketsInput.value)) {
    alert('Invalid number of tickets. Please enter a number between 1 and 10.');
    return;
  }

  // If all fields are valid, submit the form
  form.submit();
});

// Validation functions
function validateName(name) {
  return /^[a-zA-Z\s]+$/.test(name);
}

function validateEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function validatePhone(phone) {
  return /^\(\d{3}\) \d{3}-\d{4}$/.test(phone);
}

function validateEventDate(date) {
  const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/[0-9]{4}$/;
  return dateRegex.test(date);
}

function validateTickets(tickets) {
  return tickets >= 1 && tickets <= 10;
}
