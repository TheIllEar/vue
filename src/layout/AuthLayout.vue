<template>
  <div class="container">
    <AppAlert
      v-if="message"
      :type="message.type"
      title="Ойой"
      :text='message.value'
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
    return {
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