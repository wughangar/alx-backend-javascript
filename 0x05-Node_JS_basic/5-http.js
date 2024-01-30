const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    const databaseFile = 'your_database.csv';
    readDatabaseFile(databaseFile, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error\n');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students:\n${data}`);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}/`);
});

function readDatabaseFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      const lines = data.split('\n').filter(line => line.trim() !== '');
      const studentsList = lines.map(line => line.split(',')[0]).join(', ');
      callback(null, studentsList);
    }
  });
}

module.exports = app;
