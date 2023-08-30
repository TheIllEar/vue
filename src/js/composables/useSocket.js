import { useStore } from 'vuex';
import { ref, reactive, computed, onMounted, onBeforeMount } from 'vue';
import socket from '../custom/socket.client';

export const useSocket = () => {
  const store = useStore(),
    currentRoom = ref(''),
    room = computed(() => store.getters['auth/room']),
    token = store.getters['auth/token'],
    user = store.getters['auth/user'],
    messages = reactive([]),
    inputMessageText = ref('');

  const submitRoom = () => {
    if (currentRoom.value) {
      store.commit('auth/setRoom', currentRoom.value);
      socket.setupSocketConnection(token, currentRoom.value);
      socket.subscribeToMessages((err, data) => {
        messages.push(data);
      });
    }
  };

  const submitMessage = () => {
    const message = inputMessageText.value;
    socket.sendMessage({ message, roomName: room.value }, (cb) => {
      messages.push({
        ...user,
        isUser: true,
        message,
      });
      console.log('cb', cb);
    });
  };

  onBeforeMount(() => {
    socket.disconnect();
  });

  return {
    room,
    messages,
    currentRoom,
    inputMessageText,
    submitRoom,
    submitMessage,
  };
};
