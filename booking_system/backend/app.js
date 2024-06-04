const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());

// MySQL connection details
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'EFerrycruse',
  password: 'Ferrycruse@24',
  database: 'booking_system'
});

// API endpoints

// Booking Form Submission
app.post('/api/bookings', (req, res) => {
  const { user_id, service_id, booking_date, booking_time } = req.body;

  const query = 'INSERT INTO bookings (user_id, service_id, booking_date, booking_time) VALUES (?, ?, ?, ?)';
  const values = [user_id, service_id, booking_date, booking_time];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error booking appointment');
    } else {
      res.send('Booking successful!');
    }
  });
});

// Retrieving Services
app.get('/api/services', (req, res) => {
  const query = 'SELECT * FROM services';

  connection.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving services');
    } else {
      res.json(results);
    }
  });
});

// Creating a new Service (for admins)
app.post('/api/services', (req, res) => {
  const { name, description, price } = req.body;

  const query = 'INSERT INTO services (name, description, price) VALUES (?, ?, ?)';
  const values = [name, description, price];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating service');
    } else {
      res.send('Service created successfully!');
    }
  });
});

// Updating a Service (for admins)
app.put('/api/services/:id', (req, res) => {
  const serviceId = req.params.id;
  const { name, description, price } = req.body;

  const query = 'UPDATE services SET name = ?, description = ?, price = ? WHERE id = ?';
  const values = [name, description, price, serviceId];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating service');
    } else {
      res.send('Service updated successfully!');
    }
  });
});

// Deleting a Service (for admins)
app.delete('/api/services/:id', (req, res) => {
  const serviceId = req.params.id;

  const query = 'DELETE FROM services WHERE id = ?';
  const values = [serviceId];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting service');
    } else {
      res.send('Service deleted successfully!');
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});