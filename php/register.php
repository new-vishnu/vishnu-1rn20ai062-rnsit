<?php
// register.php

// Include necessary configurations and database connections here

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $usn = $_POST["usn"];
    $age = $_POST["age"];
    $dob = $_POST["dob"];
    $contact = $_POST["contact"];

    // Perform necessary validation and sanitation here

    // Sample MySQL prepared statement (make sure to set up your MySQL connection)
    $stmt = $pdo->prepare("INSERT INTO users (name, usn, age, dob, contact) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([$name, $usn, $age, $dob, $contact]);

    // Sample MongoDB insert (make sure to set up your MongoDB connection)
    // $mongodb->users->insertOne(["name" => $name, "usn" => $usn, "age" => $age, "dob" => $dob, "contact" => $contact]);

    echo "Registration successful"; // Send response to the client
} else {
    // Handle invalid requests
    http_response_code(400);
    echo "Invalid request";
}
?>
