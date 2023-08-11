<template>
<!-- 
- переделать компонент навигации и страницу vuex на композишн (добавить отдельный компонент)
 -->
  <header class="navbar">
    <h3>Vue Features</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">
          <span @click="$router.push('/')">Главная</span>
        </router-link>
      </li>
      <li><router-link to="/login">Login</router-link></li>
      <li>
        <router-link
          to="/other"
          custom
          v-slot="{ navigate, href }"
        >
          <a
            href="#"
            @click="navigateHandler(navigate, href)"
            class="danger"
            :class="{active: $route.path.indexOf(href) != -1}"
          >Остальное</a>
        </router-link>
      </li>
      <li><router-link to="/vuex">Vuex</router-link></li>
      <li><router-link to="/ws_messenger">Messenger</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      // myData: { oops: "gets removed" },
    };
  },
  props: {},
  methods: {
    navigateHandler(navigate, href) {
      // navigate();
      this.$router.push({ path: href });
    },
  },
};
</script>