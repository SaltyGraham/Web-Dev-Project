// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize the Express application
const app = express();
const PORT = 3000;  // Set the port for the server

// Middleware to parse JSON data from the client-side
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JavaScript) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    // Destructure form data from the request body
    const { name, email, message } = req.body;

    // Debug: Log the received form data to the console
    console.log('Form Submission:', { name, email, message });

    // Send a success response back to the client
    res.status(200).json({ message: 'Form submitted successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
