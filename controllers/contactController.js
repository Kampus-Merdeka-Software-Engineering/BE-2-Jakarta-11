exports.createContact = async (req, res) => {
  try {
    console.log("Received data:", req.body); // Log untuk debugging
    const data = req.body;
    const savedContact = await contactService.addContact(data);
    res.status(200).json({ message: 'Contact saved successfully', contact: savedContact });
  } catch (error) {
    console.error("Error in createContact:", error); // Log error
    res.status(500).send(error.message);
  }
};
