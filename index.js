const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoute = require('./routes/contactRoute');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/contact', contactRoute); //Assuming your API route is /api/contact

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
