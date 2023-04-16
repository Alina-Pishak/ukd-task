
const http = require('http')
const hostname = 'localhost';
const port = 3000;
const fs = require('fs')

const server = http.createServer((req, res) => {
        fs.readFile('index.html', (err, data) => {
          res.writeHead(200, {'Content-Type': "text/html"})
          res.end(data)
        })
        
})
server.listen(port, hostname, ()=>{
    console.log('running')
})
