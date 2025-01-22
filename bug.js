const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle requests
  // ...
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Incorrect way to handle errors
server.on('error', (err) => {
  console.error('Server error:', err);
});