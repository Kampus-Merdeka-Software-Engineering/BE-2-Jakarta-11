const Contact = require('../models/contactModel');

// Fungsi untuk membuat kontak baru
exports.createContact = async (req, res) => {
    try {
        // Membuat kontak baru menggunakan model Contact
        const newContact = await Contact.create(req.body);
        res.status(201).json(newContact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Fungsi untuk mendapatkan semua kontak
exports.getAllContacts = async (req, res) => {
    try {
        // Mendapatkan semua kontak dari model Contact
        const contacts = await Contact.findAll();
        res.status(200).json(contacts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
