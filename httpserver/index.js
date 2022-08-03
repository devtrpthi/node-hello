const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
    res.end('hello from the other side- Adele');
    } else if(req.url === '/about') {
        res.end('hello from the about');
    } else if(req.url === '/contact'){
        res.end('hello from the contact');
    }
});

server.listen(8000,'127.0.0.1', () => {
    console.log('listening to the port number 8000')
});