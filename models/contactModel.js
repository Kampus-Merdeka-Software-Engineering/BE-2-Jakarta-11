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
      const values = [this.firstName, this.lastName, this.phoneNumber, this.email, this.subject, this.company, this.message];
      
      const [result] = await db.promise().execute(sql, values);
      return result;
    } catch (error) {
      console.error("Error in Contact save:", error); // Lebih baik logging error
      throw error; // Melempar error lebih lanjut untuk ditangani di lapisan atas
    }
  }
}

module.exports = Contact;
