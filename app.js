const port = (process.env.PORT || 3000);
const express = require('express');
const app = express();

app.get('/hello', function (req, res) {
  console.log("entered endpoint")
  let responseMessage = process.env.RESPONSE_MESSAGE || "Default Response Message";
  res.send(responseMessage);
});

app.listen(port);