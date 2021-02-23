const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT;

app.get('/', (req, res) => {
  res.send('Home page: "/"');
});

app.get('/help', (req, res) => {
  res.send('Help page: "/help"');
});

app.get('/contact', (req, res) => {
  res.send('Contact page: "/contact"');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});

// push 6