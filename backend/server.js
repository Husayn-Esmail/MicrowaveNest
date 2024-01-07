const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

// parse requess of content-type - application/json
app.use(bodyParser.json());

// parse
app.use(bodyParser.urlencoded({ extended: false }));

const db = require('./models');
// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db.');
});

let responseData = { message: 'MicrowaveNest' };

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

require('./routes/buildings.routes.js')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
