const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseFile = 'database.csv';
  countStudents(databaseFile)
    .then(() => {
      res.send('This is the list of our students:\n');
    })
    .catch((error) => {
      res.status(500).send(`Error: ${error.message}`);
    });
});

const port = 1245;

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}/`);
});

module.exports = app;
