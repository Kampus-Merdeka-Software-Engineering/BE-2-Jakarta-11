const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://magenta-rose-raven-hat.cyclic.app/'); // Sesuaikan dengan origin yang benar
  res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());

const users = [];

app.post('/submit', (req, res) => {
  try {
    const userData = req.body;
    users.push(userData);
    res.json({ message: 'Data berhasil disimpan', data: userData });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/users', (req, res) => {
  res.json({ users });
});

app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
