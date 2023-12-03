exports.addContact = async (contactData) => {
  try {
    const contact = new Contact(contactData);
    const savedContact = await contact.save();
    return savedContact;
  } catch (error) {
    console.error("Error in addContact:", error); // Log error
    throw error; // Teruskan error
  }
};
