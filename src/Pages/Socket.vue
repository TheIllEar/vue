<template>
  <div class="container">
    <div class="card">
      <h2>Работа с сокетами - обмен сообщениями</h2>
      <form
        class="box-row form-control"
        @submit.prevent="submitRoom"
      >
        <input
          class="input"
          type="text"
          placeholder="Enter room"
          v-model="currentRoom"
        />
        <button
          class="btn ml-10 mr-0"
          type="submit"
        >Connection</button>
      </form>
    </div>
    <div
      v-if="room"
      class="card"
    >
      <div class="messages">
        <div
          v-for="user in messages"
          :key="user.id"
          :class="{'user-message': user.isUser, 'message': !user.isUser}"
        >
          <span>{{user.name}}</span>: {{user.message}}
        </div>
      </div>
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
import { useSocket } from "../js/composables/useSocket";

export default {
  setup() {
    // const store = useStore();
    return { ...useSocket() };
  },
};
</script>