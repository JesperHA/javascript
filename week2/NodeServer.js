const http = require('http');
const systemInfo = require('./Os-info')
const DosDetector = require('./dosDetector')

const dosDetector = new DosDetector(2000)

var clientIp

const server = http.createServer((req, res) => {
  
    if (req.url === '/api/os-info') {
    res.setHeader('Content-Type', 'application/json');
    dosDetector.addUrl(clientIp)

    console.log(clientIp)
    res.write("System info here \n" + JSON.stringify(systemInfo))
    
    return res.end();
  }


  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
  clientIp = sock.remoteAddress
  // You can get the client-IP in here, using sock.remoteAddress)
});
server.listen(3000);
console.log('listening on 3000');
//Register for the "DosDetected" event and console.log the url and time info.
