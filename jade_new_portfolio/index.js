document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send data to server-side script using AJAX (e.g., send_email.php)
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Handle the server's response (e.g., success or error messages)
            console.log(xhr.responseText);
        }
    };
    xhr.send(`name=${name}&email=${email}&message=${message}`);
});

// Add an event listener to the form
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // You can add code to handle the form data here
    
    // For example, you can collect form data and perform AJAX request to send it to a server-side script
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Perform further actions here, such as sending the data to a server using AJAX
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // You can now use the collected data for further processing, such as sending it to a server or displaying it on the page
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true); // Replace with the actual URL of your server-side script
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Handle the server's response
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Handle the response from the server (e.g., success or error messages)
            console.log(xhr.responseText);
        }
    };

    // Prepare the data to be sent
    const data = `name=${name}&email=${email}&message=${message}`;

    // Send the data to the server
    xhr.send(data);
});