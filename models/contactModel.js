const { DataTypes } = require('sequelize');
const sequelize = require('../configurations/dbConfig');

const Contact = sequelize.define('infocontact', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: true, //Aktifkan timestamps
  createdAt: 'created_at', // Ganti nama kolom createdAt menjadi created_at
  updatedAt: 'updated_at', // Ganti nama kolom updatedAt menjadi updated_at
});

Contact.sync({ force: false }) // Ubah force menjadi false
  .then(() => {
    console.log('Table created');
  })
  .catch((error) => {
    console.error('Error creating table:', error);
  });


module.exports = Contact;
