const app = require('express')();
var server = app.listen(9000);
var io = require('socket.io').listen(server);
this.userSockets = {};
io.on('connection', socket => {
  console.log('sock.id', socket.id);
  socket.on('register', userID => {
    console.log('register', userID)
    this.userSockets[userID] = socket.id; 
  })
  socket.on('data', data => {
    console.log('data', data)
    if ( Array.isArray(data.to) ) {
      data.to.map(userID => {
        console.log('data.to', userID, this.userSockets[userID], data)
        io.to(this.userSockets[userID]).emit('data', data)
      })
    }
    //log('socket.data', data);
  })
  socket.on('disconnect', () => { /* … */ });
  socket.on('event', data => { /* … */ });
  socket.on('disconnect', () => { /* … */ });
});