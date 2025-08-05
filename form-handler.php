<?php
// Form Handler for Portfolio Contact Form
// This script saves form submissions to an Excel file

// Set headers to prevent caching
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get form data
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validate required fields
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'All fields are required']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Create timestamp
$timestamp = date('Y-m-d H:i:s');

// Prepare CSV data (Excel can open CSV files)
$csvData = [
    'Timestamp' => $timestamp,
    'Name' => $name,
    'Email' => $email,
    'Message' => $message
];

// Define the Excel file path (adjust this path to your Mac's location)
$excelFile = '/Users/tanvisawant/Desktop/portfolio_contacts.csv';

// Create CSV content
$csvContent = '';
if (!file_exists($excelFile)) {
    // Create header row if file doesn't exist
    $csvContent = "Timestamp,Name,Email,Message\n";
}

// Add data row
$csvContent .= "\"$timestamp\",\"$name\",\"$email\",\"$message\"\n";

// Write to file
if (file_put_contents($excelFile, $csvContent, FILE_APPEND | LOCK_EX) !== false) {
    // Send success response
    echo json_encode([
        'success' => true, 
        'message' => 'Thank you! Your message has been saved to Excel file.',
        'file_path' => $excelFile
    ]);
} else {
    // Send error response
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Failed to save message. Please try again.',
        'file_path' => $excelFile
    ]);
}
?> 