const http = require ('http');
const fs = require ('fs');
const url = require ('url');

const port = 8080;
const host = '127.0.0.1';

const server = http.createServer((request, response) => {
    const base = url.parse(request.url);
    console.log(base);
    fs.readFile('./assets/index.html', (error, html) => {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(`<script>alert('Test Node');</script>`)
            response.write(html);
            response.end();
    })
})

server.listen(port,host,() => {
    console.log('ready');
})
