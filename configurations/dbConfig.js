require('dotenv').config(); // Load konfigurasi dari file.env
const { Sequelize } = require('sequelize');

// Membuat koneksi Sequelize ke database MySQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  logging: console.log,
});

// Menguji koneksi ke database
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = sequelize;