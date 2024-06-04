document.getElementById('bookingForm').addEventListener('Book Appointment', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  // ... other form fields

  // Store data in local storage
  localStorage.setItem('bookingName', name);
  localStorage.setItem('bookingEmail', email);
  // ... store other form fields

  // You can optionally display a confirmation message
  alert('Booking information saved temporarily.');

  // Close the modal (if needed)
  $('#bookingModal').modal('hide');
});
