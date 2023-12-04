const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoute = require('./routes/contactRoute');

const app = express();

const corsOptions = {
  origin: 'https://kampus-merdeka-software-engineering.github.io',
  methods: 'GET,POST',
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/api/contact', contactRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
