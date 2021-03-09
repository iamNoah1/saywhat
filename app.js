const port = (process.env.PORT || 3000);
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  let responseMessage = process.env.RESPONSE_MESSAGE || "Default Response Message";
  res.send(responseMessage);
});

app.listen(port);