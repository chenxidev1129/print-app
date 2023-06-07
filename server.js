const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a route for the homepage
app.get('/print', (req, res) => {
    const name = req.body.name;
    const dyeLot = req.body.dyeLot;
    const rollNumber = req.body.rollNumber;
    const type = req.body.type;
    const soNumber = req.body.soNumber;
    const containerNumber = req.body.containerNumber;
    const linearFeet = req.body.linearFeet;

    res.sendFile(path.join(__dirname, 'public', 'print.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
