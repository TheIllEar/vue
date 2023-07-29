<template>
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
            @click="navigate"
            class="danger"
            :class="{active: $route.path.indexOf(href) != -1}"
          >Остальное</a>
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  props: {},
};
</script>