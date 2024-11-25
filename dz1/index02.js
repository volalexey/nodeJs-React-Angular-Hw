const myfunclib = require('./myfunclib');

const http = require('http');

const server = http.createServer((req, res) => {
    console.log("URL: ", req.url);

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(`Sum of numbers: ${myfunclib.SumOfNumbers()}\nCount of numbers: ${myfunclib.CountOfNumbers()}\nSum of even numbers: ${myfunclib.SumOfEven()}`);
})

server.listen(3213, "127.0.0.1");

console.log("Server started on port 3213");