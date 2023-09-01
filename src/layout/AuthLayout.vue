<template>
  <div class="container">
    <AppAlert
      v-if="message"
      :type="message.type"
      title="Ойой"
      :text='message.value'
      @hide="toggleAlert"
    />
    <RouterView />
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import AppAlert from "../components/AppAlert";

export default {
  setup() {
    const store = useStore();
    const toggleAlert = () => {
      store.commit("clearMessage");
    };
    return {
      toggleAlert,
      message: computed(() => store.state.message),
    };
  },
  components: {
    AppAlert,
  },
};
</script>
<style lang="">
</style>