const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysql-237bc545-hilmanfatoni8-8cf9.a.aivencloud.com',
  user: 'avnadmin',
  password: 'AVNS_7fZ53zIaJueYDEM2oNF',
  database: 'JavaJoya_database',
  port: 23928
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
