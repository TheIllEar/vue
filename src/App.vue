<!-- 
- переделать компонент навигации и страницу vuex на композишн (добавить отдельный компонент)
 -->

<template>
  <component :is="layout + '-layout'"></component>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import AuthLayout from "./layout/AuthLayout";
import MainLayout from "./layout/MainLayout";

export default {
  setup() {
    const router = useRoute();
    return {
      layout: computed(() => router.meta.layout),
    };
  },
  components: {
    AuthLayout,
    MainLayout,
  },
};
</script>
