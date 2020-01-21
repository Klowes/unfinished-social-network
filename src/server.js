

var Server = require('./bitbook-server');
const log = (arguments) => console.log(arguments);
const logHandler = (label) => [label, () => log(label)];

const port = 8000, 
  hostname = "localhost", 
  onlistening = () => {
    log('onlistening');
  }

var server = new Server({
  udp: true, // enable udp server? [default=true]
  http: true, // enable http server? [default=true]
  ws: true, // enable websocket server? [default=true]
  stats: true, // enable web-based statistics? [default=true]
  filter: function (infoHash, params, cb) {
    // Blacklist/whitelist function for allowing/disallowing torrents. If this option is
    // omitted, all torrents are allowed. It is possible to interface with a database or
    // external system before deciding to allow/deny, because this function is async.

    // It is possible to block by peer id (whitelisting torrent clients) or by secret
    // key (private trackers). Full access to the original HTTP/UDP request parameters
    // are available in `params`.
    cb(null);
  }
})

// Internal http, udp, and websocket servers exposed as public properties.
server.http
server.udp
server.ws

server.on(...logHandler('error'))

server.on(...logHandler('warning'))

server.on('listening', function () {
  // fired when all requested servers are listening
  console.log('listening on http port:' + server.http.address().port)
  console.log('listening on udp port:' + server.udp.address().port)
  console.log('listening on ws port:' + server.ws.address().port);
})

// start tracker server listening! Use 0 to listen on a random free port.
server.listen(port, hostname, onlistening)

// listen for individual tracker messages from peers:
server.on(...logHandler('start'))

server.on(...logHandler('complete'))
server.on(...logHandler('update'))
server.on(...logHandler('stop'))

// get info hashes for all torrents in the tracker server
