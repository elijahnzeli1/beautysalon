$(document).ready(function() {
  // Retrieve services and populate the table
  getServices();

  // Create Service
  $('#createServiceBtn').click(function() {
    window.location.href = 'create-service.html';
  });

  // Update Service
  $(document).on('click', '.updateServiceBtn', function() {
    const serviceId = $(this).data('id');
    window.location.href = `update-service.html?id=${serviceId}`;
  });

  // Delete Service
  $(document).on('click', '.deleteServiceBtn', function() {
    const serviceId = $(this).data('id');
    deleteService(serviceId);
  });
  
  
  function getServices() {
        fetch('/booking-system/backend/api.php?action=get_services')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(services => {
                const servicesTable = $('#servicesTable tbody');
                servicesTable.empty();
                services.forEach(service => {
                    servicesTable.append(`
                        <tr>
                            <td>${service.name}</td>
                            <td>${service.description}</td>
                            <td>${service.price}</td>
                            <td>
                                <button class="updateServiceBtn btn btn-primary" data-id="${service.id}">Update</button>
                                <button class="deleteServiceBtn btn btn-danger" data-id="${service.id}">Delete</button>
                            </td>
                        </tr>
                    `);
                });
            })
            .catch(error => displayErrorMessage('Error retrieving services: ' + error.message));
    }
  // Create Service
  function createService(name, description, price) {
    $.ajax({
      type: 'POST',
      url: '/booking-system/backend/api.php',
      data: { action: 'create_service', name, description, price },
      success: function(response) {
        alert(response);
        getServices();
      },
      error: function(xhr, status, error) {
        alert('Error creating service: ' + error);
      }
    });
  }

  // Update Service
  function updateService(serviceId, name, description, price) {
    $.ajax({
      type: 'PUT',
      url: `/booking-system/backend/api.php?id=${serviceId}`,
      data: { name, description, price },
      success: function(response) {
        alert(response);
        getServices();
      },
      error: function(xhr, status, error) {
        alert('Error updating service: ' + error);
      }
    });
  }

  // Delete Service
  function deleteService(serviceId) {
    $.ajax({
      type: 'DELETE',
      url: `/booking-system/backend/api.php?id=$${serviceId}`,
      success: function(response) {
        alert(response);
        getServices();
      },
      error: function(xhr, status, error) {
        alert('Error deleting service: ' + error);
      }
    });
  }
});