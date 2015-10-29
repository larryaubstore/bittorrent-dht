//var DHT    = require('bittorrent-dht')
var DHT    = require('./index');
var magnet = require('magnet-uri');

var uri = 'magnet:?xt=urn:btih:e3811b9539cacff680e418124272177c47477157';
var parsed = magnet(uri);

console.log(parsed.infoHash); // 'e3811b9539cacff680e418124272177c47477157'

var dht = new DHT();

dht.listen(20000, function () {
  console.log('now listening')
});

dht.on('ready', function () {
  // DHT is ready to use (i.e. the routing table contains at least K nodes, discovered
  // via the bootstrap nodes)

  // find peers for the given torrent info hash
  dht.lookup(parsed.infoHash)
});

dht.on('peer', function (addr, hash, from) {
  console.log('found potential peer ' + addr + ' through ' + from)
});
