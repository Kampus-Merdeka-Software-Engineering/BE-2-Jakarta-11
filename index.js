const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoute = require('./routes/contactRoute');

const app = express();

// Middleware untuk menangani CORS
const allowedOrigins = ['https://kampus-merdeka-software-engineering.github.io', 'http://localhost:3001'];
app.use(cors({
  origin: function (origin, callback) {
    // Periksa apakah asal ada dalam daftar yang diizinkan, atau jika tidak ada asal yang diberikan (misalnya, permintaan lokal)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Izinkan pengiriman kredensial (contoh: token otentikasi)
}));

// Middleware untuk mengurai body permintaan menjadi objek JSON
app.use(bodyParser.json());

// Gunakan route yang telah didefinisikan
app.use('/api/contact', contactRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
