const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoute = require('./routes/contactRoute');
const db = require('./configurations/dbConfig');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/contact', contactRoute);

// Menentukan port untuk server
const PORT = process.env.PORT || 3000;

db.sync() // Mengeksekusi sinkronisasi model dengan database
  .then(() => {
    console.log('Database synchronized successfully');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error synchronizing database: ', error);
  });
