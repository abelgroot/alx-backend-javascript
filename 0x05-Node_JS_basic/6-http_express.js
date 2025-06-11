const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port 1245');
});

module.exports = app;
