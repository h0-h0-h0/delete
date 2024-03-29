const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.post('/delete', (req, res) => {
  console.log(`DELETE received at http://localhost:${port}`);
  res.sendFile(resolve(__dirname, 'pages/delete.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
