import { io } from 'socket.io-client';

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection(token, room) {
    const socketServerEndpoint = process.env.NODE_ENV === 'development' ? process.env.VUE_APP_SOCKET_ENDPOINT : 'https://vue-server.onrender.com/';
    this.socket = io(socketServerEndpoint, {
      auth: {
        token,
        room,
      },
    });

    this.socket.on('broadcast', (data) => {
      console.log(`Message from ${data.name}: `, data.message);
    });
    console.log(`Connecting socket...`);
  }

  subscribeToMessages(cb) {
    if (!this.socket) return true;
    this.socket.on('broadcast', (msg) => {
      console.log('Room event received!');
      return cb(null, msg);
    });
  }

  sendMessage({ message, roomName }, cb) {
    if (this.socket) {
      this.socket.emit('message', { message, roomName }, cb);
    }
  }
 
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();
