const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle requests
  // ...
  res.end();
});

// Correct way to handle errors
const onError = (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('Port is already in use. Please choose a different port.');
    process.exit(1);
  } else {
    console.error('Server error:', err);
    process.exit(1);
  }
};

server.on('error', onError);

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});