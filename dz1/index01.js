const mylib = require('./mylib');

const http = require('http');

const server = http.createServer((req, res) => {
    console.log("URL: ", req.url);

    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(mylib.CreateBody());
})

server.listen(3212, "127.0.0.1");

console.log("Server started on port 3212");