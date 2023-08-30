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
      <li><a
          href="#"
          @click.prevent="logoutHandler"
        >Logout</a></li>
    </ul>
  </header>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      // myData: { oops: "gets removed" },
    };
  },
  props: {},
  methods: {
    ...mapMutations('auth',['logout']),
    navigateHandler(navigate, href) {
      // navigate();
      this.$router.push({ path: href });
    },
    logoutHandler() {
      this.logout();
      this.$router.push({path: "/login"});
    },
  },
};
</script>