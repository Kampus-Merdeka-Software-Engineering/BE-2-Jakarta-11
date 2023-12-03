// In services/contactService.js

exports.addContact = async (contactData) => {
  const contact = new Contact(contactData);
  const savedContact = await contact.save();
  return savedContact; // Ensure this returns the saved contact data
};
