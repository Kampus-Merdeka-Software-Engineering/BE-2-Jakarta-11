const Contact = require('../models/contactModel');

exports.createContact = async (req, res) => {
  try {
    const data = req.body;
    const contact = await Contact.create(data);
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
