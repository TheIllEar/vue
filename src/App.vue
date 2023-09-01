<!-- 
- Переключение языка
- Удалять токен через 24 часа
- Загружать юзера из монго
- Нормально создавать комнату для юзера
- Vuetify
- Отдельный store для сокета
- Переделать на композишн
- Сделать змену цвета BG на pinia / переделать на pinia
- Адаптив
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
    const route = useRoute();
    return {
      layout: computed(() => route.meta.layout),
    };
  },
  components: {
    AuthLayout,
    MainLayout,
  },
};
</script>
