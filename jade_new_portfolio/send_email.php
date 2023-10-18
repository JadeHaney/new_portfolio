<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set recipient email address
    $to = "jadehaney.business@gmail.com";

    // Set email subject
    $subject = "Contact Us Form Submission";

    // Compose the email message
    $messageBody = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Additional email headers
    $headers = "From: $email";

    // Send the email
    mail($to, $subject, $messageBody, $headers);

    // You can add additional logic here, such as sending a response back to the client
    echo "Email sent successfully!";
}
?>