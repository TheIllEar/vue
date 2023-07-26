<template>
  <div class="container">
    <AppAlert
      v-if="alert"
      type="danger"
      title="Упс!!!"
      text="А тут ошибочка =("
    />
    <div class="card">
      <button
        class="btn primary"
        @click="toggleAlert"
      >{{alert ? 'Скрыть' : 'Показать'}} сообщение</button>
    </div>
  </div>
</template>

<script>
import AppAlert from "../components/AppAlert.vue";
import alertMixin from "../mixins/alertMixin";

export default {
  mixins: [alertMixin],
  components: {
    AppAlert,
  },
};
</script>

