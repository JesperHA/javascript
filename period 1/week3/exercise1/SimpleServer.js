const securerandoms = require('./exercise1')

const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/api/securerandoms') {

    res.setHeader('Content-Type', 'application/json');
    securerandoms([48,40,32,24,16,8])
    .then(function(response){
        console.log("Promise: \n" + JSON.stringify(response) + "\n")
        res.write(JSON.stringify(response))
        return res.end();
    })
    


    //Return a response with OS-info, using the code implemented in part-a

  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/securerandoms</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
});
server.listen(3000);
console.log('listening on 3000');
//Register for the "DosDetected" event and console.log the url and time info.