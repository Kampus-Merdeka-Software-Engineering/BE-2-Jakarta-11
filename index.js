const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to handle CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Adjust as needed
  res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());

// Storing user data in an array and maintaining a counter for ID
const users = [];
let userIdCounter = 1;

// Endpoint for handling form submission
app.post('/submit', (req, res) => {
  try {
    const userData = req.body;
    const id = userIdCounter++; // Assign an ID but don't send it back

    // Store with ID but send back data without ID
    users.push({ ID: id, ...userData });

    res.json({ message: 'Data successfully stored', data: userData });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to retrieve all user data in JSON array format
app.get('/users', (req, res) => {
  res.json(users);
});

// Main URL displaying all data in formatted JSON
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(users, null, 2)); // Formatting JSON output
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
