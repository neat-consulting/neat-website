const express = require('express');
const app = express();

app.use(express.static('src'));
app.use(express.static('dist'));

app.listen(3000, function () {
  console.log('Listening on 3000');
});
