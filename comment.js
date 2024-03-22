const http = require('http');

// Create web server for comment
const server = http.createServer((req, res) => {
  // Handle incoming requests here
});

const port = 3000; // Choose a port number

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
