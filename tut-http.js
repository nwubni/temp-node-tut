const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/')
        res.end('Welcome to our website.');

    if (req.url === '/about')
        res.end('Welcome to our about page.');

    res.end(`<h1>Page not found.</h1>`);
});

server.listen(5000);