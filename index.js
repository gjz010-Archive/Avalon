var mc = require('minecraft-protocol');
var options = {
  'online-mode': false, // optional
};

var server = mc.createServer(options);

server.on('login', function(client) {
  var addr = client.socket.remoteAddress;
  console.log('Incoming connection', '('+addr+')');

  client.on('end', function() {
    console.log('Connection closed', '('+addr+')');
  });

  // send init data so client will start rendering world
  client.write(0x01, {
    entityId: client.id,
    levelType: 'default',
    gameMode: 1,
    dimension: 0,
    difficulty: 2,
    maxPlayers: server.maxPlayers
  });
  client.write(0x0d, {
    x: 0,
    y: 20.0,
    stance: 128.0,
    z: 0,
    yaw: 0,
    pitch: 0,
    onGround: false
  });
  client.write(0xCE, {
    name: "hello",
    displayText: "HelloWorld",
    action: 0
  });
  client.write(0xCF, {
    itemName: "Server",
    remove: 0,
    scoreName: "hello",
    value: 10
  });
//  var zlib = require("zlib");
var input = {
    id: 5,
    itemCount: 56,
    itemDamage: 2,
    nbtData: new Buffer(0)
  };
/*
zlib.gzip(input, function(err, buffer) {
  if (!err) {
    console.log("OK");
    //console.log(input);
    //console.log(buffer);
    //console.log(buffer.toString('base64'));
client.write(0x67, {
    windowID: 0,
    slot: 36,
    item: buffer
  });
  }else{
  console.log(err);
  }
});
*/
client.write(0x67, {
    windowID: 0,
    slot: 36,
    item: input
  });
  var msg = {
    translate: 'chat.type.announcement',
    using: [
      'Server',
      'Hello, world!'
    ]
  };
  client.write(0x03, { message: JSON.stringify(msg) });
  client.write(0x35, { 
x:0,
y:60,
z:0,
type:78,
metadata:0
 });
client.on(0xcb,function(data){
client.write(0xcb, {
    text: 'avalonse'
  });
}
);
});

server.on('error', function(error) {
  console.log('Error:', error);
});

server.on('listening', function() {
  console.log('Server listening on port', server.socketServer.address().port);
});
