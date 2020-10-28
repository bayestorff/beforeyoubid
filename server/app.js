const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

app.get('*', (req, res) => {
  return res.status(404).send({ message: 'Route not found' });
});

app.listen('4000');
console.log(
  `Listening on port: 4000, wait for the development server to be up...`
);
