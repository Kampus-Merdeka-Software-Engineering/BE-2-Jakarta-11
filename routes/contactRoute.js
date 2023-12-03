const Contact = require('../models/contactModel');

exports.createContact = async (req, res) => {
  try {
    const data = req.body;
    await Contact.create(data);
    res.status(200).json({ message: 'Contact saved successfully' });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
