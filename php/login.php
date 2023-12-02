<?php
// login.php

// Include necessary configurations and database connections here

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Perform necessary validation and sanitation here

    // Sample MySQL prepared statement (make sure to set up your MySQL connection)
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
    $stmt->execute([$username, $password]);

    // Check if the user exists
    if ($stmt->rowCount() > 0) {
        echo "Login successful"; // Send response to the client
    } else {
        echo "Invalid username or password";
    }
} else {
    // Handle invalid requests
    http_response_code(400);
    echo "Invalid request";
}
?>
