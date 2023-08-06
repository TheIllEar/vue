import { io } from 'socket.io-client';

let socket = false;
export default {
  setupSocketConnection() {
    socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);

    socket.emit('my message', 'Hello there from Vue.');

    socket.on('my broadcast', (data) => {
      console.log(data);
    });
  },
  disconnect() {
    if (socket) {
      socket.disconnect();
    }
  },
};


// class SocketioService {
//   socket;
//   constructor() {}

//   setupSocketConnection() {
//     this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);

//     this.socket.emit('my message', 'Hello there from Vue.');

//     this.socket.on('my broadcast', (data) => {
//       console.log('lol', data);
//     });
//   }
//   disconnect() {
//     if (this.socket) {
//       this.socket.disconnect();
//     }
//   }
// }

// export default new SocketioService();