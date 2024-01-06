const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// var corsOptions = {
//   origin: 'http://localhost:8081',
// };

app.use(cors());

// parse requess of content-type - application/json
app.use(bodyParser.json());

// parse
app.use(bodyParser.urlencoded({ extended: true }));

let responseData = { message: 'suck on it' };

// simple route
app.get('/', (req, res) => {
  res.json(responseData);
});

app.post('/', (req, res) => {
  console.log(req.body);
  const newMessage = req.body.message;
  console.log('STOP POSTING ME');
  responseData.message = newMessage;
  res.send('message updated successfully');
});

// set port, listn for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
