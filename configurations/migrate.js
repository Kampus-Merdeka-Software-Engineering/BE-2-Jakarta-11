const connection = require('./dbConfig');

const sql = `CREATE TABLE IF NOT EXISTS contactme (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  phoneNumber VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

connection.query(sql, (error, result) => {
  if (error) throw error;
  console.log("Table created");
});
