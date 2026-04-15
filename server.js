const express = require('express');
const app = express();

// middleware to read form data
app.use(express.urlencoded({ extended: true }));

// serve frontend files
app.use(express.static('.'));

// handle form submission
app.post('/submit', (req, res) => {
    const { username, age, phone } = req.body;

    console.log("Received Data:");
    console.log("Name:", username);
    console.log("Age:", age);
    console.log("Phone:", phone);

    res.send("Form submitted successfully!");
});

// start server
app.listen(3000, '0.0.0.0', () => {
    console.log("Server running");
});