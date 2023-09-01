<template>
  <div class="container">
    <div class="card">
      <h2>{{$i18n('app.title')}}</h2>
      <button
        class="btn"
        @click="changeLanguage"
      >{{$i18n('app.changeLang')}}</button>
    </div>
    <AppAlert
      v-if="alert"
      :type="type"
      title="Ойой"
      text="Скрой меня =)"
      @hide="toggleAlert(); changeColor();"
    />
    <div class="card flex">
      <p
        class="card-text"
        v-color:[colorType].hover="myColor"
      >{{$i18n('app.changeColor')}}</p>
      <button
        class="btn primary"
        @click="toggleAlert(); changeColor();"
      >{{alert ? $i18n('app.hide') : $i18n('app.show')}} {{$i18n('app.message')}}</button>
    </div>

    <AppBlock :update='update' />
  </div>
</template>

<script>
import AppAlert from "../components/AppAlert";
import AppBlock from "../components/AppBlock";
import alertMixin from "../mixins/alertMixin";
import colorDirective from "../directives/colorDirective";

export default {
  data() {
    return {
      type: "primary",
      myColor: "black",
      colorType: "color",
      lang: "ru",
      update: false,
    };
  },
  mixins: [alertMixin],
  directives: { color: colorDirective },
  inject: ["changeLang"],
  methods: {
    changeColor() {
      this.myColor = this.alert ? "#42b983" : "black";
    },
    changeLanguage() {
      this.lang = this.lang === "ru" ? "en" : "ru";
      this.changeLang(this.lang);
      // this.$forceUpdate();
      this.update = !this.update;
    },
  },
  components: {
    AppAlert,
    AppBlock,
  },
};
</script>

