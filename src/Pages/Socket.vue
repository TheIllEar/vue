<template>
  <div class="card">
    <h1>Работа с сокетами - обмен сообщениями</h1>
    <form @submit.prevent="submitToken">
      <input
        type="text"
        placeholder="Enter token"
        v-model="token"
      />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import socket from "../js/custom/socket.client";

export default {
  name: "Socket",
  components: {},
  created() {
    socket.setupSocketConnection();
  },
  beforeUnmount() {
    socket.disconnect();
  },
};
</script>