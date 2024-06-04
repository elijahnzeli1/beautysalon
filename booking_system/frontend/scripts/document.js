document.getElementById('bookNowButton').addEventListener('click', function() {
  //Close the modal
  $('#signatureFacialModal').modal('hide');
  //Trigger the booking modal (assuming you have a separate booking modal)
  $('#bookingModal').modal('show'); 
  //You might want to pre-fill some fields in the booking modal with "Signature Facial"
});
