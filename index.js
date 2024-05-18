//This module allows node to transfer data over the Hyper Text Transfer Protocol (HTTP) used by the internet.
const http = require('http'); //require keyword to include the http module,
const hostname = '127.0.0.1';//to define the location and port of the server
const port = 3000;
//npmcreating server objects using req res
const server = http.createServer((req, res) => { // req and res correspond to the request and response objects of the server communications.
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
  });
  //tell the server to listen for communications by calling listen method of the server object.
  // we are also passing it to the post and hostname we defined earlier.
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     //Sets the Content-Type header of the response to indicate that the content being sent is HTML.
//     res.setHeader('Content-Type', 'text/html');
//     //Writes HTML content to the response body, displaying a red "Hello World!" heading.
//     res.write('<h1 style="color: red">Hello World!</h1>');
//     res.write('<p>I wonder what else we can send...</p>');
//     // res.end();
//     //tell the server to listen for communications by calling listen method of the server object.
//     //   // we are also passing it to the post and hostname we defined earlier.
//     server.listen(port, hostname, () => {
//         console.log(`Server running at http://${hostname}:${port}/`);
//     });
// });