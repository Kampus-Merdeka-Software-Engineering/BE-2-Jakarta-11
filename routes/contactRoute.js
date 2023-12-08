const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Menetapkan rute untuk membuat kontak baru dan mendapatkan semua kontak
router.post('/submit', contactController.createContact);
router.get('/getAll', contactController.getAllContacts);

module.exports = router;
