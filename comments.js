// Create web server
// This is a simple server that receives a request and sends a response with the message "Hello World!"
// The server will listen on port 3000
// To run the server, run the command "node comments.js" in the terminal
// To test the server, open a browser and navigate to "http://localhost:3000"
// To stop the server, press Ctrl + C in the terminal

// Import the http module
const http = require("http");

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response status code
  res.statusCode = 200;

  // Set the response headers
  res.setHeader("Content-Type", "text/plain");

  // Set the response body
  res.end("Hello World!");
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

To run the server, open a terminal and run the following command:

```bash
node comments.js
```

You should see the message "Server running on http://localhost:3000" in the terminal, indicating that the server is running. You can now open a web browser and navigate to `http://localhost:3000` to see the "Hello World!" message.

To stop the server, press `Ctrl + C` in the terminal.

## Conclusion

In this article, we have learned how to create a simple web server using Node.js and the built-in `http` module. We have covered the basic concepts of web servers, requests, and responses, and created a simple server that listens on a specific port and responds with a message.

Node.js provides a powerful platform for building web servers and web applications. With its event-driven architecture and non-blocking I/O operations, Node.js is well-suited for handling a large number of concurrent connections efficiently.

In the next article, we will learn how to handle different types of requests, parse request data, and send responses with custom content types and status codes.

## References

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web)
- [Wikipedia - Web Server](https://en.wikipedia.org/wiki/Web_server)
- [Wikipedia - Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/H