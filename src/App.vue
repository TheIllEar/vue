<!-- 
- После входа сохранять пользователя в стор
- Удалять токен через 24 часа
- Нормально создавать токен для юзера
- vuetify
- отдельный store для сокета
-------------------------------------------------------------------------------------
- переделать компонент навигации и страницу vuex на композишн (добавить отдельный компонент)
- обработка ошибок алертом
- ввод комнаты(может еще ввод ключевого слова для JWT)
- сделать змену цвета BG на pinia
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
