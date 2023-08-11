// @todo переделать на отдельный Vue проект
// .env for VUE_APP_SOCKET_ENDPOINT, PORT and ENV
// удалить лишнее из package.json

const app = require('express')();
const http = require('http').createServer(app);
const jwt = require('jsonwebtoken');
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:8080'],
  },
});

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

// Проверка токена JWT
const JWT_SECRET = 'theillear'; // jwt secret

io.use(async (socket, next) => {
  const token = socket.handshake.auth.token; // fetch token from handshake auth sent by FE
  console.log('check token');
  try {
    const user = await jwt.verify(token, JWT_SECRET); // verify jwt token and get user data
    console.log('user: ', user.name);
    socket.user = user; // save the user data into socket object, to be used further
    next();
  } catch (e) {
    console.log('error', e.message);
    return next(new Error(e.message));
  }
});

// Установка соединения
io.on('connection', (socket) => {
  socket.join('myRandomChatRoomId');
  console.log('User connected');

  socket.on('message', ({ message, roomName }, callback) => {
    console.log('Sent message: ' + message + ' in ' + roomName);

    // generate data to send to receivers
    const outgoingMessage = {
      name: socket.user.name,
      id: socket.user.id,
      message,
    };

    // send socket to all in room except sender
    socket.in(roomName).emit('broadcast', outgoingMessage);
    callback({
      status: 'ok',
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
