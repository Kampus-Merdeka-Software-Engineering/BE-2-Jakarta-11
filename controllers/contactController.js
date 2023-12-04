// ini contactController.js

const Contact = require('../models/contactModel');

exports.createContact = async (req, res) => {
    try {
        const newContact = await Contact.create(req.body);
        res.status(201).json(newContact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.findAll();
        res.status(200).json(contacts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
