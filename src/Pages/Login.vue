<template>
  <div>
    <AppLoader v-if="loading" />
    <AppLoginFormVue v-if="loginForm" />
    <AppRegistrationFormVue v-else />
  </div>
</template>
<script>
import AppLoader from "../components/AppLoader.vue";
import AppLoginFormVue from "../components/AppLoginForm.vue";
import AppRegistrationFormVue from "../components/AppRegistrationForm.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    return {
      loginForm: computed(() => store.getters["auth/isLogin"]),
      loading: computed(() => store.getters["isLoading"]),
    };
  },
  components: {
    AppLoader,
    AppLoginFormVue,
    AppRegistrationFormVue,
  },
};
</script>
<style lang="scss">
</style>