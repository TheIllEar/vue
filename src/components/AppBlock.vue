<template>
  <div class="container">
    <AppAlert
      v-if="alert"
      type="danger"
      title="Упс!!!"
      text="А тут ошибочка =("
      @hide="toggleAlert"
    />
    <div class="card">
      <button
        class="btn primary"
        @click="toggleAlert"
      >{{alert ? $i18n('app.hide') : $i18n('app.show')}} {{$i18n('app.message')}}</button>
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

