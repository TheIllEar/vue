<template>
  <div class="container">
    <div class="card">
      <h2>Работа с сокетами - обмен сообщениями</h2>
      <form
        class="box-row form-control"
        @submit.prevent="submitToken"
      >
        <input
          class="input"
          type="text"
          placeholder="Enter token"
          v-model="token"
        />
        <button
          class="btn ml-10 mr-0"
          type="submit"
        >Submit</button>
      </form>
    </div>
    <div class="card">
      <div class="messages"></div>
      <form
        class="box-column form-control"
        @submit.prevent="submitMessage"
      >
        <input
          class="input input-message"
          type="text"
          placeholder="Type in text"
          v-model="inputMessageText"
        />
        <button
          class="btn mt-10"
          type="submit"
        >Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import socket from "../js/custom/socket.client";

export default {
  name: "Socket",
  data() {
    return {
      token: "",
      inputMessageText: "",
    };
  },
  methods: {
    // Записать токен в стораж, показывать блок если нет токена и ссылку на его создание
    // https://jwt.io/
    submitToken() {
      socket.setupSocketConnection(this.token);
    },
    submitMessage() {
      const CHAT_ROOM = "myRandomChatRoomId";
      const message = this.inputMessageText;
      socket.sendMessage({ message, roomName: CHAT_ROOM }, (cb) => {
        console.log('cb', cb);
      });
    },
  },
  beforeUnmount() {
    socket.disconnect();
  },
};
</script>