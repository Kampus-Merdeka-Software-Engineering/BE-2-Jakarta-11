const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const contactRoute = require('./routes/contactRoute');
const db = require('./configurations/dbConfig');

const app = express();

// Menggunakan bodyParser untuk memproses data JSON
app.use(bodyParser.json());

// Konfigurasi CORS untuk mengizinkan permintaan dari frontend
const corsOptions = {
  origin: ['http://127.0.0.1:3001', 'https://kampus-merdeka-software-engineering.github.io'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
};
app.use(cors(corsOptions));

// Menghubungkan rute untuk '/contact'
app.use('/contact', contactRoute);

// Menginisialisasi koneksi database
db.connect((error) => {
  if (error) {
    console.error('Error connecting to the database: ', error);
    return;
  }
  console.log('Connected to the database successfully');
});

// Menentukan port untuk server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
