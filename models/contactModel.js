const db = require('../configurations/dbConfig');

class Contact {
  constructor(contactData) {
    this.firstName = contactData.firstName;
    this.lastName = contactData.lastName;
    this.phoneNumber = contactData.phoneNumber;
    this.email = contactData.email;
    this.subject = contactData.subject;
    this.company = contactData.company;
    this.message = contactData.message;
  }

  async save() {
    try {
      const sql = `INSERT INTO contactme (firstName, lastName, phoneNumber, email, subject, company, message) VALUES (?, ?, ?, ?, ?, ?, ?)`;
      const result = await db.promise().execute(sql, [this.firstName, this.lastName, this.phoneNumber, this.email, this.subject, this.company, this.message]);
      return result; // Adjust according to how your database returns the saved data
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = Contact;
