const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware untuk menangani CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://magenta-rose-raven-hat.cyclic.app/'); // Ganti '*' dengan origin yang benar jika Anda tahu originnya.
  res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Middleware untuk menghandle data JSON
app.use(bodyParser.json());

// Simpan data pengguna dalam bentuk array (sebagai contoh)
const users = [];

// Endpoint untuk menangani form submit
app.post('/submit', (req, res) => {
  try {
    const userData = req.body;

    // Tambahkan data pengguna ke dalam array
    users.push(userData);

    console.log('Data berhasil disimpan:', userData);

    // Kirim respons dengan data yang berhasil disimpan
    res.json({ message: 'Data berhasil disimpan', data: userData });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint untuk mendapatkan semua data pengguna
app.get('/users', (req, res) => {
  res.json({ users });
});

// Route handling untuk URL utama, menampilkan semua data yang disubmit
app.get('/', (req, res) => {
    let htmlContent = '<h1>All Submitted Data</h1>';
    users.forEach(user => {
        htmlContent += `
            <div>
                <p>First Name: ${user.fname}</p>
                <p>Last Name: ${user.lname}</p>
                <p>Contact Number: ${user.phone}</p>
                <p>Email: ${user.email}</p>
                <p>Subject: ${user.subject}</p>
                <p>Company Name: ${user.company}</p>
                <p>Message: ${user.message}</p>
            </div>
            <hr/>
        `;
    });
    res.send(htmlContent);
});

// Jalankan server pada port tertentu
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
