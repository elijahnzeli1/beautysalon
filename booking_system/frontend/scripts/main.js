$(document).ready(function() {
    // Booking Form Submission
    $('#bookingForm').submit(function(event) {
      event.preventDefault();
  
      const formData = {
        user_id: $('#user_id').val(),
        service_id: $('#service_id').val(),
        booking_date: $('#booking_date').val(),
        booking_time: $('#booking_time').val()
      };
  
       // 1. Fetch Services Initially (and after updates)
  function fetchServices() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/services', // Update this URL
      success: function(services) {
        const servicesDropdown = $('#services'); // For booking form
        const serviceList = $('#serviceList');     // For admin management
        servicesDropdown.empty();
        serviceList.empty();
        services.forEach(service => {
          servicesDropdown.append(`<option value="${service.id}">${service.name}</option>`);
          serviceList.append(`
            <li data-service-id="${service.id}">
              ${service.name} 
              <button class="editService">Edit</button>
              <button class="deleteService">Delete</button>
            </li>
          `);
        });
      },
      error: function(xhr, status, error) {
        alert('Error retrieving services: ' + error);
      }
    });
  }
  fetchServices(); // Initial fetch on page load

  // 2. Handle Edit Service Click
  $('#serviceList').on('click', '.editService', function() {
    const serviceId = $(this).closest('li').data('service-id');
    // ... (code to fetch service details and populate an edit form)
  });

  // 3. Handle Delete Service Click
  $('#serviceList').on('click', '.deleteService', function() {
    const serviceId = $(this).closest('li').data('service-id');
    if (confirm('Are you sure you want to delete this service?')) {
      $.ajax({
        type: 'DELETE',
        url: `http://localhost:3000/api/services/${serviceId}`, // Update this URL
        success: function() {
          fetchServices(); // Refresh list after successful deletion
        },
        error: function() {
          alert('Error deleting service.');
        }
      });
    }
  });

  // 4. Handle Add Service Form
$('#addServiceForm').submit(function(event) {
  event.preventDefault();
  const formData = {
    name: $('#serviceName').val(),
    description: $('#serviceDescription').val(),
    // Add other fields as needed (price, duration, etc.)
  };

  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/services', // Update this URL
    data: JSON.stringify(formData),
    contentType: 'application/json',
    success: function(response) {
      alert('Service added successfully!');
      $('#addServiceForm')[0].reset();  // Clear the form
      fetchServices();  // Refresh the list
    },
    error: function(xhr, status, error) {
      alert('Error adding service: ' + error);
    }
  });
});

// 5. Handle Edit Service Form Submission
$('#editServiceForm').submit(function(event) {
  event.preventDefault();
  const serviceId = $('#serviceId').val(); // Get the ID from the hidden field
  const formData = {
    name: $('#editServiceName').val(),
    description: $('#editServiceDescription').val(),
    // ... other fields from the edit form
  };

  $.ajax({
    type: 'PUT',
    url: `http://localhost:3000/api/services/${serviceId}`, // Update this URL
    data: JSON.stringify(formData),
    contentType: 'application/json',
    success: function(response) {
      alert('Service updated successfully!');
      $('#editServiceModal').modal('hide'); // Close the modal (if using one)
      fetchServices();  // Refresh the list
    },
    error: function(xhr, status, error) {
      alert('Error updating service: ' + error);
    }
  });
});
});
});