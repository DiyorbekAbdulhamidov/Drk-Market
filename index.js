const http = require('http');

const server = http.createServer((request, response) => {
  // request bu serverga so`rov;
  // response bu server javobi;

  console.log(request.url);

  response.write("Hello World!");
  response.end();
});

server.listen(3000, () => {
  console.log('Server has been started on port 3000');
});