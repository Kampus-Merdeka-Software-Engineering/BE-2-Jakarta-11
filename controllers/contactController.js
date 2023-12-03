// In controllers/contactController.js

exports.createContact = async (req, res) => {
  try {
    const data = req.body;
    const savedContact = await contactService.addContact(data);
    res.status(200).json({ message: 'Contact saved successfully', contact: savedContact });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
