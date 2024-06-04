<?php
// Database connection details
$servername = "localhost:80,443";
$username = "EFerrycruse";
$password = "Ferrycruse@24";
$dbname = "booking_system";

// Create a new MySQL connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set the content type to JSON
header('Content-Type: application/json');

// Helper function to send a JSON response
function send_response($status, $message, $data = null) {
    echo json_encode(['status' => $status, 'message' => $message, 'data' => $data]);
    exit;
}

// Validate input data
function validate_input($data) {
    return htmlspecialchars(strip_tags($data));
}

// API endpoints

// Booking Form Submission
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['user_id']) && isset($_POST['service_id']) && isset($_POST['booking_date']) && isset($_POST['booking_time'])) {
    $user_id = validate_input($_POST['user_id']);
    $service_id = validate_input($_POST['service_id']);
    $booking_date = validate_input($_POST['booking_date']);
    $booking_time = validate_input($_POST['booking_time']);

    $stmt = $conn->prepare("INSERT INTO bookings (user_id, service_id, booking_date, booking_time) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("iiss", $user_id, $service_id, $booking_date, $booking_time);

    if ($stmt->execute()) {
        send_response("success", "Booking successful!");
    } else {
        send_response("error", "Error: " . $stmt->error);
    }

    $stmt->close();
}

// Retrieving Services
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['action']) && $_GET['action'] === 'get_services') {
    $sql = "SELECT * FROM services";
    $result = $conn->query($sql);

    $services = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $services[] = $row;
        }
    }

    send_response("success", "Services retrieved successfully", $services);
}

// Create a new Service
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'create_service' && isset($_POST['name']) && isset($_POST['description']) && isset($_POST['price'])) {
    $name = validate_input($_POST['name']);
    $description = validate_input($_POST['description']);
    $price = validate_input($_POST['price']);

    $stmt = $conn->prepare("INSERT INTO services (name, description, price) VALUES (?, ?, ?)");
    $stmt->bind_param("ssd", $name, $description, $price);

    if ($stmt->execute()) {
        send_response("success", "Service created successfully!");
    } else {
        send_response("error", "Error: " . $stmt->error);
    }

    $stmt->close();
}

// Updating a Service (for admins)
if ($_SERVER['REQUEST_METHOD'] === 'PUT' && isset($_GET['id']) && isset($_GET['name']) && isset($_GET['description']) && isset($_GET['price'])) {
    parse_str(file_get_contents("php://input"), $put_vars);

    $id = validate_input($_GET['id']);
    $name = validate_input($put_vars['name']);
    $description = validate_input($put_vars['description']);
    $price = validate_input($put_vars['price']);

    $stmt = $conn->prepare("UPDATE services SET name=?, description=?, price=? WHERE id=?");
    $stmt->bind_param("ssdi", $name, $description, $price, $id);

    if ($stmt->execute()) {
        send_response("success", "Service updated successfully!");
    } else {
        send_response("error", "Error: " . $stmt->error);
    }

    $stmt->close();
}

// Deleting a Service (for admins)
if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($_GET['id'])) {
    $id = validate_input($_GET['id']);

    $stmt = $conn->prepare("DELETE FROM services WHERE id=?");
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        send_response("success", "Service deleted successfully!");
    } else {
        send_response("error", "Error: " . $stmt->error);
    }

    $stmt->close();
}

$conn->close();

