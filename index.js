const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoute = require('./routes/contactRoute');

const app = express();

// Set konfigurasi CORS
const corsOptions = {
  origin: 'https://kampus-merdeka-software-engineering.github.io', // Ganti dengan URL front end Anda
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Mengizinkan pengiriman cookie melalui CORS
  optionsSuccessStatus: 204, // Memberikan status 204 untuk metode OPTIONS
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api/contact', contactRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
