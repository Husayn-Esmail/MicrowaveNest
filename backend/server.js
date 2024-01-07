const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

// parse requess of content-type - application/json
app.use(bodyParser.json());

// parse
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./models');
db.sequelize.sync();

let responseData = { message: 'suck on it' };

// simple route
app.get('/', (req, res) => {
  res.json(responseData);
});

app.post('/', (req, res) => {
  const newMessage = req.body.newMessage;
  responseData.message = newMessage;
  res.send(responseData.message);
  console.log('Successfully posted');
});

// set port, listn for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
