// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data from the client-side
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (CSS, client-side JS)
app.use(express.static('public'));

// Handle form submission from contact page
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Log form data to the console (for development purposes)
    console.log('Form Submission:', { name, email, message });

    // Send a success response to the client
    res.status(200).json({ message: 'Form submitted successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
