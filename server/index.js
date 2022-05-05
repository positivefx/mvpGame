const express = require('express');
const { getAllwords } = require('./dictionary.js');
const path = require('path');

const PORT = 3000;

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/twordle', (req, res) => {
  getAllwords()
  .then((data) => {
    res.status(200).send(data)
  })
  .catch((err) => {
    console.log(err, 'Err in Server GET')
  });
})

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});