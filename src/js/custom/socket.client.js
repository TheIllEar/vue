// @todo check on ENV for VUE_APP_SOCKET_ENDPOINT || 'http://localhost:3000'
import { io } from 'socket.io-client';

// let socket = false;
// export default {
//   setupSocketConnection(token) {
//     // socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);

//     // socket.emit('my message', 'Hello there from Vue.');

//     // socket.on('my broadcast', (data) => {
//     //   console.log(data);
//     // });
//     this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT, {
//       auth: {
//         token,
//       },
//     });

//     console.log(`Connecting socket...`);
//   },
//   sendMessage({ message, roomName }, cb) {
//     if (this.socket) {
//       this.socket.emit('message', { message, roomName }, cb);
//     }
//   },
//   // subscribeToMessages(cb) {
//   //   if (!this.socket) return true;
//   //   this.socket.on('message', (msg) => {
//   //     console.log('Room event received!');
//   //     return cb(null, msg);
//   //   });
//   // },
//   disconnect() {
//     if (socket) {
//       socket.disconnect();
//     }
//   },
// };

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection(token) {
    this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT, {
      auth: {
        token,
      },
    });

    this.socket.on('broadcast', (data) => {
      console.log(`Message from ${data.name}: `, data.message);
    });
    console.log(`Connecting socket...`);
  }
  sendMessage({ message, roomName }, cb) {
    if (this.socket) {
      this.socket.emit('message', { message, roomName }, cb);
    }
  }
  // subscribeToMessages(cb) {
  //   if (!this.socket) return true;
  //   this.socket.on('message', (msg) => {
  //     console.log('Room event received!');
  //     return cb(null, msg);
  //   });
  // }
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export default new SocketioService();
