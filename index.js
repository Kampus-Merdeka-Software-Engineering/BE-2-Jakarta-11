const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoute = require('./routes/contactRoute');
const db = require('./configurations/dbConfig');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/contact', contactRoute);

db.sync()
  .then(() => {
    console.log('Database synchronized successfully');
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch(error => {
    console.error('Error syncing database: ', error);
  });
