document.getElementById('registrationForm').addEventListener('submit', function(event)) {
  event.preventDefault();
  let isValid = true;
  let errorMessage = '';

  // Validate name
  const name = document.getElementById('name').value;
  if (!/^[a-zA-Z\s]+$/.test(name)) {
      isValid = false;
      errorMessage += 'Name must contain only letters and spaces.<br>';
  }

  // Validate email
  const email = document.getElementById('email').value;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      isValid = false;
      errorMessage += 'Invalid email format.<br>';
  }

  // Validate phone number
  const phone = document.getElementById('phone').value;
  if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
      isValid = false;
      errorMessage += 'Phone number must be in the format (123) 456-7890.<br>';
  }
  // Validate event date
    const eventDate = document.getElementById('eventDate').value;
    if (!/^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/.test(eventDate)) {
        isValid = false;
        errorMessage += 'Event date must be in the format MM/DD/YYYY.<br>';
    }
}
