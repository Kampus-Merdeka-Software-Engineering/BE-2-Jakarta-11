const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoute = require('./routes/contactRoute');

const app = express();

// Middleware untuk menangani CORS
app.use(cors({
  origin: 'https://kampus-merdeka-software-engineering.github.io', // Sesuaikan dengan origin frontend Anda
  credentials: true,
}));

// Middleware untuk mengurai body permintaan menjadi objek JSON
app.use(bodyParser.json());

// Gunakan route yang telah didefinisikan
app.use('/api/contact', contactRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
