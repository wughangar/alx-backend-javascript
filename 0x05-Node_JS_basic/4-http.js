const http = require('http');

const app = http.createServer((req, res) => {
  res.setHeader(200, { 'Content-Type': 'text/plain' });

  res.end('Hello Holberton School!');
});

const port = 1245;
const hostname = '127.0.0.1';

app.listen(port, hostname);


module.exports = app;
