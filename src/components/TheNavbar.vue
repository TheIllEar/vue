<template>
  <header class="navbar">
    <h3>VF</h3>
    <ul class="navbar-menu">
      <li>
        <router-link to="/">
          <span @click="$router.push('/')">Main</span>
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
            :class="{active: $route.path.indexOf(href) != -1}"
          >Langs</a>
        </router-link>
      </li>
      <li><router-link to="/vuex">Counter</router-link></li>
      <li><router-link to="/ws_messenger">Messenger</router-link></li>
      <li>
        <a
          href="#"
          @click.prevent="logoutHandler"
          class="danger"
        >Logout</a>
      </li>
    </ul>
  </header>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations("auth", ["logout"]),
    navigateHandler(navigate, href) {
      // navigate();
      this.$router.push({ path: href });
    },
    logoutHandler() {
      this.logout();
      this.$router.push({ path: "/login" });
    },
  },
};
</script>