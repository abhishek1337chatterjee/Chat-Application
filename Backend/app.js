const express = require("express");
const app = express();
const path = require('path');



const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () =>
  console.log(`📢 Server is listening ${PORT}`)
);

const io = require('socket.io')(server);

// io.on('connection',(socket)=>{
//   console.log(socket.id)
// })

let socketsConnected = new Set();

io.on('connection', onConnected)
 function onConnected(socket) {
  console.log(socket.id);
  socketsConnected.add(socket.id, socketsConnected.size);
 
io.emit('clients-total',socketsConnected.size)

  socket.on('disconnect', () => {
    console.log('socket disconnected', socket.id);
    io.emit('clients-total', socketsConnected.size)
    socketsConnected.delete(socket.id);
  })

  socket.on('message', (data) => {
    console.log(data);
    socket.broadcast.emit('chat-message', data)
  })
  socket.on('feedback', (data)=>{
    socket.broadcast.emit('feedback', data)
   })
 }

 

app.use(express.static(path.join(__dirname, 'public')))