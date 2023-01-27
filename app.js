const port = (process.env.PORT || 3000);
const express = require('express');
const app = express();

const version = require('./package.json')

app.get('/hello', function (req, res) {
  console.log("entered endpoint")
  let responseMessage = (process.env.RESPONSE_MESSAGE || "Default Response Message") + " " + "v: " + version.version;
  res.send(responseMessage);
});

app.listen(port);