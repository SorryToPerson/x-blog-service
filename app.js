const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./src/router');
const { repool } = require('./src/db');
const app = express();

const PORT = 3000;

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(cors())
  .use(router);

repool();

app.listen(PORT, () => {
  console.info(`==> 🍺  app server running at localhost: ${PORT}`);
});
