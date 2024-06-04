import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateService() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState({ name: '', description: '', price: 0 });

  useEffect(() => {
    fetch(`/api/services/${id}`)
      .then(res => res.json())
      .then(data => setService(data))
      .catch(error => alert('Error retrieving service: ' + error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedService = {
      name: service.name,
      description: service.description,
      price: parseFloat(service.price)
    };

    fetch(`/api/services/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedService)
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok.');
        }
        return res.json();
      })
      .then(() => navigate('/admin-dashboard')) // Redirect after success
      .catch(error => alert('Error updating service: ' + error));
  };

  return (
    
    <div className="container mt-4">
      <h1 className="display-4">Update Service</h1>

      <form id="updateServiceForm" onSubmit={handleSubmit} className="mt-4">
        {/* ... (input fields for name, description, price) ... */}
      </form>
    </div>
  );
}

export default UpdateService;
