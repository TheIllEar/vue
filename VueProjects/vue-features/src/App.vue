<!-- Все еще раз поппрактиковать -->
<template>
  <div class="container">
    <div class="container with-nav">
      <the-navbar></the-navbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";

export default {
  data() {
    return {
  
    };
  },
  methods: {
   
  },
  components: {
    TheNavbar
  },
};
</script>

